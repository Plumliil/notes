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
## 异步

## 防抖

## 节流

## 宏任务，微任务

## 正则

## 类