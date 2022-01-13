const path=require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require('webpack');
module.exports={
    // mode:"development",
    // 设置模式 开发 生产
    mode:"development",
    // 设置source-map，建立js映射，方便调试代码和错误
    devtool:'source-map',
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:"js/bundle.js",
    },
    module:{
        rules:[
            {
                test:/\.css$/,//正则表达式
                // 1.loader的写法(语法糖)
                // loader:'css-loader'
                // 完整写法
                use:[
                    "style-loader",
                    "css-loader"
                    // {loader:"css-loader",options:}
                ]
            },
            {
                test:/\.(jpg|jpeg|png|gif|svg)$/,//正则表达式
                type:"asset",
                generator:{
                    filename:"img/[name]_[hash:6][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024
                    }
                }
            }
        ]
    },
    plugins:[
        // 一个个插件对象
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            title:'PlumLi'
        }),
        new DefinePlugin({
            BASE_URL:"'./'"
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from:'public',
                    to:'./',
                    globOptions:{
                        ignore:[
                            '**/index.html'
                        ]
                    }
                }
            ]
        })
    ]
}