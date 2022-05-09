### webpack-dev-server启动报错
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

### 处理css兼容遇到的问题
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