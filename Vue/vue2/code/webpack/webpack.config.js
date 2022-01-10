const path=require('path')
// 导入htmlplugin插件得到插件的构造函数
const HtmlPlugin=require('html-webpack-plugin')
// 导入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 创建html插件的实例对象
const htmlPlugin=new HtmlPlugin({
    template:'./src/index.html', // 指定源文件的存放路径
    filename:'./index.html' // 指定生成文件的存放路径
})

module.exports={
    mode:'development', // mode 用来指定构建模式 可选值有 development 和 production
    // mode:'production' // mode 用来指定构建模式 可选值有 development 和 production
    // entry:'指定处理哪个文件'
    // 在开发调试阶段建议把devtool值设置为eval-source-map
    // devtool:'eval-source-map',
    // 实际发布时可以选择下行代码或者直接关闭SourceMap
    devtool:'nosources-source-map',
    entry:path.join(__dirname,'./src/index.js'),
    // 指定生成的文件存放到哪里
    output:{
        // 存放目录
        path:path.join(__dirname,'dist'),
        // 生成的文件名
        filename:'js/bundle.js'
    },
    plugins:[htmlPlugin,new CleanWebpackPlugin()], // 通过 plungins 节点，使 htmlPlugin 插件生效，
    devServer: {
        // 首次打包成功打开浏览器
        open:true,
        host:'127.0.0.1',
        // 在http协议中如果端口号是 80 则可以被省略
        // port:5555
    },
    module:{
        // 所有第三方模块匹配规则
        rules:[
            // 文件后缀名匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // 在配置url-loader时多个参数之间使用&参数分割
            {test:/\.jpg|png|gif$/,use:['url-loader?limmit=22229&outputPath=images']},
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modiles/},
        ]
    },
    resolve:{
        alias:{
            // 告诉webpack程序员写的代码中@代表src目录
            '@':path.join(__dirname,'./src/')
        }
    }
}

