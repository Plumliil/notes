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
