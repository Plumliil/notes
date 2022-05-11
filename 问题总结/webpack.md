### 1.webpack-dev-server启动报错
~~~shell
Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'contentBase'. These properties are valid:
   object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? }
~~~
按提示，新版本的webpack配置文件webpack.config.json格式调整了，不支持contentBase

解决办法: static directory
~~~javascript
devServer: {
    static: {
        directory: resolve(__dirname, 'build'),
    },
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000
}
~~~

### 2.处理css兼容遇到的问题
`npm install postcss-loader postcss-preset-env -D`
`mini-css-extract-plugin`
~~~shell
Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):
HookWebpackError: Module build failed (from ../node_modules/postcss-loader/dist/cjs.js):   
ValidationError: Invalid options object. PostCSS Loader has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'ident'. These properties are valid:
   object { postcssOptions?, execute?, sourceMap?, implementation? }
~~~
解决办法:
改成：在 
~~~javascript
ident:"postcss",
plugins:()=>[
        require("postcss-preset-env")()
      ]
~~~
外部加一层postcssOptions

~~~javascript
 options:{
    postcssOptions:{
        ident:"postcss",
            plugins:()=>[
            require("postcss-preset-env")()
        ]
    }
}
~~~
修改过后的代码:
~~~javascript
{
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            ident: 'postcss',
            plugins: () => [
                // postcss插件
                require('postcss-preset-env')()
            ]
        }
    }
}
~~~
完整代码:

~~~JavaScript
const {
    resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // 创建style标签,将样式放进去
                // 'style-loader', 
                // 取代style-loader 提取 css 样式为单独文件
                MiniCssExtractPlugin.loader,
                // 将css文件整合到js文件中
                'css-loader',
                /* 
                    css兼容性处理:postcss-->postcss-loader postcss-preset-env
                
                    postcss-preset-env 帮助postcss找到package.json中browserslist里面配置
                    通过配置加载指定的css兼容性样式
                    "browserslist":{
                      开发环境设置node环境变量:process.env.NODE_ENV=development
                      "development":[
                        "last 1 chrome version",
                        "last 1 firefox version",
                        "last 1 safari version",
                      ],
                      浏览器兼容处理
                      "production":[
                        ">0.2",
                        "not dead",
                       "not op_mini all"
                      ]
                    }
                */
                // 使用loader的默认配置
                // postcss-loader
                // 修改loader配置
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: () => [
                                // postcss插件
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development'
}
~~~