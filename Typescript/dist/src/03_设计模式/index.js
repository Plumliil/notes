"use strict";
// class MyLocalStorage {
//   static localstorage: MyLocalStorage;
//   public setItem(key: string, value: any) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
//   public getItem(key: string) {
//     let value = localStorage.getItem(key);
//     return value ? JSON.parse(value) : null;
//   }
//   private constructor() {
//     console.log("ts 单件设计模式静态方法构造器");
//   }
//   // 提供一个外部访问的方法
//   // 通过这个方法来提供外部得到一个对象的方法
//   // 1.带static关键字的方法就是一个静态方法
//   // 2.静态方法和对象无关,外部的对象变量不能调用静态方法和静态属性
//   // 3.外部可以通过类名来调用
//   // 静态方法不可以访问实例属性或者实例方法(对象属性或者对象方法)
//   public static getInstance() {
//     // let localStorage=new MyLocalStorage();
//     // return localStorage;
//     // return new MyLocalStorage();
//     if (!this.localstorage) {
//       this.localstorage = new MyLocalStorage();
//       console.log('我是一个undefind静态属性,用来指向一个对象空间的静态属性');
//     }
//     return this.localstorage;
//   }
// }
// console.log(MyLocalStorage.getInstance());
// console.log(MyLocalStorage.getInstance());
// // ts 单件设计模式静态方法构造器
// // 我是一个undefind静态属性,用来指向一个对象空间的静态属性
// // 只打印一次
var MyLocalStorage = /** @class */ (function () {
    function MyLocalStorage() {
        console.log("ts 单件设计模式静态方法构造器");
    }
    MyLocalStorage.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    MyLocalStorage.getItem = function (key) {
        var value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    };
    //   提供外部获取得到一个对象
    MyLocalStorage.getInstance = function () {
        // if (!this.localstorage) {
        //   this.localstorage = new MyLocalStorage();
        //   console.log("我是一个undefind静态属性,用来指向一个对象空间的静态属性");
        // }
        // return this.localstorage;
        return this.count;
    };
    MyLocalStorage.addTotal = function () {
        this.total++;
    };
    MyLocalStorage.count = 3;
    MyLocalStorage.total = 0;
    return MyLocalStorage;
}());
// console.log(MyLocalStorage.getInstance());
// console.log(MyLocalStorage.getInstance());
// console.log(MyLocalStorage.getItem("loginUser"));
// console.log(MyLocalStorage.count);
console.log('MyLocalStorage.addTotal()--1', MyLocalStorage.addTotal());
console.log(MyLocalStorage.total);
console.log('MyLocalStorage.addTotal()--2', MyLocalStorage.addTotal());
console.log(MyLocalStorage.total);
