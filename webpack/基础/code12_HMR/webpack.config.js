const {
    resolve
} = require('path');
/* 
    HMR:hot module replacement 热模块替换/模块热替换
    作用:一个模块发生变化,指挥重新打包这一个模块,而不是打包所有模块
    css文件:可以使用HMR功能:因为style-loader内部实现了
    js文件:默认不能使用HMR功能-->需要修改js代码,添加支持HMR功能的代码 只针对非入口文件js
    html文件:默认不能使用HMR功能 (不用做热更新)
*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
process.env.NODE_ENV = 'development'

const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
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
                    ...commonCssLoader
                ]
            },
            // {
            //     test:/\.js$/,
            //     exclude:/node_modules/,
            //     loader:'eslint-loader',
            //     enforce:'pre',
            //     options:{
            //         fix:true
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                "useBuiltIns": "usage",
                                "corejs": {
                                    "version": 3
                                },
                                "targets": {
                                    "chrome": "60",
                                    "firefox": "60",
                                    "ie": "9",
                                    "safari": "10",
                                    "edge": "17"
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs',
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CssMinimizerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: resolve(__dirname, 'build'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    devtool: 'hidden-source-map'
}
/* 
    source-map:一种提供源代码到构建后代码映射计数(如果构建后代码出错,通过映射可以追踪源代码错误)
    [inline-|hidden-|eval-] [cheap-[module-]]source-map
    source-map:外部
    错误代码准确信息 和 源代码错误位置

    inline-source-map:内联
        只生成一个内联source-map
    hidden-source-map:外部
        错误代码错误原因,但是没有错误位置
        不能追踪到源代码错误
    eval-source-map:内联
        每一个文件都声称对于source-map都在eval
    nosources-source-map:外部
        错误代码错误原因,但是没有错误位置
    cheap-source-map        
        错误代码准确信息 和 源代码的错误位置
        只能精确到行
    cheap-moudle-source-map
        错误代码准确信息 和 源代码错误位置
    内联 和 外联的区别:1.外部生成了文件,内联没有 2.内联构建速度更快

    开发环境:速度快,调试更友好
        速度快(eval>inline>cheap...)
        调试更友好
            source-map
            cheap-moudle-source-map
            cheap-source-map
        调试首选:eval-source-map 性能首选:eval-cheap-module-source-map
    生产环境:源代码要不要隐藏,调试要不要更友好
        内联让体积变大,所以生产环境不用内联
        nosources-source-map
        hidden-source-map
*/