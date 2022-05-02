const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 需要处理多个loader用use
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.less$/,
                // 需要处理多个loader用use
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 处理图片资源
                // 不会重复打包某一个文件
                // 默认处理不了html中图片
                test: /\.(jpeg|jpg|png|gif)$/,
                // 使用一个url-loader 下载url-loader file-loader前者依赖后者
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb 就会被base64处理
                    // 优点:减少请求数量(减轻服务器压力)
                    // 缺点:图片体积会更大
                    // url-loader默认使用es6模块解析,而html-loader引入图片是commonjs
                    // 解决:关闭url-loader的模块化,使用commonjs解析

                    limit: 8 * 1024,
                    esModule:false,
                    // 命名:取图片哈希值前十位 ext文件原扩展名
                    name:'[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片 (负责引入img图片,从而能被url-loader处理)
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}