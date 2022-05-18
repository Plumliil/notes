const {
    resolve
} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); // css压缩
const HtmlWebpackPlugin=require('html-webpack-plugin');
// 定义nodejs变量,决定使用browserslist哪个环境
process.env.NODE_ENV = 'production';
// 复用loader
const commonCssLoade = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        // css兼容性处理 还需在package中定义browserslist
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
                use: [...commonCssLoade]
            },
            {
                test: /\.less$/,
                use: [...commonCssLoade, 'less-loader']
            },
            /* 
                一个文件被多个loader处理,那么一定要指定loader执行先后顺序:
                    先执行 eslint 再执行 babel
            
            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce:'pre',
                options: {
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["@babel/preset-env", {
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
                        }]
                    ]
                }
            },
            {
                test:/\.(jpg|png|gif)/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10].[ext]',
                    outputPath:'imgs',
                    esModule:false
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                minify:{
                    collapseWhitespace:true,
                    removeComments:true
                }
            },
            {
                exclude:/\.(js|css|html|jpg|png|gif)/,
                loader:'file-loader',
                options:{
                    outputPath:'media'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new CssMinimizerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode: 'production'
}