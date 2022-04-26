# js高阶

## Promise

### 什么是Promise

Promise是异步编程的一个解决方案：从语法上讲它是一个对象，可以获取到异步操作的消息，从本意上讲，它是一个承诺，承诺过一段时间后它会给你一个结果。Promise有三种状态：pending(等待)，fulilled(成功)，rejected(失败)，状态一旦改变就不会再变，创建Promise后会立即执行。

### 为什么要使用Promise

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

### Promise 的常用 API 

- #### Promise.resolve(value)

类方法，该方法返回一个以 value 值解析后的 Promise 对象

1、如果这个值是个 thenable（即带有 then 方法），返回的 Promise 对象会“跟随”这个 thenable 的对象，采用它的最终状态（指 resolved/rejected/pending）

2、如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。

3、其他情况以该值为成功状态返回一个 Promise 对象。

```JavaScript
let p0=Promise.resolve('success');
p0.then(
    res=>{
        console.log(res);
    },
    err=>{
        console.log(err);
    }
)
// success
// 和p1效果相同
let p1=new Promise((resolve,reject)=>{
    resolve('success')
})
p1.then(
    res=>{
        console.log(res);
    },
    err=>{
        console.log(err);
    }
)
// success

//如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。  
function fn(resolve){
    setTimeout(function(){
        resolve(123);
    },3000);
}
let p2 = new Promise(fn);
let p3 = Promise.resolve(p2);
// 返回为true，返回的 Promise 即是 入参的 Promise 对象。
console.log(p2 === p3);
// true
```

- #### Promise.reject

类方法，且与 resolve 唯一的不同是，返回的 promise 对象的状态为 rejected。

- #### Promise.prototype.then

实例方法，为 Promise 注册回调函数，函数形式：fn(vlaue){}，value 是上一个任务的返回结果，then 中的函数一定要 return 一个结果或者一个新的 Promise 对象，才可以让之后的then 回调接收。

- #### Promise.prototype.catch

实例方法，捕获异常，函数形式：fn(err){}, err 是 catch 注册 之前的回调抛出的异常信息。

~~~javascript
let p=Promise.resolve('0 success');
p.then(
    res=>{
        console.log(res);
        return '1 success'
    }
)
.then(res=>{
    console.log(res);
    throw new Error('2 error')
})

.catch(err=>{
    console.log('catch',err);
})
// 0 success
// 1 success
// catch Error: 2 error
~~~

catch方法可以统一捕获then链式调用中产生的错误

- #### Promise.finally

实例方法，用于指定不管Promise对象最后状态如何，都会执行的操作，不管Promise最后的状态，在执行完then或者catch指定的回调以后都会执行finally方法。可以进行任何必要的清理工作

~~~js
let p=Promise.resolve('0 success');
p.then(
    res=>{
        console.log(res);
        return '1 success'
    }
)
.then(res=>{
    console.log(res);
    throw new Error('2 error')
})

.catch(err=>{
    console.log('catch',err);
})
.finally(()=>{
    console.log('p finally');
})
// 0 success
// 1 success
// catch Error: 2 error
// p finally
~~~

- #### Promise.all([...])

类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 。

~~~javascript
let p1 = Promise.resolve('p1 success');
let p2 = Promise.resolve('p2 success');
let p3 = Promise.reject('p3 error')
let arr = [p1, p2, p3]
Promise.all(arr)
    .then(
        res => {
            console.log(res);
        },
        err => {
            console.log(err);
        }
    )
    // p3 error

~~~

- #### Promise.race([...])

类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。

~~~javascript
let p1 = Promise.resolve('p1 success');
let p2 = Promise.resolve('p2 success');
let p3 = Promise.reject('p3 error')
let arr = [p1, p2, p3]
Promise.race(arr)
    .then(
        res => {
            console.log(res);
        },
        err => {
            console.log(err);
        }
    )
    // p1 success
~~~

- #### Promise.any([...])

与all相似，但是会忽略拒绝，所以只需要完成一个而不是全部

```JavaScript
let p1 = Promise.reject('p1 error');
let p2 = Promise.resolve('p2 success');
let p3 = Promise.reject('p3 error')
let arr = [p1, p2, p3]
Promise.any(arr)
    .then(
        res => {
            console.log(res);
        },
        err => {
            console.log(err);
        }
    )
// p2 success
```

#### 变式

#### Promise.none([...])

类似于all不过完成和拒绝的情况互换，只有所有的函数都被拒绝，该函数转化为完成值，反之亦然

#### Promise.first([...])

类似于any的竞争，只要第一个Promise完成，会忽略后边任何的拒绝和完成

#### Promise.last([...])

类似于first，但是只有最后一个完成胜出



1、了解 Promise 吗？

2、Promise 解决的痛点是什么？

3、Promise 解决的痛点还有其他方法可以解决吗？如果有，请列举。

4、Promise 如何使用？

5、Promise 常用的方法有哪些？它们的作用是什么？

6、Promise 在事件循环中的执行过程是怎样的？

7、Promise 的业界实现都有哪些？

8、能不能手写一个 Promise 的 polyfill。
	   链接：https://www.jianshu.com/p/84ef1b48fcce



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
~~~javascript
function debounce(fn,wait){
  let timeOut;
  return function(...args){
    if(timeOut) clearTimeout(timeOut);
    timeOut=setTimeout(()=>{
      fn.apply(this,args)
    },wait)
  }
}
~~~
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