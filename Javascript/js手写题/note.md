# js手写题

### 1.数据类型判断，typeof的实现
typeof可以正确识别：undefined，boolean，number，string，symble，function等类型的数据，但对于其他的都会认为是object 所以通过typeof来判断数据类型不准确，但是可以使用Object.prototype.toString来实现
~~~javascript
function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1];
  res = res.slice(0, -1).toLowerCase()
  return res
}
console.log(typeOf([])); // array
~~~
### 2.原型链的继承
原型链继承存在的问题
- 原型中包含的引用类型属性将被所有实例共享
- 子类在实例化的时候不能给父类构造函数传参
~~~javascript
function Animal() {
  this.color = ['pink', 'gray']
}
Animal.prototype.getColor = function () {
  console.log(this.color)
}
let a = new Animal()
function Dog() { }
Dog.prototype = new Animal()
let dog = new Dog()
dog.getColor()
~~~
### 3.借用构造函数实现继承
借用构造函数继承解决了原型链继承的2个问题：引用类型共享问题以及传参问题。但是由于方法定义在构造函数中，所以会导致创建子类实例都会创建一遍方法
~~~javascript
function Plant(name) {
  this.name = name;
  this.getName = function () {
    console.log(this.name);
  }
}
function Tree(name) {
  Plant.call(this, name)
}
Tree.prototype=new Plant();
let willow = new Tree('willow');
willow.getName()
~~~
### 4.组合继承
组合继承结合了原型链和盗用构造函数，将两者的优点集中起来，基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性，这样既可以把方法定义在原型上实现重用，又可以让每个实例都有自己的属性。
~~~javascript
        function Ball(name){
            this.name=name;
            this.color=['black','red']
        }
        Ball.prototype.getName=function(){
            console.log(this.name);
        }
        function Football(name,size){
            Ball.call(this,name);
            this.size=size;
        }
        Football.prototype=new Ball()
        Football.prototype.constructor=Football;
        let fb1=new Football('fb1',20)
        console.log(fb1); // Football {name: 'fb1', color: Array(2), size: 20}
        let fb2=new Football('fb2',22)
        fb2.color.push('pink')
        console.log(fb2); // Football {name: 'fb2', color: Array(3), size: 22}
~~~
### 5.寄生组合继承
使用原型工厂封装继承
~~~javascript
function extend(child, parent) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child;
}
function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.color = ['black', 'gray']
}
Animal.prototype.getColor = function () {
  console.log(this.color);
}
function Dog(name, age) {
  Animal.apply(this, [name, age])
}
extend(Dog, Animal)
let d = new Dog('Dh', 5);
console.log(d); // Dog {name: 'Dh', age: 5, color: Array(2)}
d.getColor(); // ['black', 'gray']
~~~
### 6.class实现继承使用super关键字实现继承

~~~javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);;
  }
}
class Dog extends Animal {
  constructor(name, color) {
    super(name)
    this.color = color;
  }
}
let d = new Dog('Dh', 'white');
console.log(d); // Dog {name: 'Dh', color: 'white'}
d.getName(); // Dh 
~~~