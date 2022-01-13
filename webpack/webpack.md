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


### webpack其他打包资源

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