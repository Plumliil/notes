const {
    resolve
} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            /* 
                js兼容性处理 
                    依赖包:babel-loader @babel/core @babel/preset-env
                    1.基本处理:@babel/preset-env
                    只能转换基本语法,例如promise无法处理
                    2.全部js兼容处理:@babel/polyfill
                    问题:只要解决部分兼容性问题,将所有兼容性代码引入1,代码体积太大
                    3.需要做兼容性处理的就按需加载 corejs

            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设:指示babel做怎么样的处理
                    presets: [
                        // '@babel/preset-env',
                        // {
                        //     // 按需加载
                        //     useBuiltIns:'usage',
                        //     // 指定corejs版本
                        //     corejs:{
                        //         version:3
                        //     },
                        //     // 指定具体兼容性做到哪个版本浏览器
                        //     targets:{
                        //         chrome:'60',
                        //         firfox:'60',
                        //         ie:'9',
                        //         safari:'10',
                        //         edge:'17'
                        //     }
                        // }
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
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}