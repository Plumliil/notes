const {
    resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

// 压缩css 
// optimize-css-assets-webpack-plugin
// webpack 5 以上 css-minimizer-webpack-plugin
const CssMinimizerWebpackPlugin=require('css-minimizer-webpack-plugin');

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
        }],
        // optimization:{
        //     minimizer:[
        //         new CssMinimizerPlugin()
        //     ]
        // }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new CssMinimizerWebpackPlugin()
    ],
    mode: 'development'
}