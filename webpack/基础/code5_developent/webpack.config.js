/* 
  开发环境配置
    运行指令
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包,没有输出
*/

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