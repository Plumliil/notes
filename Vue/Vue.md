# Vue

## 前端工程化与webpack

### 前端工程化

#### 学习目标

* 理解什么是前端工程化.转变对前端开发的认知
* 了解webpack的基本用法.为后面Vue和React学习做铺垫
* 不强制要求动手配置，但要知道webpack在项目中的作用，清除webpack中的核心概念

#### 虚假的前端开发vs真正的前端开发

虚假的前端开发：

* 会写html+css+javascript就会前端开发
* 需要美化页面样式，就拽一个bootstrap过来
* 需要操作DOM或发起ajax请求，再拽一个jQuery过来
* 需要快速实现网页布局效果，就拽一个Layui过来

实际的前端开发

* 模块化（js的模块化，css的模块化，资源的模块化）
* 组件化（复用现有的UI结构，样式，行为）
* 规范化（目录结构的划分，编码规范化，接口规范化，文档规范化，git分支管理）
* 自动化（自动化构建，自动部署，自动化做测试）

#### 什么是前端工程化

前端工程化是指：在企业级的前端项目开发中，把前端开发所需的工具，技术，流程，经验等进行规范化标准化

企业中的Vue项目和React项目，都是基于工程化的方式进行开自成体系，有一套标准的开发方案和流程

好处：前端开发自成体系，有一套标准的开发方案和流程

#### 前端工程化的解决方案

早期的方案：

* grunt
* glup

目前主流方案：

* webpack
* parcel

### webpack

#### 什么是webpack

概念：前端工程化的具体解决方案

主要功能：它提供有好的前端你模块化支持，以及代码压缩混淆，处理浏览器端javascript的兼容性，性能优化等强大功能

好处：让程序员吧工作重心放在功能实现上，提高了前端开发的效率和项目的可维护性

注意：目前Vue，React等前端项目，基本上都是基于webpack进行工程化开发的

#### 创建列表隔行变色形目（01）

* 新建项目空白目录，并运行npminit-y命令，初始化包管理配置文件package.jsc
* 新建SrC源代码目录
* 新建Src->index.html首页和5rc->index.js脚本文件
* 初始化首页基本的结构
* 运行npminstalljquery-S命令，安装jQuery
* 通过ES6模决化的方式导入jQuery，实现列表隔行变色效与

注意：引入js时引入webpack处理好的js文件

#### 在项目中安装webpack

`npm install webpack@5.42.1 webpack-cli@4.7.2 -D`

-S  --save  开发和生产放在dependencies下，开发生产都用到

-D  --save-dev  将包的版本信息放在devDependencies下，开发用到

#### 在项目中配置webpack

* 在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置

~~~javascript
module.exports={
  mode:'development' // mode 用来指定构建模式 可选值有 development 和 production
}
~~~

* 在package.json的script节点下，新增dev脚本如下

~~~javascript
"scripts":{
  "dev":"webpack"
}
~~~

在终端运行npm run dev 命令，启动webpack进行项目的打包构建

#### mode的可选值

mode节点的可选值有两个，分别是：

1.development

* 开发环境
* 不会对打包生成的文件进行代码压缩和性能优化
* 打包速度快，适合在开发阶段使用

2.production

* 生产环境
* 会对打包生成的文件进行代码压缩和性能优化
* 打包速度慢，适合在生产阶段使用

#### webpack.config.js文件的作用

webpack.config.js时webpack的配置文件。webpack在真正开始打包构建之前，会先读取webpack.config.js这个配置文件，从而基于给定的配置，对项目进行打包。

注意：由于webpack是基于node.js开发出来的工具，因此在它的配置文件中，支持使用node.js相关的语法和模块进行webpack的个性化配置

#### webpack中的默认约定

在webpack4.x和5.x的版本中，有如下的默认约定：

* 默认的打包入口文件为src->index.js
* 默认的输出文件路径为dist->main.js

注意：可以在webpack.config.js中修改打包的默认约定

#### 自定义打包的入口与出口

在webpack.config.js配置文件中，通过entry节点置顶打包入口。通过output节点指定打包的出口。

示例代码如下：

~~~javascript
const path=require('path')

module.exports={
    mode:'development', // mode 用来指定构建模式 可选值有 development 和 production
    // mode:'production' // mode 用来指定构建模式 可选值有 development 和 production
    // entry:'指定处理哪个文件'
    entry:path.join(__dirname,'./src/index.js'),
    // 指定生成的文件存放到哪里
    output:{
        // 存放目录
        path:path.join(__dirname,'dist'),
        // 生成的文件名
        filename:'bundle.js'
    }
}

~~~

#### webpack中的插件

##### webpack插件的作用

通过安装和配置第三方插件，可以拓展webpack的能力，从而让webpack用起来更方便。最常用的webpack插件有如下两个

1.webpack-dev-server

* 类似于node.js阶段用到的nodemon工具
* 每当修改了源代码，webpack会自动进行项目的打包和构建

2.html-webpack-plugin

* webpack中的html插件（类似于一个模板引擎插件）
* 可以通过此插件自定制index.html页面的内容

##### 配置webpack-dev-server

1.修改package.json->scripts中的dev命令

~~~javascript
"scripts": {
    "dev": "webpack serve" // 通过npm run执行
  },
~~~

2.再次运行npm run dev 命令，重新进行项目打包

3.在浏览器中访问http://localhost:8080,查看自动打包效果

注意：该插件会启动一个实时打包的http服务器

##### webpack-dev-server运行原理

访问内存中的bundle.js，而不是放在磁盘中，内存中访问比较快

#### 安装和配置html-webpack-plugin

~~~javascript
// 导入htmlplugin插件得到插件的构造函数
const HtmlPlugin=require('html-webpack-plugin')

// 创建html插件的实例对象
const htmlPlugin=new HtmlPlugin({
    template:'./src/index.html', // 指定源文件的存放路径
    filename:'/index.html' // 指定生成文件的存放路径
})

module.exports={
    mode:'development', // mode 用来指定构建模式 可选值有 development 和 production
    plugins:[htmlPlugin], // 通过 plungins 节点，使 htmlPlugin 插件生效
 
}
~~~

##### 了解html-webpack-plugin特性

1.通过html插件复制到项目根目录中的index.html页面，也被放到了内存中

2.html插件在生成的index.html页面，自动注入了打包的bundle.js文件

#### devServer节点

在webpack.config.js配置文件中，可以通过devServer节点对webpack-dev-server插件进行更多的配置

示例代码如下：

~~~javascript
devServer: {
        // 首次打包成功打开浏览器
        open:true,
        host:'127.0.0.1',
        // 在http协议中如果端口号是 80 则可以被省略
        // port:80
    }
~~~

### loader

#### loader概述

在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块。其他非.js后缀名结尾的模块，webpack默认处理不了，需要loader加载器才可以正常打包，否则会报错！

loader加载器的作用：协助webpack打包处理器特定的文件模块，比如：

* css-loader可以打包处理 .css 相关的文件
* less-loader可以打包处理 .less 相关的文件
* babel-loader可以打包处理 webpack 无法处理的高级js语法

#### loader调用过程

![image.png](./assets/image.png)

#### 打包处理css文件

1.运行npm i style-loader@3.0.0 css-loader@5.2.6 -D 命令安装处理css文件的loader

2.在webpack.config.js的module->rules数组中，添加loader规则如下：

```javascript
module:{
        // 所有第三方模块匹配规则
        rules:[
            // 文件后缀名匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
```

其中，test表示匹配的文件类型，use表示对应要调用的loader

注意：

* use数组中指定的loader 顺序是固定的
* 多个loader的调用顺序是 从后往前调用

#### 打包处理less文件

1.运行npm i less-loader@10.0.1 less@4.1.1 -D 命令

2.在webpack.config.js的module->rules数组中，添加loader规则如下：

```javascript
module:{
        // 所有第三方模块匹配规则
        rules:[
            // 文件后缀名匹配规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    }
```

其中，test表示匹配的文件类型，use表示对应要调用的loader

#### 打包处理样式表中与url路径相关的文件

1.运行npm i url-loader@4.1.1 file-loader@6.2.0 -D命令

2.在webpack.config.js的module -> rules数组中，添加load规则如下

```javascript
module:{
    // 所有第三方模块匹配规则
    rules:[
        // 文件后缀名匹配规则
        {test:/\.jpg|png|gif$/,use:['url-loader?limmit=22229']},
    ]
}
```

其中？之后是loader的参数项：

* limit用来指定图片大小，单位是字节（byte）
* 只有<=limit大小的图片才会被转为base64

##### base64图片的优缺点

优点：可以避免无效的请求

缺点：图片转化为base64格式后体积会稍微增大

#### 介绍webpack处理样式的过程

直接在index.js中引入css，less问就按即可，模块化开发

#### 打包处理js文件中的高级语法

webpack只能打包处理一部分高级的javascript语法，对于那些webpack无法处理的高级语法，需要借助于bable-loader进行打包处理。例如webpack无法处理下面的javascript语法

```javascript
// 定义一个装饰器函数
function info(target){
    target.info='Person info'
}
// 定义一个普通的类
@info
class Person{}

console.log(Person.info)
```

##### 安装bable-loader相关的包

运行如下命令安装对应的依赖包

npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D

在webpack.config.js的module -> rules数组中，添加loader规则如下：

```javascript
{test:/\.js$/,use:['babel-loader'],exclude:/node_modiles/},
```

##### 配置bable-loader

在根目录下，创建名为babel.config.js的配置文件，定义Babel的配置项如下：

```javascript
module.exports={
    // 声明 babel可用的插件
    // 将来 webpack 在调用 babel-loader 的时候 会先加载 plugin插件来使用
    plugins:[['@babel/plugin-proposal-decorators',{legacy:true}]]
}

```

### 发布

#### 配置build命令

##### 配置webpack的打包发布

在package.json文件的scripts节点下，新增build命令如下：

```javascript
 "scripts": {
    "dev": "webpack serve",
    "build": "webpack --mode production" 
  },
```

--model是一个参数项，用来指定webpack的运行模式，production代表生产环境，会对打包生成的文件进行代码压缩和性能优化

注意：通过--model指定的参数项，会覆盖webpack.config.js中的model选项 --mode优先级更高

##### 统一目录

###### 把javascript文件同意生成到js目录中

```javascript
output:{
        // 存放目录
        path:path.join(__dirname,'dist'),
        // 生成的文件名
        filename:'js/bundle.js'
    },
```

###### 把图片文件同意生成到image目录中

在webpack.config.js配置文件中url-loader配置项，新增outputPath选项即可指定图片文件的输出路径：

```javascript
{test:/\.jpg|png|gif$/,use:['url-loaderlimmit=22229&outputPath=images']},
   
```

##### 配置和使用clean-webpack-plugin

作用：自动清理dist目录下的旧文件夹

使用npm install --save-dev clean-webpack-plugin 安装

```javascript
// 导入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanPlugin=new CleanWebpackPlugin();
module.exports={
  plugins:[htmlPlugin,cleanPlugin]
}
```

### SourceMap

#### 什么是SourceMap

SourceMap就是一个信息文件，里面储存着位置信息，也就是说，SourceMap文件中储存着压缩混淆候得代码，所对应的转换前的位置

有了它，出错的对象，除错的工具将直接i西安市原始代码，而不是转化后的代码，能够极大的方便后期调试

#### 默认SourceMap问题

开发环境下默认生成的SourceMap，记录的是生成后代码的位置，会导致运行时报错的行数与源代码的行数不一致的问题示例图如下

![image.png](./assets/1632833284354-image.png)

![image.png](./assets/1632833396839-image.png)

#### 解决默认SourceMap的问题

开发环境下，推荐webpack.config.js中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致

#### webpack生产环境下的SourceMap

在生产环境下，如果省略了devtool选项，则最终生成的文件不包含SourceMap。这能够防止原始代码通过SourceMap的形式暴露给别有所图之认，提高了代码的安全性

#### 只定位行数不暴露源码

在生产环境下，如果只想定位报错的具体行数，且不想暴露行码，此时可以将devtool的值设置为nosource-source-map。实际效果如图

~~~javascript
//实际发布时可以选择下行代码或者直接关闭SourceMap
devtool:'nosources-source-map'
~~~

![img.png](img.png)

#### SourceMap最佳实践

![img_1.png](img_1.png)

### @的配置

```javascript
resolve:{
        alias:{
            // 告诉webpack程序员写的代码中@代表src目录
            '@':path.join(__dirname,'./src/')
        }
    }
```

### 在chrome中安装vue-devtools调试工具

## Vue基础入门

### 什么是vue

一套用于构建用户界面的前端框架

* 构建用户界面：用vue往html中填充数据
* 框架：一套现成的解决方案，程序员只能遵守框架的规范，学习vue就是学习框架用法（指令，组件，路由，vuex）
* 只有把以上内容掌握，才有开发vue项目能力

### vue特性

在vue页面中，vue会监听数据变化，从而自动重新渲染页面结构

![image.png](./assets/1632878389045-image.png)

好处：数据变化时，页面重新渲染

坏处：数据驱动视图时双向绑定

#### 1.提高开发效率，不再操作dom，解放用户的双手

#### 2.框架和库的区别

​    框架是一套完整的解决方案，对项目的侵入性比较大，更换框架=重写项目
​    库是提供某一个小功能，对项目的侵入性比较小，如果某个库无法完成某些需求，可以切换其他库

#### 3.MVC和MVVM之间的区别

​    MVC是后端开发概念，M为Model层，V是View层看作前端页面，C相当于业务逻辑层
​    ![image-20210719164257492](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210719164257492.png)

    MVVM是前端视图层的概念，主要把每个页面分成了M，V和VM。其中VM是MVVM思想的核心，因为VM是M和VM之间的调度者，M保存的是每个页面中单独的数据，V就是每个页面中的HTML结构,每当V层想要获取和保存数据的时候，都要由VM做中间件处理
    好处：前端页面使用MVVM的思想主要是为了方便开发，应为MVVM提供了数据的双向绑定（由VM提供）
#### 4.Vue中的基本代码和MVVM之间的对应关系

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./lib/vue.min.js"></script>
</head>
<body>
<div id="app">
    <p>{{msg}}</p>
</div>
<script>
    // 创建Vue实例
    // 导入包后浏览器内存中多了一个Vue的构造函数
    // new出来的这个vm对象就是MVVM中的VM调度者
    var vue=new Vue({
        el: '#app', //标识当前new的vue实例控制页面中哪个区域
        // 这里的data就是MVVM中的M，专门用来保存每个页面的数据
        data:{
            // data属性中存放的是el中要用的数据
            // 通过vue提供的指令很方便的操纵dom
            msg:"hello Vue!"
        }
    }）
    </script>
<body>
</html>
~~~


#### 5.v-clock,v-text,v-html,v-pre的使用

v-clock:先通过样式隐藏内容,然后在内存中进行值得替换并显示最终结果
使用v-clock让用户看不到插值表达式闪烁，当vue.js在后边引用时
v-text:默认v-text没有闪烁问题，v-text会覆盖元素中原始内容，但是插值表达式只会替换自己的占位符，不会把整个元素覆盖
v-html可以直接渲染html标签
v-pre填充原始信息,显示原始信息,跳过编译过程

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./lib/vue.min.js"></script>
    <style>
        [v-clock]{
            display: none;
        }
    </style>
</head>
<body>
  <div id="app">
        <p v-clock>{{msg}}</p>
        <h4 v-text="msg"></h4>
        <span v-html="msg2"></span>
    </div>
    <script>
        var vue=new Vue({
            el: '#app',
            data:{
                msg:"hello Vue!",
                msg2:'<h3>v-html</h3>'
            }
        })
    </script>    
</body>
</html>

#### 6.v-bind指令学习

提供绑定属性的一个指令

```html
<input type="button" name="" v-bind:title="mytitle" value="button">
```

v-bind属性可以简洁为一个：要绑定的属性，且v-bind中可以写合法的表达式

```html
<input type="button" name="" :title="mytitle +'123'' " value="button">
```

mytitle:'自定义title'
允许v-bind绑定属性值期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号如

`<P :title="'box'+index">BOX</P>`

#### 7.v-on指令学习

提供绑定事件的一个指令v-on:=@

```html
 <body>

    <div id="app">
        <input type="button" :title="mytitle" value="Button" v-on:click="show">
    </div>
    <script>
        var vue=new Vue({
            el:'#app',
            data:{
                mytitle:'自定义title',
            },
            methods:{
                // 在methods属性中定义了当前Vue实例所有可用的方法
                show:function(){
                    alert('show');
                }
            }
        })
    </script>

</body>
```

#### 8.跑马灯效果

```html
<body>
    <script src="./lib/vue.min.js"></script>
    <div id="app">
        <input type="button" value="开始" @click="run">
        <input type="button" value="暂停" @click="stop">
        <h3>{{msg}}</h3>
    </div>
    <script>
        var vue = new Vue({
            el: '#app',
            data: {
                msg: '跑马灯效果展示~~~~~~~~~~~',
                intervalId: null // 在data上定义定时器Id
            },
            methods: {
                // 在methods属性中定义了当前Vue实例所有可用的方法
                run() {
                    if (this.intervalId != null) {
                        return
                    }
                    this.intervalId = setInterval(() => {
                        console.log(this.msg);
                        let start = this.msg.substring(0, 1);
                        let end = this.msg.substring(1);
                        this.msg = end + start;
                    }, 100);
                },
                stop() {
                    clearInterval(this.intervalId);
                }
            }
        })
        // 给跑起来绑定一个点击事件 v-on @
        // 在按钮的事件处理函数中写相关的业务
        // 逻辑代码：拿到msg字符串然后调用字符串的substring来进行字符串截取放到最后一个位置
        // 为了实现需用到定时器
        // 在vm实例中想要获取data上数据或者想要调用methods方法，需用this来调用
        // vm实例会监听自己身上data中数据的改变，只要数据变化，就会重新同步
    </script>
</body>
```

#### 9.事件修饰符

.stop:阻止事件向上冒泡
.prevent:阻止默认行为
.capture:事件捕获机制
.self:只有点击当前元素才会触发事件
.once:事件只执行一次

#### 10.数据响应式

html5中的响应式(屏幕尺寸的变化导致样式变化)
数据响应式(数据变化导致页面内容的变化)
数据绑定:将数据填充标签中

#### 11.双向数据绑定

v-model

```html
<input type="text" value="" v-model="msg" @keyup.enter="enter">
```

#### 12.插值表达式不能用于属性节点
插值表达式支持简单运算
可以进行简单的数据拼接

#### 13.事件对象$event
vue提供了内置变量，名字叫做$event，他就是原生的DOM对象 e

~~~javascript
<button @click="add(3,$event)">+1</button>
add(n,e){
                this.count+=n
                console.log(e)
                if(this.count%2===0){
                    e.target.style.backgroundColor='pink'
                }else {
                    e.target.style.backgroundColor=''
                }
            }
~~~

## 组件化开发

#### 1.注册组件的基本步骤
- 创建组件构造器
- 注册组件
- 使用组件
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211227171830.png)