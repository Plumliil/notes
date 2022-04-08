# js高阶

## Promise

避免回调地狱

```javascript
// 请求 代表 一个异步网络调用。
// 请求结果 代表网络请求的响应。

请求1(function(请求结果1){
    请求2(function(请求结果2){
        请求3(function(请求结果3){
            请求4(function(请求结果4){
                请求5(function(请求结果5){
                    请求6(function(请求结果3){
                        ...
                    })
                })
            })
        })
    })
})

```

解决办法

```javascript
new Promise(请求1)
    .then(请求2(请求结果1))
    .then(请求3(请求结果2))
    .then(请求4(请求结果3))
    .then(请求5(请求结果4))
    .catch(处理异常(异常信息))
```

### Promise 的常用 API 如下：

- #### Promise.resolve(value)

> 类方法，该方法返回一个以 value 值解析后的 Promise 对象 1、如果这个值是个 thenable（即带有 then 方法），返回的 Promise 对象会“跟随”这个 thenable 的对象，采用它的最终状态（指 resolved/rejected/pending/settled）
>  2、如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。
>  3、其他情况以该值为成功状态返回一个 Promise 对象。

上面是 resolve 方法的解释，传入不同类型的 value 值，返回结果也有区别。这个 API 比较重要，建议大家通过练习一些小例子，并且配合上面的解释来熟悉它。如下几个小例子：



```javascript
//如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。  
function fn(resolve){
    setTimeout(function(){
        resolve(123);
    },3000);
}
let p0 = new Promise(fn);
let p1 = Promise.resolve(p0);
// 返回为true，返回的 Promise 即是 入参的 Promise 对象。
console.log(p0 === p1);
```

传入 thenable 对象，返回 Promise 对象跟随 thenable 对象的最终状态。

> ES6 Promises 里提到了 Thenable 这个概念，简单来说它就是一个非常类似 Promise 的东西。最简单的例子就是 jQuery.ajax，它的返回值就是 thenable 对象。但是要谨记，并不是只要实现了 then 方法就一定能作为 Promise 对象来使用。



```javascript
//如果传入的 value 本身就是 thenable 对象，返回的 promise 对象会跟随 thenable 对象的状态。
let promise = Promise.resolve($.ajax('/test/test.json'));// => promise对象
promise.then(function(value){
   console.log(value);
});
```

返回一个状态已变成 resolved 的 Promise 对象。



```jsx
let p1 = Promise.resolve(123); 
//打印p1 可以看到p1是一个状态置为resolved的Promise对象
console.log(p1)
```

- #### Promise.reject

> 类方法，且与 resolve 唯一的不同是，返回的 promise 对象的状态为 rejected。

- #### Promise.prototype.then

> 实例方法，为 Promise 注册回调函数，函数形式：fn(vlaue){}，value 是上一个任务的返回结果，then 中的函数一定要 return 一个结果或者一个新的 Promise 对象，才可以让之后的then 回调接收。

- #### Promise.prototype.catch

> 实例方法，捕获异常，函数形式：fn(err){}, err 是 catch 注册 之前的回调抛出的异常信息。

- #### Promise.race

> 类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 。

- #### Promise.all

> 类方法，多个 Promise 任务同时执行。
>  如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。



1、了解 Promise 吗？

2、Promise 解决的痛点是什么？

3、Promise 解决的痛点还有其他方法可以解决吗？如果有，请列举。

4、Promise 如何使用？

5、Promise 常用的方法有哪些？它们的作用是什么？

6、Promise 在事件循环中的执行过程是怎样的？

7、Promise 的业界实现都有哪些？

8、能不能手写一个 Promise 的 polyfill。
	   链接：https://www.jianshu.com/p/84ef1b48fcce

### 	通俗理解

```javascript

const isTrue = true;

const newPromise = (name) => {
    return new Promise((resolve, reject) => {
        if (isTrue) {
            resolve('孩他爹');
        } else {
            reject('老公');
        }
    })
}

newPromise()
    .then(name => {
        console.log(`男人成为了${name}`);
    })
    .catch(name => {
        console.log(`男人成为了${name}`);
    })
    .finally(() => {
        console.log('他们最终结婚了');
    })
```

### promise图片异步加载

```javascript
function loadImageAsync(url) {
    return new Promise(function(resolve,reject) {
        var image = new Image();
        image.onload = function() {
            resolve(image) 
        };
        image.onerror = function() {
            reject(new Error('Could not load image at' + url));
        };
        image.src = url;
     });
}
// 自己写
const loadImageAsync = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject(new Error('Coude not load img'));
        }
    })
}
```

### 笔试题

红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何使用Promise让三个灯不断交替重复亮灯？（海康威视笔试题）

```javascript
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}
let myLight = (timer, cb) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
};
let myStep = () => {
  Promise.resolve().then(() => {
    return myLight(3000, red);
  }).then(() => {
    return myLight(2000, green);
  }).then(()=>{
    return myLight(1000, yellow);
  }).then(()=>{
    myStep();
  })
};
myStep();
// output:
// => red
// => green
// => yellow
// => red
// => green
// => yellow
// => red
```

## 闭包
1.函数内部也有一个函数
2.内部函数可以访问外部函数的变量
3.外部函数将内部函数作为返回值return出去

外部函数的变量会被保存下来一直存在
概念:能读取其他函数内部变量的函数
优点:
- 避免全局变量的污染
- 希望一个变量长期的存储在内存中(缓存变量)
缺点:
- 内存泄漏(消耗)
- 常驻内存,增加内存使用量 
## 异步

## 防抖

## 节流

## 宏任务，微任务

## 正则

## 类

## this
#### this绑定
在`javascript`中`this`有以下几种方式

##### 默认绑定

~~~javascript
function foo(){
    console.log(this.a);
}
var a = 1;
foo(); // 1
~~~

以上绑定代码即为this的默认绑定,当函数没有其他绑定时,此时this指向window对象;

##### 隐式绑定

隐式绑定需要考虑的是调用位置是否有上下文对象.如下代码所示:

~~~javascript
function foo(){
    console.log(this.a);
}
var obj = { 
    a:'obj',
    foo:foo
}
obj.foo(); // obj
~~~

在上述代码中`foo`函数作为一个值被赋予到了`obj`对象的`foo`属性中,此时的`this`指向`obj`这个对象,调用时

打印的`this.a`为`obj.a`为obj;再入下代码

~~~javascript
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 'obj2',
  foo: foo
}
var obj1 = {
  a: 'obj1',
  obj2: obj2
}
obj1.obj2.foo(); // obj2
~~~

`foo`函数是`obj2`中`foo`属性的值,上述代码中`obj1`通过调用自己的`obj2`属性来调用`obj2.foo`,打印出的值是`obj2`,可见对对象属性引用链中国只有上一层或者说是最后一层在调用位置起作用

##### 隐式丢失

​	在隐式绑定中存在隐式丢失这个问题,被隐式绑定的函数会丢失其隐式绑定对象,也就是说此时函数会应用默认绑定,从而把this绑定到全局对象或者`undefined`上,取决于是否为严格模式;

~~~javascript
function foo() {
    console.log(this.a);
}
function doFoo(fn) {
    fn();
}
var obj = {
    a: 'obj',
    foo: foo
}
var a = 'global this';
doFoo(obj.foo); // global this
doFoo.call(window,obj.foo); // global this
~~~

​	在上述代码中调用`doFoo`传入`obj.foo`此时`fn=obj.foo`(在AO对象中)可以看作一个隐式赋值,此时`doFoo`的`this`指向`window`,所以打印出来`golbal this`

​	如果把函数传入语言内置的函数而不是自己声明的函数,结果是一样的,比如`setTimeout`函数:

~~~javascript
setTimeout(obj.foo,100); // global this
// 伪代码如下
// function  setTimeout(fn,delay) {
//   // 等待delay
//   fn();
// }
~~~

##### 显示绑定

显示绑定可以借助`call`,`apply`函数完成,代码如下:

~~~javascript
function foo(){
    console.log(this.a)
}
var obj = {
    a:'obj'
}
foo.call(obj); // obj
foo.apply(obj); // obj
~~~

​	通过调用`call`或`apply`可以在调用`foo`时前置把它的`this`绑定到`obj`上;

​	在这里还有个概念`装箱`:如果传入了一个原始值(字符串类型,布尔类型或者数字类型)来当做his的绑定对象,这个原始值会被转换成它对应的对象形式(`new String()`...).

但显示绑定也无法解决丢失绑定的问题,此时显示绑定的一个变种硬绑定可以解决这个问题

##### 硬绑定

~~~JavaScript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 'obj'
}
var bar = function () {
  return foo.call(obj)
}
bar();
~~~

​	在上述代码中创建了一个`bar`函数,每次调用`bar`都会在`obj`上调用`foo`这种绑定是一种显示强制绑定,称之为硬绑定.

​	硬绑定的典型应用场景就是创造一个包裹函数,负责接收参数并返回值,由于硬绑定是一种非常常用的模式,所以`es5`提供了内置方法`Function.prototype.bind`,应用方法如下

~~~javascript
function foo(something) {
  console.log(this.a + something);
}
var obj = {
  a: 'obj'
}
foo.bind(obj)('  something'); // obj somehing
~~~

`bind`会返回一个硬编码的新韩淑,它会把指定参数者只为`this`上下文并调用原始函数;

##### 

##### new绑定

~~~javascript
function foo(a){
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
~~~

使用`new`调用`foo`时会构造一个新对象并把它绑定到`foo`调用中的`this`上.`new`是最后一种可以影响函数调用时`this`绑定行为的方法.