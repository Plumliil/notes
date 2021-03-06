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
### 7.数组去重
es5
~~~javascript
let arr = [1, 1, 2, 1, 3, 4, 5];
function unique(arr) {
  let res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return res
}
console.log(unique(arr)); // [1,2,3,4,5]
~~~
for循环
~~~javascript
let arr = [1, 1, 2, 1, 3, 4, 5];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === i) {
    newArr.push(arr[i])
  }
}
console.log(newArr); // [1,2,3,4,5]
~~~
es6
~~~javascript
let es6Arr = arr => [...new Set(arr)]
~~~
### 8.数组扁平化
for循环
~~~javascript
let arr = [1, 2, [3, 4, [5, 6, [7]]]];
function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(flatten(arr)); // [1,2,3,4,5,6,7]
~~~
es6实现
~~~javascript
let arr = [1, 2, [3, 4, [5, 6, [7]]]];
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten(arr)); // [1,2,3,4,5,6,7]
~~~
### 9.深拷贝
递归拷贝所有层级属性
~~~javascript
function deepCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {}
  if (obj && typeof (obj) === 'object') {
    for (let key in obj) {
      if (typeof (obj[key]) === "object") {
        newObj[key] = deepCopy(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  return newObj
}
~~~
JSON转换
~~~javascript
let obj1 = {
  name: 'obj1',
  age: 20,
  hobbies: ['eat', 'sleep'],
  lesson: {
    name: 'js',
    click: '220'
  }
}
function deepCopy(obj) {
  let newObj = JSON.stringify(obj)
  newObj = JSON.parse(newObj)
  return newObj
}
let obj2 = deepCopy(obj1);
obj2.name = 'obj2';
obj2.hobbies.push('code');
obj2.lesson['price'] = 132;
console.log('obj1', obj1); // obj1 {"name":"obj1","age":20,"hobbies":["eat","sleep"],"lesson":{"name":"js","click":"220"}}
console.log('obj2', obj2); // obj2 {"name":"obj2","age":20,"hobbies":["eat","sleep","code"],"lesson":{"name":"js","click":"220","price":132}}
~~~
### 10.call()&apply()&bind()实现
三种函数的实现思想基本一致，都是给传入的对象创建一个临时的函数方法，使该函数方法等于要调用函数
，此时调用函数的this就指向了传入的对象，函数调用后删除创建的临时方法，最终返回函数调用的结果。

其中bind()函数返回的是一个可执行函数，bind()不是立即执行，需要进行调用
- call函数封装
~~~javascript
function pliCall(fn, obj, ...args) {
    if (obj === undefined || obj === null) {
        obj = globalThis
    }
    obj.temp = fn
    let result = obj.temp(...args)
    delete obj.temp
    return result
}
~~~
- apply函数
~~~javascript
function pliApply(fn,obj,args){
    if(obj===undefined||obj===null){
        obj=globalThis
    }
    obj.temp=fn;
    let result=obj.temp(...args)
    delete obj.temp
    return result
}
~~~
- bind函数
~~~javascript
function pliBind(fn,obj,...args){
    return function(...args2){
        if(obj===undefined||obj===null){
            obj=globalThis
        }
        obj.temp=fn;
        let result=obj.temp(...args,...args2)
        delete obj.temp;
        return result
    }
}
~~~
### 11.节流防抖函数的封装
- 节流
~~~javascript
function throttle(callback,wait){
  let start=0;
  return function(e){
    let now=Date.now();
    if(now-start>=wait){
      callback.call(this,e);
      start=now
    }
  }
}
~~~
- 防抖
~~~javascript
function debounce(callback,time){
  let timer=null;
  return function(e){
    if(timer) clearTimeout(timer);
    timer=setTimeout(()=>{
      callback.call(this,e);
      timer=null;
    },time)
  }
}
~~~