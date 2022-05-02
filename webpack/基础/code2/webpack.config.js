/* 
    loader:1.下载  2.使用
    plugin:1.下载  2.引入  3.使用

*/

const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader
        ]
    },
    plugins: [
        // plugin
        // html-webpack-plugin
        // 默认创建一个空的html文件,引入打包输出的所有资源(js/css)
        // 需求:需要有结构的html文件
        new HtmlWebpackPlugin({
            // 复制./src/index.html文件,并自动引入打包输出的所有资源(js/css)
            template:'./src/index.html'
        })
    ],
    mode: 'development'
}