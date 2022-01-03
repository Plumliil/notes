// 1.数据类型判断
// typeof可以正确识别：undefined，boolean，number，string，symble，function等类型的数据，
// 但对于其他的都会认为是object 所以通过typeof来判断数据类型不准确，但是可以使用Object.prototype.toString来实现
function typeOf(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1];
    res = res.slice(0, -1).toLowerCase()
    return res
}
// console.log(typeOf([]));
// 2.原型链的继承
// 原型链继承存在的问题
// 原型中包含的引用类型属性将被所有实例共享
// 字类在实例化的时候不能给父类构造函数传参
function Animal() {
    this.color = ['black', 'white']
}
// 在Animal的原型上添加getColor方法
Animal.prototype.getColor = function () {
    // console.log(this.color);
}

function Dog() {}
// 使Dog的原型对象是Animal
Dog.prototype = new Animal()
let dog = new Dog();
dog.getColor(); // [ 'black', 'white' ]
// 新实例化出的dog可以使用原型上的方法
// 3.使用构造函数实现继承
function Plant(name) {
    this.name = name;
    this.getName = function () {
        return this.name
    }
}

function Tree(name) {
    // 使用call函数使Tree使用Plant方法，从而实现继承
    Plant.call(this, name)
}
Tree.prototype = new Plant()
let willow = new Tree('willow')
// console.log(willow.getName()); // willow

// 7.数组去重
let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8]
// es5语法
function unique(arr) {
    let res = arr.filter((item, index, array) => {
        return array.indexOf(item) === index
    })
    return res
}
// console.log(unique(arr));
// for循环
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
        newArr.push(arr[i])
    }
}
// es6实现
let es6Arr = arr => [...new Set(arr)]
// console.log(es6Arr);
// console.log(newArr);

// 8.数组扁平化
let farr = [1, [2, 3, [4, 5, [6, 7]]]]
// es6实现
// console.log(farr.flat(4));
// 循环实现
function flatten(arr) {
    let newFarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newFarr = newFarr.concat(flatten(arr[i]))
        } else {
            newFarr.push(arr[i])
        }
    }
    return newFarr
}
// console.log(flatten(farr));
// es6实现
function flatting(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr)
    }
    return arr
}

// 9.深拷贝
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

// 10.手写函数
// 改变函数this的指向来执行函数
// call函数封装
function pliCall(fn, obj, ...args) {
    if (obj === undefined || obj === null) {
        obj = globalThis
    }
    obj.temp = fn
    let result = obj.temp(...args)
    delete obj.temp
    return result
}
// apply函数
function pliApply(fn,obj,args){
    if(obj===undefined||obj===null){
        obj=globalThis
    }
    obj.temp=fn;
    let result=obj.temp(...args)
    delete obj.temp
    return result
}
// bind函数
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
