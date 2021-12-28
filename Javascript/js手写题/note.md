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