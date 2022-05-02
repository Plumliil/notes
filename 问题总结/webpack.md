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