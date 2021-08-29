# Express

## Express是什么

### Express是一个快速，简单，极简的Node.js web开发应用框架，通过它，可以轻松的创建各种web应用。例如

* 接口服务
* 传统的web网站
* 开发工具集成的
* ...

### Express本身是极简的，仅仅提供了web开发的基础功能，但是它通过中间件的方式集成了许许多多的外部插件来处理http请求

* body-parser：解析HTTP请求体
* compression：压缩HTTP响应
* cookie-parser：解析cookie数据
* cors：处理跨域资源请求
* morgan：HTTP请求日志记录
* ...

### Express中间件固然强大，但是它所提供的灵活性是一把双刃剑

### 它让Express本身变得灵活和简单

### 缺点在于虽然一些中间件包可以解决几乎所有的问题和需求，但是挑选合适的包时也会成为一个挑战

### Express不对Node.js已有的特性进行二次抽象，只是在它之上扩展了web应用所需的基本功能

* 内部使用还是http模块
* 请求对象继承自http.IncomingMessage
* 响应对象继承自http.SeverResponse
* ...

### 有很多流行框架基于Express

* LoopBack：高度可扩展开源的Node.js框架，用于快速创建动态的端到端RESTAPI
* Sails：用于Node.js的MVC框架，用于构建实用的，可用于生产的应用程序
* NestJs：一个渐进式的Node.js框架，用于在TypeScript和JavaScript（ES6,ES7,ES8）之上构建按搞笑，可扩展的企业级服务器端应用
* ...

### Express开发zuozhe TJ

* Express，commander，ejs，co，koa...

## Express 特性

* 简单易学
* 丰富的API支持，以及常见的HTTP辅助程序，例如重定向，缓存等
* 强大的路由功能
* 灵活的中间件
* 高性能
* 非常稳定（源代码几乎100%覆盖率）
* 视图系统支持14个以上的主流模板引擎
* ...

## Express发展史

* ...

## Express

* 传统的Web网站
* 接口服务
* 服务器端渲染中间层
* 开发工具
* ...

## 路由基础

路由是指确定应用程序如何响应客户端对指定端点的请求，该特定端点是URI（或路径）和特定的HTTP请求方法（GET,POST等）。

每个路由可以具有一个或多个处理程序函数，这些函数在匹配该路由时执行。路由定义采用以下节后：

`app.METHOD(PATH,HANDLER)`

* app是Express实例
* METHOD是小写的HTTP请求方法
* PATH是服务器上的路径
* HANDER是当路由匹配时执行的功能

下面是一些简单示例：

在根路径响应Hello World：

~~~javascript
app.get('/',(req,res)=>{
  res.send('Hello World');
})
~~~

在跟路由响应POST请求：

~~~javascript
app.post('/',(req,res)=>{
  res.send('post /');
})
~~~

相应对/user路由的PUT请求：

~~~javascript
app.put('/user',(req,res)=>{
    res.send('put user');
})
~~~

相应对/user路由的DELETE请求：

~~~javascript
app.delete('/user',(req,res)=>{
    res.send('delete user');
})
~~~

## 请求和响应

### 请求对象

req对象代表HTTP请求，并具有请求查询字符串，参数，正文，HTTP表头等的属性。在文本文档中，按照约定，该对象始终成为req（HTTP响应为res），但其实实际名称由当前正在使用的回调函数的参数确定。

属性：

### 响应对象

res对象表示Express应用在收到HTTP请求时发送的HTTP响应。在文本文档中，按照约定，该对象始终成为res（HTTP请求为req），但其实际名称由正在使用的回调函数的参数决定

属性：

* res.app
* res.headersSent
* res.locals

### 案例

通过该案例创建一个简单的CRUD接口服务，从而掌握Express基本用法。

需求：实现对任务清单的CRUD接口服务

* 查询列表  GET /todos
* 根据ID查询单个任务 GET /todos/:id
* 添加任务 POST /todos
* 修改任务 PATCH /todos
* 删除任务 DELETE /todos/:id

封装getDb方法

```javascript
const fs=require('fs');
const {promisify}=require('util');
const path=require('path');
const readFile=promisify(fs.readFile);

const dbPath=path.join(__dirname,'./db.json');

exports.getDb=async ()=>{
    const data=await readFile(dbPath,'utf8');
    return JSON.parse(data);
}
```
