#### webpack使用前提
webpack运行依赖node环境，所以电脑上必须有node环境
- 电脑需要安装nodejs并且会同时安装npm
- 可以使用nvm来管理node版本

#### webpack的安装
webpack的安装分为两个：webpack，webpack-cli

1.创建package.json文件,用于管理项目信息,库依赖
`npm init`
2.安装局部webpack运行
`npm install webpack webpack-cli -D`
3.使用局部webpack
`npx webpack`
4.在package.json中创建script脚本，执行脚本打包即可

#### webpack的依赖图
webpack到底是如何对我们的项目进行打包的
- 事实上，在webpack处理应用程序视，他会根据命令或者配置文件找到入口文件；
- 从入口开始，会生成一个依赖关系图，这个依赖关系图会包含应用程序中所需的所有模块(如js文件,css文件,图片,字体等)
- 然后遍历图结构，打包一个个模块(根据文件的不同使用不同的loader来解析)

#### css-loader的使用
~~~shell
ERROR in ./src/css/style.css 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to 
process this file. See https://webpack.js.org/concepts#loaders
> .title{
|     color: red;
|     font-size: 50px;
 @ ./src/js/element.js 1:0-25
 @ ./src/index.js 3:0-21
~~~
上面的错误信息告诉我们需要一个loader来加载这个css文件，但是loader是什么？
- loader可以用于对模块的源代码进行转换
- 我们可以将css文件也看成一个模块，我们是通过import来加载这个模块的
- 在加载这个模块时，webpack其实并不知道如何对其进行拦截，我们必须指定对应的loader来完成这个功能
那么我们需要一个怎么样的loader呢
- 对于加载css文件来说，我们需要一个可以读取css文件的loader
- 这个loader最常用的是css-loader
如何使用这个loader来加载css文件呢？有三种方式
- 内联方式 `import 'css-loader!../css/style.css'`
- CLI方式(webpack5中不再使用)
#### loader配置方式
配置方式表示的意思是在我们的webpack.config.js文件中写明配置信息
- module.rules中允许我们配置多个loader(因为我们也会继续使用其他loader
完成其他文件的加载)
- 这种方式可以很好的标识loader配置，也方便后期的维护，同时让你对哥哥load
有一个全局的概览
module.rules的配置如下:
rules属性对应的值是一个数组：[Rule]
数组中存放的是一个格的Rule，Rule是一个对象，对象中可以设置多个属性
- test属性：用于resource(资源)进行匹配，通常会设置成正则表达式
- use属性：对应的值是一个数组：[UseEntry]
    - UseEntry是一个对象，可以通过对象的属性来设置一些其他的属性
        - loader：必须有一个loader属性，对应的值是一个字符串
        - options：可选的属性，值是一个字符串或者对象，值会被传入到loader中
        - query：目前已经使用options来替代
    - 传递字符串：如(use:['style-loader']) 是 loader属性的简写方式(如:use:[{loader:'style-loader'}])
- loader属性：Rule.use[{loader}]的简写
~~~javascript
const path=require('path');

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,//正则表达式
                // 1.loader的写法(语法糖)
                // loader:'css-loader'
                // 完整写法
                use:[
                    "css-loader"
                    // {loader:"css-loader",options:}
                ]
            }
        ]
    }
}
~~~
#### 认识style.loader
此时已经可以通过css-loader来加载文件
- 但是文件并没有生效,(页面没有效果)
原因
- 因为css-loader只是负责将.css文件进行解析,并不会将解析之后的css插入到页面中
- 如果希望在完成插入style的操作，我们还需要另外的一个loader,就是style-loader

#### 认识PostCSS工具
什么是PostCSS呢
- PostCSS是一个通过JavaScript来转换样式的工具；
- 这个工具可以帮助我们进行一些css转换和适配，比如自动添加浏览器前缀，css样式重叠
- 但是是西安这些功能，我们需要借助PostCss对应的插件
如何使用PostCSS？
- 查找PostCSS在构建工具中的扩展，比如webpack中的postcss-loader
- 选择可以添加需要的PostCSS插件

#### 单独的postcss配置文件
可以将这些配置信息放到一个单独的文件中进行管理
- 在根目录中创建postcss.config.js
~~~javascript
module.exports={
    plugins:[
        require('autoprefixer')
    ]
}
~~~
#### postcsss-preset-env
事实上在配置postcss-loader时，我们配置插件不需要使用autoprefixer
可以使用另外一个插件：postcsss-preset-env
- postcsss-preset-env也是一个postcss的插件
- 它可以帮助我们将一些现代的css特性转换成大多数浏览器可以识别的css，并且会根据目标浏览器护着运行时的环境添加所需的polyfill
- 也包括会自动帮助我们添加autoprefixer(所以相当于内置了autoprefixer)


#### webpack其他打包资源

#### 加载图片案例准备
为了掩饰项目中可以加载图片，我们需要在项目中使用图片，比较常见的使用图片的方式时两种
- img元素,设置src属性
- 其他元素(比如div),设置background-image的css属性

#### file-loader webpack 5.0以下使用
要处理jpg,png等格式的图片,我们也需要有对应的loader:file-loader
- file-loader的作用就是帮助我们处理import/require()方式引入一个文件资源,并且会将他梵高我们输出的文件夹中
- 当然我们待会可以学习如何修改他的名字和文件夹
安装
- `npm install file-loader -D`
配置处理图片的Rule
~~~javascript
{
    test:/\.(jpg|jpeg|png|gif|svg)$/,//正则表达式
    use:[
        "file-loader"
    ]
}
~~~

img元素通过src使用图片时需要将图片按模块形式导入
`import img1 from '../img/1.jpg'`
`imgEl.src=img1`

#### 文件的命名规则
有时候我们处理候得文件名按照一定的规则进行显示
- 比如保留原来的文件名，扩展名，同时为了防止重复，包含一个hash值等
这个时候可以使用PlaceHolders来完成,webpack给我们提供了大量的PlaceHolders来显示不同内容:
- https://webpack.js.org/loaders/file-loader/#placeholders
在这里介绍几个常用的PlaceHolders
- [ext]:处理文件的扩展名
- [name]:处理文件的名称
- [hash]:处理文件的内容
- [contentHash]:在file-loader中和hash结果是一致的(在webpack中的一些其他地方不一样)
- [hash]:<length>:截图hash的长度,默认32个字符太长
- [path]:文件相对于webpack配置文件的路径

#### 设置文件的存放路径
- 通过img/的方式设置文件夹
- 通过配置
~~~javascript
            {
                test:/\.(jpg|jpeg|png|gif|svg)$/,//正则表达式
                use:{
                    loader:"file-loader",
                    options:{
                        outputPath:"img",
                        name:"img/[name]_[hash:6].[ext]"
                    }
                }
            }
~~~
#### url-loader webpack 5.0 以上不使用 url-loader可以替换file-loader
url-loader的工作方式和file-loader的方式是相似的，但是可以将较小的文件，转成base64的URL
图片较小时可以使用url-loader来节省性能

#### asset module type webpack 5.0 及以上
在webpack 5 之前加载一些资源需要使用一些loader
在webpack 5 之后，可以直接使用资源模块模型asset module type，来替代以上loader
资源模块模型(asset module type),通过添加4种新的模块模型，来替换所有这些loader
- asset/resource 大宋一个单独的文件并导出URL 之前通过使用file-loader实现
- asset/inline 导出一个资源的data URL代码，之前通过使用raw-loader实现
- asset/source导出资源的源代码，之前通过raw-loader实现；
- asset 在导出一个data URL和发送一个单独的文件之间自动选择.之前通过url-loader，并且配置资源体积限制实现 
~~~javascript
{
    test:/\.(jpg|jpeg|png|gif|svg)$/,//正则表达式
    type:"asset",
    generrator:{
        filename:"img/[name]_[hash:6][ext]"
    },
    parser:{
        dataUrlCondition:{
            maxSize:100*1024
        }
    }
}
~~~
#### url-loader的limit效果
我们需要两个步骤实现：
- 将type修改为asset；
- 添加一个parser属性，并指定dataUrl条件，添加maxSize属性

#### 加载字体文件
我们需要使用某些字体或者图标，那么我们会应用很多字体相关文件，这些文件的处理也是一样
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220113120214.png)
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220113120540.png)

#### 认识plugin
webpack另一个核心是plugin，官方有一段对plugin的描述
- loader适用于特定模块的类型进行转换
- plugin可以用于执行更加广泛的任务，比如打包优化，资源管理，环境变量注入等
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220113120941.png)

#### cleanWebpackPlugin
每次修改配置，重新打包时都需要手动删除dist文件夹
我么可以借助一个插件来帮助我们完成就是CleanWebpackPlugin;

~~~javascript
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports={
    entry:"./src/index.js",
    output:{},
    module:{},
    plugins:[
        // 一个个插件对象
        new CleanWebpackPlugin()
    ]
}
~~~

#### HtmlWebpackPlugin
另外还有一个不太规范的地方
- html文件是编写在根目录下的，而最终打包的dist文件夹中吗，没有index.html文件
- 在进行项目部署的时候，必然也是需要有对应的入口文件index.html
- 所以需要对index.html进行打包处理

#### 自定义模板数据填充
上面的代码中，会有一些类似这样的语法 <% 变量 %>，这是EJS模块填充数据的方式。
在配置HtmlWebpackPlugin的时候，可以添加如下配置
- template 指定我们要使用的模块所在路径；
- title 在进行htmlWebpackPlugin》options.title读取时，会读到该信息
#### DefinePlugin介绍
但是,这个时候编译还是会报错,因为在我们的模块中还使用到一个BASE_ _URL的常量:
ERROR in TempLate execution failed: ReferenceError: BASE URL is not defined 
ERROR in ReferenceError: BASE URL is not defined
这是因为在编译template模块时,有一个BASE _URL :
- <link rel="icon" href=" <%= BASE_ URL %> favicon.ico"> ;
- 但是我们并没有设置过这个常量值,所以会出现没有定义的错误;
#### DefinePlugin的使用
DefinePlugin允许在编译时创建配置的全局常量，是一个webpack内置插件(不需要单独安装)
#### CopyWebpackPlugin
■在vue的打包过程中,如果我们将一 -些文件放到public的目录下,那么这个目录会被复制到dist文件夹中。
- 这个复制的功能,我们可以使用CopyWebpackPlugin来完成;
■安装CopyWebpackPlugin插件: .
`npm install copy-webpack-plugin -D`
■接下来配置CopyWebpackPlugin即可:
- 复制的规则在patterns中设置;
- from :设置从哪一个源中开始复制;
- to :复制到的位置,可以省略,会默认复制到打包的目录下;
- globOptions:设置-些额外的选项,其中可以编写需要忽略的文件:
})
- .DS. _Store : mac目录下回自动生成的一个文件;
- index.html :也不需要复制,因为我们已经通过HtmlWebpackPlugin完成了index.html的生成;
~~~javascript
new CopyWebpackPlugin({
            patterns:[
                {
                    from:'public',
                    to:'build',
                    globOptions:{
                        ignore:[
                            '**/index.html'
                        ]
                    }
                }
            ]
        })
~~~

#### 整体配置示例
~~~javascript
const path=require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require('webpack');
module.exports={
    // mode:"development",
    // 设置模式 开发 生产
    mode:"development",
    // 设置source-map，建立js映射，方便调试代码和错误
    devtool:'source-map',
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:"js/bundle.js",
    },
    module:{
        rules:[
            {
                test:/\.css$/,//正则表达式
                // 1.loader的写法(语法糖)
                // loader:'css-loader'
                // 完整写法
                use:[
                    "style-loader",
                    "css-loader"
                    // {loader:"css-loader",options:}
                ]
            },
            {
                test:/\.(jpg|jpeg|png|gif|svg)$/,//正则表达式
                type:"asset",
                generator:{
                    filename:"img/[name]_[hash:6][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024
                    }
                }
            }
        ]
    },
    plugins:[
        // 一个个插件对象
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            title:'PlumLi'
        }),
        new DefinePlugin({
            BASE_URL:"'./'"
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from:'public',
                    to:'./',
                    globOptions:{
                        ignore:[
                            '**/index.html'
                        ]
                    }
                }
            ]
        })
    ]
}
~~~

#### babel
事实上，在开发中我们很少直接去接触babel,但是babel对于前端开发来说，目前是不可缺少的一部分
- 开发中，我们想要使用ES6+的语法，想要使用typescript，开发react项目，都是离不开babel的
- 学习babel对于我们理解代码从编写到线上转变的工程至关重要
那么babel到底是什么
- babel是一个工具链，主要用于旧的浏览器或者环境中将ECMAScript2015+代码转换为向后兼容版本的javascript
- 包括：语法转换，源代码转换等
~~~javascript
[1, 2, 3].map(n => n + 1);
[1, 2, 3].map(function (n) {
  return n + 1
})
~~~
#### babel命令行使用
babel本身可以作为一个独立的工具(和postcss一样)，不和webpack等构建工具配置来单独使用
如果我们希望在命令行尝试使用babel，需要安装如下库：
- @babel/core:babel的核心代码吗,必须安装
- @babel/cli:可以让我们在命令行使用babel
使用babel处理我们源代码
- src 源文件的暑促目录
- --out-dir 指定要输出的文件夹dist
#### 插件的使用
比如我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件
`npm install @babe1/plugin-transform-arrow-functions -D`
`npx babel src --out-dir dist --plugins =@babel/ plugin-transform- arrow- functions`
查看转换后的结果:我们会发现const并没有转成var
- 这是因为plugin-transform-arrow-functions ,并没有提供这样的功能; 
- 我们需要使用plugin-transform-block- scoping来完成这样的功能;
`npm install @babe1/plugin-transform- block-scoping -D`
`npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babe1/ plugin-transform- arrow-functions`
#### babel的预设preset
但是如果需要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设(preset)
- 后面我们在具体来讲预设代表的含义
安装@babel/preset-env预设

#### babel的底层原理
babel是如何做到将我们的- -段代码( ES6、TypeScript. React )转成另外一段代码( ES5 )的呢?
- 从一种源代码(原生语言)转换成另一种源代码(目标语言) , 这是什么的工作呢?
- 就是编译器,事实上我们可以将babel看成就是一个编译器。
- Babel编译器的作用就是将我们的源代码,转换成浏览器可以直接识别的另外一段源代码;
babel也拥有编译器的工作流程：
- 解析阶段
- 转换阶段
- 生成阶段
#### babel编译器的执行原理
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220113172345.png)


#### babel的配置文件
像之前一样，我们可以讲babel配置信息放到一个独立文件中，babel给我们提供了两种配置文件的编写
- babel.config.json(或者.js,.cjs,.mjs)文件
- .babelrc.json(或者.babelrc,.js,.cjs,.mjs)文件
它们两个有什么区别呢?目前很多的项目都采用了多包管理的方式( babel本身element-plus、 umi等)
- .babelrc.json :早期使用较多的配置方式,但是对于配置Monorepos项目是比较麻烦的; .
- babel.configjson ( babel7 ) : 可以直接作用于Monorepos项目的子包,更加推荐;


#### Vue源码打包
打包后不同版本解析
+ vue(.runtime).global(.prod).js :
  - 通过浏览器中的`<script src=".."></script>`直接使用;
  - 我们之前通过CDN引入和下载的Vue版本就是这个版本;
  - 会暴露一个全局的Vue来使用;
+ vue(.runtime).esm-browser(.prod).js:
  - 用于通过原生ES模块导入使用(在浏览器中通过<script type= "module" >来使用)。
+ vue(.runtime).esm-bundler.js :
  - 用于webpack，rollup和parcel等构建工具;
  - 构建工具中默认是vue.runtime.esm-bundlerjs ;
  - 如果我们需要解析模板template ,那么需要手动指定vue.esm-bundlerjs;
+ vue.cjs(.prod).js
- 服务器端渲染使用
- 通过require()在nodejs中使用

#### 运行时+编译器 vs 仅运行时
+ 在vue的开发过程中我们有三种方式来编写DOM元素
  - template模板方式
  - render函数方式
  - 通过.vue文件中的template来编写模板
+ 它们的模板分别是如何处理的呢?
  - 方式二中的h函数可以直接返回-一个虚拟节点,也就是Vnode节点;
  - 方式一和方式三的template都需 要有特定的代码来对其进行解析:
    - 方式三.vue文件中的template可以通过在vue-loader对其进行编译和处理;
    - 方式一种的template我们必须要通过源码中一部分代码来进行编译 ;
+ 所以, Vue在让我们选择版本的时候分为运行时+编译器vs仅运行时
  - 运行时+编译器包含了对template模板的编译代码,更加完整,但是也更大一些;
  - 仅运行时没有包含对template版本的编译代码,相对更小一些;
#### VScode对SFC文件的支持
在前面提到过，真是开发中大多数情况下都是使用SFC(single-file components(单文件组件))。
我们先说一下VScode对SFC的支持
- Vetur 聪vue2开发就一直在使用的VScode支持Vue插件
- Volar，官方推荐的插件
#### 编写App.vue代码


#### 为什么要搭建本地服务器
+ 目前我们开发的代码,为了运行需要有两个操作:
  - 操作一: npm run build ,编译相关的代码;
  - 操作二:通过live server或者直接通过浏览器,打开index.html代码,查看效果;
+ 这个过程经常操作会影响我们的开发效率,我们希望可以做到，当文件发生变化时,可以自动的完成编译和展示;
+ 为了完成自动编译, webpack提供了几种可选的方式:
  - webpack watch mode ;
  - webpack-dev-server (常用) ;
  - webpack-dev-middleware ;

#### webpack watch
+ webpack给我们提供了watch模式: .
  - 在该模式下, webpack依赖图中的所有文件,只要有一个发生了更新,那么代码将被重新编译;
  - 我们不需要手动去运行npm run build指令了;
+ 如何开启watch呢?两种方式:
  - 方式- - : 在导出的配置中,添加watch: true ;
  - 方式二:在启动webpack的命令中,添加--watch的标识;


### devServer和VueCli

#### 为什么要搭建本地服务器
目前我们的代码，为了运行有两个操作
- npm run build ，编译相关代码
- 通过 liveserver或者直接通过浏览器，打开index.html代码，查看效果；
这个过程经常操作会影响我们的开发效率，我们希望可以做到，当文件发生变化时，可以自动完成编译和展示
为了完成自动编译，webpack提供了几种可选方式
- webpack watch mode
- webpack-dev-server
- webpack-dev-middleware

#### webpack watch
+ webpack给我们提供了watch模式
  - 在该模式下，webpack依赖图中的所有文件，只要有一个发生了更新，那么代码将被重新编译
  - 我们不需要手动去运行 npm run build
+ 如何开启watch
  - 在导出的配置中，添加watch:true
  - 在启动webpack的命令中，添加--watch的标识
在这里选择方式二，zaiwebpack.json的script中添加一个watch的脚本
~~~javascript
"scripts": {
  "watch": "webpack --watch"
},
~~~
#### webpack-dev-server
上面的方式可以监听到文件的变化，但是没有自动刷新浏览器功能
- 目前可以在VScode中使用live-server来完成这样的功能
- 我们希望在不适用live-server的情况下，可以具备live reloading(实时加载)的功能 
安装webpack-dev-server
`npm install webpack-dev-server -D`
修改配置文件
告知dev server从什么位置查找文件
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220114093815.png)
webpack-dev-server在编译后不会写入到任何文件，而是将打包好的文件保留到内存中
- 事实上webpack-dev-server使用了一个库叫memfs(memory-fs webpack自己写的)
~~~javascript
    devServer:{
        // 如果一些资源没有在webpack中加载，就会从一下文件中加载
        contentBase:"./public"
    },
~~~
||
~~~javascript
new CopyWebpackPlugin({
    patterns:[
        {
            from:'public',
            to:'./',
            globOptions:{
                ignore:[
                    '**/index.html'
                ]
            }
        }
    ]
})
~~~

#### 认识模块热替换(HMR)
+ 什么是HMR呢
- HMR全称是Hot Module Replacement，翻译为模块热替换;
- 模块热替换是指在应用程序运行过程中，替换，添加，删除模块，而无需刷新整个界面
+ HMR通过如下几种方式,来提高开发的速度:
  - 不重新加载整个页面,这样可以保留某些应用程序的状态不丢失; .
  - 只更新需要变化的内容,节省开发的时间;
  - 修改了css、js源代码,会立即在浏览器更新,相当于直接在浏览器的devtools中直接修改样式; 
+ 如何使用HMR呢?
  - 默认情况下, webpack-dev-server已经支持HMR ,我们只需要开启即可; `  hot:true`
  - 在不开启HMR的情况下,当我们修改了源代码之后,整个页面会自动刷新,使用的是live reloading ; .
~~~javascript
    target:"web",
    devServer:{
        // 如果一些资源没有在webpack中加载，就会从一下文件中加载
        contentBase:"./abc",
        hot:true
    },
~~~
~~~javascript
import './js/element'
if(module.hot){
    module.hot.accept("./js/element.js",()=>{
        console.log('element模块发生更新');
    })
}
~~~
#### 框架的HMR
+ 有一个问题:在开发其他项目时,我们是否需要经常手动去写入module.hot.accpet相关的API呢?
  - 比如开发Vue、React项目 , 我们修改了组件,希望进行热更新,这个时候应该如何去操作呢?
  - 事实上社区已经针对这些有很成熟的解决方案了;
  - 比如vue开发中,我们使用vue-loader ,此loader支持vue组件的HMR ,提供开箱即用的体验; 
  - 比如react开发中,有React Hot Loader ,实时调整react组件(目前React官方已经弃用了,改成使用react-refresh) ;

#### HMR原理
+ 那么HMR的原理是什么呢?如何可以做到只更新-个模块中的内容呢?
  - webpack-dev-server会创建两个服务:提供静态资源的服务( express )和Socket服务( net.Socket) ;
  - express server负责直接提供静态资源的服务(打包后的资源直接被浏览器请求和解析) ;
+ HMR Socket Server ,是- -个socket的长连接: 
  - 长连接有一个最好的好处是建立连接后双方可以通信(服务器可以直接发送文件到客户端) ;
  - 当服务器监听到对应的模块发生变化时,会生成两个文件.json ( manifest文件)和js文件( update chunk) ;
  - 通过长连接,可以直接将这两个文件主动发送给客户端(浏览器) ;
  - 浏览器拿到两个新的文件后,通过HMR runtime机制,加载这两个文件,并且针对修改的模块进行更新;
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220114101913.png)

#### hostOnly，host配置
host设置主机地址:
  - 默认值是localhost ;
  - 如果希望其他地方也可以访问,可以设置为0.0.0.0 ;
localhost和0.0.0.0的区别:
  - localhost :本质上是一个域名,通常情况下会被解析成127.0.0.1;
  - 127.0.0.1 :回环地址(Loop Back Address) ,表达的意思其实是我们主机自己发出去的包，直接被自己接收;
    - 正常的数据库包经常应用层-传输层-网络层-数据链路层-物理层;
    - 而回环地址,是在网络层直接就被获取到了,是不会经常数据链路层和物理层的;
    - 比如我们监听127.0.0.1时,在同一个网段下的主机中,通过ip地址是不能访问的;
0.0.0.0 :监听IPV4.上所有的地址,再根据端口找到不同的应用程序;
  - 比如我们监听0.0.0.0时,在同一个网段下的主机中,通过ip地址是可以访问的;

#### port open compress
port设置监听的端口,默认情况下是8080
open是否打开浏览器:
  - 默认值是false ,设置为true会打开浏览器;
  - 也可以设置为类似于Google Chrome等值;
compress是否为静态文件开启gzip compression :
  - 默认值是false ,可以设置为true ;
~~~javascript
devServer:{
    // 如果一些资源没有在webpack中加载，就会从一下文件中加载
    contentBase:"./abc",
    hot:true，
    hsot:"0.0.0.0",
    port:7777,
    open:true,
    compress:true
},
~~~
#### Proxy
+ proxy是我们开发中非常常用的一个配置选项,它的目的设置代理来解决跨域访问的问题:
  - 比如我们的一个api请求是http://localhost:8888 ,但是本地启动服务器的域名是http://localhost:8000 ,这个时候发送网络请求就会出现跨域的问题;
那么我们可以将请求先发送到一个代理服务器 ,代理服务器和API服务器没有跨域的问题,就可以解决我们的跨域问题了;
+ 我们可以进行如下的设置:
  - target :表示的是代理到的目标地址,比如/api-hy/moment会被代理到htp://ocalhost8888/api-
hy/moment ;
  - pathRewrite :默认情况下,我们的/api-hy也会被写入到URL中,如果希望删除,可以使用pathRewrite ;
  - secure :默认情况下不接收转发到https的服务器上,如果希望支持,可以设置为false ;
  - changeOrigin :它表示是否更新代理后请求的headers中host地址;

~~~javascript
devServer:{
    // 如果一些资源没有在webpack中加载，就会从一下文件中加载
    contentBase:"./abc",
    hot:true，
    hsot:"0.0.0.0",
    port:7777,
    open:true,
    compress:true,
    proxy:{
        "/api":{
            target:"http://localhost:8888",
            pathRewrite:{
                "^/api":""
            }
        }
    }
},
~~~
#### historyApiFallback
+ historyApiFallback是开发中-个非常常见的属性,它主要的作用是解决SPA页面在路由跳转之后,进行页面刷
新时,返回404的错误。
+ boolean值:默认是false
  - 如果设置为true ,那么在刷新时,返回404错误时,会自动返回index.html的内容;
+ object类型的值,可以配置rewrites属性(了解) :
  - 可以配置from来匹配路径,决定要跳转到哪一个页面;
+ 事实上devServer中实现historyApiFallback功能是通过connect-history- apifallback库的:
  - 可以查看connect-history-apifalback文档

#### resolve模块解析
+  resolve用于设置模块如何被解析: .
  - 在开发中我们会有各种各样的模块依赖,这些模块可能来自于自己编写的代码,也可能来自第三方库;
  - resolve可以帮助webpack从每个require/import 语句中,找到需要引入到合适的模块代码;
  - webpack使用enhanced-resolve来解析文件路径;

#### 确实文件还是文件夹
+ 如果是一个文件:
  - 如果文件具有扩展名,则直接打包文件;
  - 否则,将使用resolve.extensions选项作为文件扩展名解析;
+ 如果是一个文件夹:
  - 会在文件夹中根据resolve.mainFiles配置选项中指定的文件顺序查找;
r resolve.mainFiles的默认值是['index'] ;
  - 再根据resolve.extensions来解析扩展名;
' coderwhy
#### resolve模块解析
+ resolve用于设置模块如何被解析: 
  - 在开发中我们会有各种各样的模块依赖,这些模块可能来自于自己编写的代码。也可能来自第三方库;
  - resolve可以帮助webpack从每个require/import 语句中,找到需要引入到合适的模块代码;
  - webpack使用enhanced-resolve来解析文件路径;
webpack能解析三种文件路径:
+ 绝对路径
  - 由于已经获得文件的绝对路径,因此不需要再做进一步解析。
+ 相对路径
  - 在这种情况下,使用import或require的资源文件所处的目录,被认为是.上下文目录;
+ 在import/require中给定的相对路径,会拼接此上下文路径,来生成模块的绝对路径;
+ 模块路径
  - 在resolve.modules中指定的所有目录检索模块;
r默认值是['node. modules'] ,所以默认会从node. modules中查找文件;
  - 我们可以通过设置别名的方式来替换初识模块路径,具体后面讲解alias的配置;

#### extensions和alias配置
+ extensions是解析到文件时自动添加扩展名:
  - 默认值是['.wasm'; '.mjs', 'js', 'json'] ;
  - 所以如果我们代码中想要添加加载.vue或者jsx 或者ts等文件时,我们必须自己写上扩展名;

~~~javascript
    resolve:{
        extensions:[".js",".json",".mjs",".vue"]
    }
~~~

#### 如何区分开发环境和生产环境


#### 入口文件解析
+ 我们之前编写入口文件的规则是这样的: ./src/index.js ,但是如果我们的配置文件所在的位置变成了config 目录,
我们是否应该变成./rc/index.ji呢?
  - 如果我们这样编写,会发现是报错的,依然要写成./src/index.js ;
  - 这是因为入口文件其实是和另-一个属性时有关的context ;
+ context的作用是用于解析入口( entry point )和加载器( loader) :
  - 官方说法:默认是当前路径(但是经过我测试,默认应该是webpack的启动目录)
  - 另外推荐在配置中传入-一个值;
