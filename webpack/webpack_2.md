## webpack5

#### webpack5个核心概念

##### Entry
入口指示 以那个文件为入口七点开始打包,分析构建内部依赖图
##### Output
输出指示 webpack打包后资源bundles输出到哪里,以及如何命名
##### Loader
Loader让webpack能够去处理那些非javascript资源(webpack自身只能理解javascript)
##### Plugins
插件可以用于执行范围更广的1任务,插件的范围包括从打包到优化和压缩,一直到重新定义环境变量
##### Mode
模式Mode指示webpack执行相应1的模式配置
|选项|描述|特点|
|----|----|---|
|development|会将process.env.NODE_ENV的值设置为development</br>自动启用NamedChunksPlugin和NamedModulesPlugin|能让代码本地调试|
|production|会将process.env.NODE_ENV的值设置为production</br>自动启用各种plugin|能让代码优化上线运行的环境|

#### webpack.config.js基本配置
webpack.config.js是webpack的配置文件
作用:指示webpack干哪些活,当运行webpack指令时会加载哪些配置
所有的构建工具都是基于nodejs平台运行~ 模块化默认采用commonjs
~~~javascript
const {resolve}=require('path');
module.exports={
    // 入口起点
    entry:'./src/index.js',
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径
        // __dirname nodejs变量,代表当前文件的目录绝对路径
        path:resolve(__dirname,'build')
    },
    // loader 配置
    module:{
        rules:[
           // 详细loader配置
        ]
    },
    // plugin 插件
    plugins:[
        // 详细plugin配置
    ],
    // 模式
    mode:'development',
    // mode:'production',
}
~~~
- entry:入口
  - main:单个入口语法 可以简写为 entry:''
  - pageOne,pageTwo... 告诉我们webpack需要多个独立分离依赖图,多页面应用但是根据经验,每个 HTML 文档只使用一个入口起点。
- output:出口
  - filename:用于输出文件的文件名
  - path:目标输出目录的绝对路径,通常与path模块连用
- rules规则是一个数组形式,其中放置需要配置的loader对象
  - test:使用loader匹配的文件
  - use:使用多个loader,以数组的形式出现
  - loader:当处理某一类型文件只需要一种loader时可以使用
  - options:对loader进行一些配置
- plugins:插件
#### 资源打包
资源打包依赖于各种loader和plugin,通过loader和plugin的配合最终打包出需要的文件.
~~~javascript
// loader 配置
module:{
    rules:[
        // 详细loader配置
        // 一个配置匹配处理一个资源
        {
            // 匹配哪些文件
            test:/\.css$/,
            // 使用哪些loader进行处理
            use:[
                // use数组执行顺序,从右到左,从下向上
                // 创建一个style标签,将js中的css样式资插入,添加到页面中生效
                'style-loader',
                // 将css文件以字符串形式变成commonjs模加载到js中,里面内容是样式字符串
                'css-loader'
            ]
        },
        {
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }
    ]
},
~~~

##### 样式资源打包
根据样式选择加载器style-loader,css-loader必选less-loader,sass-loader,scss-loader
~~~javascript
module: {
    rules: [
        // less
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
        // css
        // 样式文件和js文件一起
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
}
~~~

##### html文件打包 
用到了html-loader处理html文件,同时用到了插件html-webpack-plugin
~~~javascript
    module: {
            // html
            {
                test: /\.html$/,
                // 处理html文件的img图片 (负责引入img图片,从而能被url-loader处理)
                loader: 'html-loader',
            },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
~~~

##### 图片文件打包
主要用到了url-loader,但是url-loader依赖file-loader,所以这两个loader都需要下载
在options进行了配置
  - limit:限制多大以下的图片进行base64打包
  - name:定义图片的名字,可以调整hash值的长度
  - esModule:是否按照es6模块化打包,默认为true
  - outputPath:打包后的文件放置路径
~~~javascript
module:{
    rules:[
        // img
        {
            test: /\.(jpg|png|gif|jpeg)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                // 关闭es6模块化
                esModule: false,
                outputPath:'imgs'
            }
        },
    ]
},
~~~
##### 其他资源打包
主要用到了file-loader来加载
~~~javascript
module:{
    rules:[
        {
            exclude: /\.(html|css|jpg|jpeg|png|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[hash:10].[ext]',
                outputMedia:'media'
            }
        }
    ]
},
~~~

#### devServer
开发服务器:devServer
~~~javascript
// 启动devServer指令 webpack-dev-server
devServer: {
    // 项目路径
    static: {
        directory: resolve(__dirname, 'build'),
    },
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open:true
}
~~~
- static:该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用：
- compress:是否启动gzip压缩,默认为false
- port:执行的端口
- open:是否自动打开浏览器,默认为false
- [...][https://webpack.docschina.org/configuration/dev-server/#devserverstatic]

#### 开发环境配置
运行指令
  webpack 会将打包结果输出出去
  npx webpack-dev-server 只会在内存中编译打包,没有输出

具体配置
~~~javascript
const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 需要处理多个loader用use
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // css
            // 样式文件和js文件一起
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // img
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    // 关闭es6模块化
                    esModule: false,
                    outputPath:'imgs'
                }
            },
            // html
            {
                test: /\.html$/,
                // 处理html文件的img图片 (负责引入img图片,从而能被url-loader处理)
                loader: 'html-loader',
            },
            // 其他
            {
                exclude: /\.(html|css|jpg|jpeg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputMedia:'media'
                }
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // 启动devServer指令 webpack-dev-server
    devServer: {
        // 项目路径
        static: {
            directory: resolve(__dirname, 'build'),
        },
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open:true
    }
}
~~~