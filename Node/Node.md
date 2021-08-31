# Node.js

## 1：Node.js REPL

node.js REPL（Read Eval Print Loop：交互式解释器）表示一个电脑环境，类似与window系统的终端，可以在终端中输入命令，并接受系统的响应。

node自带了交互式解释器，可以执行以下任务：

​	读取：读取用户输入，解析输入的 Javascript 数据结构并存储在内存中。

​    执行：执行输入的数据结构

​	打印：输出结果

​	循环：循环操作以上步骤直到用户两次按下 **ctrl-c** 按钮退出。

​    Node 的交互式解释器可以很好的调试 Javascript 代码。

- **ctrl + c** - 退出当前终端。
- **ctrl + c 按下两次** - 退出 Node REPL。
- **ctrl + d** - 退出 Node REPL.
- **向上/向下 键** - 查看输入的历史命令
- **tab 键** - 列出当前命令
- **.help** - 列出使用命令
- **.break** - 退出多行表达式
- **.clear** - 退出多行表达式
- **.save \*filename\*** - 保存当前的 Node REPL 会话到指定文件
- **.load \*filename\*** - 载入当前 Node REPL 会话的文件内容。

## 2.回调函数

node.js 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了

回调函数在完成任务后就会被调用，node使用可大量的回调函数，node所有的api都支持回调函数

例如，我们可以一边读取文件，一边执行其他命令，再文件读取完成后，我们将文件内容作为回调函数的参数返回。

这样在执行代码时就没有阻塞或等待文件I/O操作。这就大大提高了node.js的性能，可以处理大量的并发请求。回调函数一般作为最后一个函数出现

```javascript
function foo1(name,age,callback){}
function foo2(value,callback1,callback2){}
```

### 阻塞代码实例:

```javascript
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");

//运行结果
//$ node main.js
//菜鸟教程官网地址：www.runoob.com
//程序执行结束!
```

### 非阻塞代码实例:

```javascript
var fs=require('fs');

fs.readFile('text.txt',function(err,data){
    if(err) {
        return console.log(err);
    }
    console.log(data.toString());
})
console.log('程序执行结束');

//运行结果
//$ node main.js
//程序执行结束!
//菜鸟教程官网地址：www.runoob.com
```

以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行程序。 第二个实例我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。

因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。





## 3.Node.js事件循环

![img](https://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg)

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：



## GET/POST请求

表单提交到服务器一般都使用GET/POST请求

### 获取GET请求内容

由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了？后面的部分，因此可以手动解析后面的内容作为GET请求的参数

node.js中的url模块中的parse函数提供了这个功能

#### URL参数

```javascript
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com',
  query: [Object: null prototype] { name: '菜鸟教程', url: 'www.runoob.com' },
  pathname: '/user',
  path: '/user?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com',
  href: '/user?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com'
}
```

```javascript
//  http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
```

### 获取POST请求

```javascript
const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
const util = require('util');
const querystring = require('querystring');

http.createServer((req, res) => {
    // 定义一个post变量，用于暂存请求体的信息
    let post = '';
    // 通过req.on的data事件监听函数，每当接收到请求体的数据，就累加到post变量中
    req.on('data', chunk => {
        post += chunk;
    })
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', () => {
        post = querystring.parse(post);
        res.end(util.inspect(post))
    })
    res.write('ok');
    res.end();
}).listen(3000);
```

实例

```javascript
var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);
```



## 4.模板引擎

模板引擎是第三方模块

让开发者以更加友好的方式拼接字符串，使项目代码更加清晰，更加易于维护

![image-20210524095909317](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210524095909317.png)

#### art-template

1. 在命令工具中使用 那npm install art-template 命令进行下载
2. 使用const template =require('art-template') 引入模板引擎
3. 告诉模板引擎要拼接的数据和模板在哪 const html=template()'模板路径 '，数据):

#### 模板语法

##### 介绍

提供了两种模板语法：标准语法和原始语法

标准语法可以让模板更加容易阅读，原始语法拥有更加强大的逻辑处理能力

##### 输出

将某项数据输出在模板中，模板语法和原始语法如下

标准语法：{{ 数据 }}

原始语法：< %= 数据 %>

输出带标签的语法：{{@ content}}，<%- content %>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    // 标准语法
    <p>{{ name }}</p>
    <p>{{ 1+1 }}</p>
    <p>{{@ content}}</p>
    // 原始语法
    <p><%=name %></p>
     <p><%= 1+2 %></p>
    <p><%- content %></p>
</body>
</html>
```

#### 条件判断

在模板中可以根据条件来决定显示哪块代码 ( 原始语法不可用 )

```javascript
// 标准语法
{{if 条件}} ... {{/if}}
{{if v1}} ... {{else if}} ... {{/if}}

{{if age>18}}
        年龄大于18
{{else if age<15}}
        年龄小于15
{{else}}
        年龄不符合要求
{{/if}}
// 原始语法  原始语法不可用
<% if(value) {% > ... < %} % >
<% if(value) {% > ... < %} else if (v2) {% > ... < %} % >
< % if (age>18) { % >
 年龄大于18 
< % } else if (age<15) { % >
 年龄小于15
< % } % >
```

#### 循环

标准语法：{{each 数据}}{{/each}}

原始语法：<%for(){%>  <%}%>（vscode不可用）

```javascript
<ul>
    {{each user}}
        <li>
            {{$value.name}}
            {{$value.age}}
            {{$value.sex}}
        </li>
    {{/each}}
</ul>
<ul>
    <% for (var i=0,i<user.length;i++){%>
        <li>
            <%=user[i].name%>
            <%=user[i].age%>
            <%=user[i].sex%>
        </li>
    <%}%>
</ul>
```

#### 子模版

使用子模版可以将网站公共区块（头部，底部）抽离到单独的文件中去

- 标准语法：{{include '模板'}}

- 原始语法：<%include ('模板')%>（vscode不可用）

```javascript
//标准语法
{{include '模板'}}
{{ include './common/header.art' }}
<div>
    {{ msg }}
</div>
{{ include './common/footer.art' }}
//原始语法
<%include ('模板')%>
```

#### 模板继承

使用模板继承可以将网站HTML抽离到单独的文件中，其他界面模板可以继承骨架文件

![image-20210524203952891](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210524203952891.png)

##### 首页模板

{{extend ‘ ./layout.art’}}

{{block 'head' }} {{/block}}

{{block 'content' }} {{/block}}

```html
<!--layout.art文件-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML骨架模板</title>
    {{block 'link'}}{{/block}}
</head>
<body>
    {{block 'content'}} {{/block}}
</body>
</html>
```



```javascript
{{extend './common/layout.art'}}

{{block 'content'}}
<p>
    {{msg}}
</p>
{{/block}}

{{block 'link'}}
    <link rel="stylesheet" href="style.css">
{{/block}}
```

#### 模板配置

1.像模版中导入变量 template.defaults.imports.变量名=变量值；

npm install dateformat

dateFormat

[dateformat - npm (npmjs.com)]

[(https://www.npmjs.com/package/dateformat)

```javascript
const dateFormat=require('dateformat');
template.defaults.imports.dateFormat=dateFormat;
```



```javascript
{{ dataFormat(time,'yyyy-mm-dd') }}
```

2.设置模板根目录 template.defaults.root=模板目录

3.设置默认的模板后缀 template.defaults.extname='.art'

```javascript
const template=require('art-template');
const { dirname } = require('path');
const path=require('path');
const dateFormat=require('dateformat');
// template方法是用来拼接字符串的
// 1.模板路径 绝对路径
// 2.要在模板中现实的数据 对象类型
// 返回拼接好的字符串
const views=path.join(__dirname,'views','06.art');

template.defaults.imports.dateFormat=dateFormat;

template.defaults.root=path.join(__dirname,'views');

template.defaults.extname='.html';

const html=template('06.art',{
    time:new Date()
})
console.log(template('07',{}));
console.log(html);

```

## Express框架

### express.Router()

express中的Router作用就是为了方便我们更好的根据路由去分模块。避免将所有路由都写在入口文件中。

### 框架特性

1. ​	提供了方便简洁的路由方式

2. ​	对获取HTTP请求参数进行了简化处理

3. ​	对模板引擎支持度高，方便渲染动态html界面

4. ​	提供了中间件机制有效控制HTTP请求

5. ​	拥有大量的第三方中间件对功能进行扩展

   
   
   #### 原生Node.js与Express框架对比之路由

```javascript
app.on('request',(req,res)=>{
	// 获取客户端请求
    let {pathname}=url.parse(req,res);
    // 对请求进行路径判断，不同路径地址响应不同的内容
    if(pathname=='/'||pathname=='index'){
	    res.write('index');
        res.end();
    }else if(pathname=='/list'){
        res.write('list');
        res.end();
    }else if(pathname=='/about'){
        res.write('about');
        res.end();
    }else{
        res.write('err');
        res.end();
    }
})
```

```javascript
// 当客户端以get的方式访问/时
app.get('/',(req,res)=>{
    // 对客户端做出响应
    res.send('Hello Express');
})
// 当客户端以post的方式访问/add路由时
app.post('/add',(req.res)=>{
	res.send('以post的方式访问/add路由');
})
```

#### 	原生Node.js与Express框架对比之获取请求参数

```javascript
app.on('request',(req,res)=>{
    // 获取GET参数
    let {query}=url.parse(req,res,true);
    // 获取POST参数
    let postData='';
    req.on('data',(chunk)>{
        postData+=chunk;
    });
    req.on('end',()=>{
		console.log(querystring.parse(postData));
    })
})
```

```javascript
app.get('/',(req,res)=>{
    // 获取GET参数
    console.log(req.query);
})
app.post('/',(req,res)=>{
    // 获取POST参数
    console.log(req.body);
})
```

### 中间件

中间件有顺序，从上到下依次响应

#### 1.

​	中间件就是一堆方法，可以接收客户端发来的请求，可以对请求做出响应，也可以将请求交给下一个中间件处理

![image-20210603202623416](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210603202623416.png)

中间件主要由两部分构成，中间件方法及请求处理函数

中间件方法由Express提供，负责拦截请求，请求处理函数由开发人员提供，负责处理请求

```javascript
app.get('请求路径','处理函数') // 接收并处理get请求
app.post('请求路径','处理函数') // 接收并处理post请求
```

可以针对同一个请求设置多个中间件，对同一个请求进行多次处理

```javascript
app.get('/request',(req,res,next)=>{
    req.name="张三";
    next();
});
app.get('/request',(req,res)=>{
    res.send(req.name);
})
app.listen();
```

#### 2.app.use中间件用法

app.use匹配所有的请求方式，可以直接传入请求处理函数，代表接受所有的请求

```javascript
app.use((req,res,next)=>{
    console.log(req.url);
    next();
});
```

app.use第一个参数也可以传入请求地址，代表不论什么请求方式，只要是这个请求地址就接收这个请求

```javascript
app.use('/admin',(req,res,next)=>{
	console.log(req.url);
    next();
})
```

#### 3.中间件用法

1.路由保护，客户端在访问需要登录的界面时可以先使用中间件判断用户登录状态，用户如果未登录，则拦截请求，直接响应，禁止用户进入需要登陆的界面

2.网站维护公告，在所有路由的最上面定义接受所有请求的中间件，直接为客户端做出响应，网站正在维护

3.自定义404界面

```javascript
const express = require('express');

const app = express();

// 网站维护信息
app.use((req, res, next) => {
    res.send('网站正在维护....');
})

app.use('/admin', (req, res, next) => {
    let isLogin = false;
    if (isLogin) {
        // 让请求继续向下执行
        next();
    } else {
        // 如果用户还未登录，直接对客户端做出响应
        res.send('你还未登录，不能访问/admin这个界面')
    }
})
app.get('/admin', (req, res) => {
    res.send('已登录，可以访问当前页面');
})

app.use((req, res, next) => {
    // 为客户端响应404状态码以及提示信息
    res.status(404).send('当前访问页面不存在');
})
app.listen(3000);
console.log('3000 listened');
```

#### 4.错误处理中间件

咋子程序执行的过程中，不可避免的会出现一些无法预料的错误，比如文件读取失败，数据库连接失败，错误处理中间件是一个集中处理错误的地方

```javascript
app.use((err,req,res,next)=>{
    res.statys(500).send('服务器发生未知错误');
})
```

当程序出现错误时，调用next()方法，并将错误信息通过参数的形式传递给next()方法，即可触发错误处理中间件(只能捕获到同步代码出现错误，异步代码捕获不到)

```javascript
app.get('/',(req,res,next)=>{
	fs.readFile('/file-does-not-exist',(err,data)=>{
        if(err){
			next(err);
        }
    })
})
```

#### 5.捕获错误

在node.js中，异步API的错误信息都是通过回调函数获取的，支持Promise对象的异步AIP发生错误可以通过catch方法捕获，异步函数执行如果发生错误要如何捕获？

try catch 可以捕获异步函数以及其他同步代码在执行过程中发生的错误，但是不能执行其他类型API的任务

```javascript
app.get('/',async (req,res,next)=>{
	try{
        await User.find({name:"张三"});
    }catch(ex){
		next(ex);
    }
})
```

```javascript
const express = require('express');
const fs=require('fs');
const promisify=require('util').promisify;
const readFile=promisify(fs.readFile);
const app = express();
app.get('/index',async (req,res,next)=>{
    try {
        await readFile('./aaa.js');
    } catch (error) {
        next(error);
    }
})

// 错误处理
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})

app.listen(3000);
console.log('3000 listened');
```

#### 6.模块化路由

```javascript
const express=require('express');
// 创建路由对象
const home=express.Router();
// 将路由和请求路径进行匹配
app.use('/home',home);
home.get('/index',()=>{
    res.send('欢迎来到index页面');
})
```

#### 7.GET参数获取

express框架中使用req.query即可获得GET参数，框架内部会将GET参数转换为对象并返回，

![image-20210604100936252](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210604100936252.png)

```javascript
const express=require('express');

const app=express();

app.get('/index',(req,res)=>{
    res.send(req.query);
})

app.listen(3000);
```

#### 8.获取POST请求参数

express中接受post请求参数需要借助第三方包body-parser

```javascript
// 引入body-parser
const bodyParser=require('body-parser');
// 配置body-parser模块
app.use(bodyParser.urlencoded({extended:false}));
// 接收请求
app.post('/add',(req,res)=>{
	// 接收请求参数
    console.log(req.body);
})
```

#### 9.app.use方法

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(fn({a:1}));
function fn(obj) {
    return function(req,res,next) {
        if(obj.a==1){
            console.log(req.url);
        }else{
            console.log(req.method);
        }
        // console.log(req.method);
        next();
    }
}

app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(3000);
```

#### 10.express路由参数

```javascript
app.get('/find/:id',(req,res)=>{

})
```

```javascript
localhost:3000/find/123
```

#### 11.静态资源的处理

通过express内置的express.static可以方便的托管静态文件，例如img，css，javascript 文件等

```javascript
app.use(express.static('public'));
```

现在，public目录下的文件就可以访问了

- http://localhost:3000/images/kitten.jpg
- http://localhost:3000/images/style.css
- http://localhost:3000/images/app.js
- http://localhost:3000/images/hello.html

#### 12.模板引擎

- 为了使art-template模板引擎能够更好的和express框架配合，模板引擎官方在原art-template的基础上封装了express-art-texplate

- 使用npm install art-template express-art-texplate命令进行安装

```javascript
// 渲染后缀为art的模板，使用aexpress-art-template
// 第一个参数：使用模板后缀 第二个参数：要使用什么模板引擎
app.engine('art',require('express-art-template'));
// 设置模板存放目录
// 第一个参数：事先规定好 第二个参数：模板位置信息，推荐绝对路径
app.set('views',path.join(__dirname,'views'));
// 渲染模板书不写后缀，默认拼接art后缀
// 第一个参数：view engine 默认配置项名称 第二个参数：要渲染那种文件
app.set('view engine','art');
app.get('/',(req,res)=>{
    // 渲染模板
    res.rander('index');
})
```

```javascript
const express = require('express');
const path=require('path');
const app = express();

app.engine('art',require('express-art-template'));
// 告诉express框架模板存放的位置
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');

app.get('/index',(req,res)=>{
    res.render('index',{
        msg:'message'
    });
})
app.get('/list',(req,res)=>{
    res.render('list',{
        msg:'list page'
    })
})
app.listen(3000);
```

#### 13.app.locals对象

将变量设置到app.locals对象下面，这个数据在所有模板中都可以获取到。

```javascript
const express = require('express');
const path=require('path');
const app = express();

app.engine('art',require('express-art-template'));
// 告诉express框架模板存放的位置
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');

app.locals.users=[{
    name:'zhangsan',
    age:20
},{
    name:'狗蛋',
    age:23
}]

app.get('/index',(req,res)=>{
    res.render('index',{
        msg:'message'
    });
})
app.get('/list',(req,res)=>{
    res.render('list',{
        msg:'list page'
    })
})
app.listen(3000);
```

```html

{{msg}}
<ul>
    {{each users}}
    <li>
        {{$value.name}}
        {{$value.age}}
    </li>
    {{/each}}
</ul>
```

```html
{{msg}}
<ul>
    {{each users}}
    <li>
        {{$value.name}}
        {{$value.age}}
    </li>
    {{/each}}
</ul>
```

##  bcrypt

依赖环境

1.python 2.x

2.node-gyp

​	npm 

密码加密

哈希加密是单程加密方式：1234=>abcd

在加密密码中加入随机字符串可以增加密码被破解难度

```javascript
// 导入bcrypt模块
const bcrypt=require('bcrypt');
// 生成随机字符串gen=>generate 生成salt盐
let salt=await bcrypt.genSalt(10);
// 使用随机字符串对密码进行加密
let pass=await bcrypt.hash('明文密码',salt);
```



###     