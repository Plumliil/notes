/* 
  webpack.config.js webpack的配置文件
    作用:指示webpack干哪些活,当运行webpack指令是会加载哪些配置
    所有的构建工具都是基于nodejs平台运行~ 模块化默认采用commonjs
*/

const {resolve}=require('path');

module.exports={
    // 入口起点
    entry:'./src/index.js',
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径
        // __dirname nodejs变量,代表当前文件的目录绝对路径
        path:resolve(__dirname,'build')
    },
    // loader 配置
    module:{
        rules:[
            // 详细loader配置
            // 一个配置匹配处理一个资源
            {
                // 匹配哪些文件
                test:/\.css$/,
                // 使用哪些loader进行处理
                use:[
                    // use数组执行顺序,从右到左,从下向上
                    // 创建一个style标签,将js中的css样式资源插入,添加到页面中生效
                    'style-loader',
                    // 将css文件以字符串形式变成commonjs模块加载到js中,里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // plugin 插件
    plugins:[
        // 详细plugin配置
    ],
    // 模式
    mode:'development',
    // mode:'production',

}