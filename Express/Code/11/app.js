const express = require('express');
const fs = require('fs')
const template = require('art-template')
const path=require('path')
const app = express();

// view engine setup
// 当渲染以 .art 结尾的资源文件时使用 express-art-template
app.engine('art', require('express-art-template'));
// art-template模板引擎配置
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// 配置模板文件存储目录
app.set('views', path.join(__dirname, 'views'));
// 可以省略的模板文件后缀名
app.set('view engine', 'art');


const todos = [
    {id: 1, title: '吃饭1'},
    {id: 2, title: '吃饭2'},
    {id: 3, title: '吃饭3'},
    {id: 4, title: '吃饭4'},
    {id: 5, title: '吃饭5'},
]

// express 提供了一个单独的中间件来托管静态资源
// 访问的时候不要加前缀
// app.use(express.static('./public'))
// 加访问前缀
app.use('/public',express.static('./public'))
// 路径最好是绝对路径
// app.use('/public',express.static())

// 静态资源托管配置项
// app.use('/public',express.static(
//     path.join(__dirname,'./public'),
//     {
//         index:false
//     }
// ))

// 托管多个静态目录
// 资源相同时,优先访问前面的
// app.use('/public',express.static('./public'))
// app.use('/node_modules',express.static('./node_modules'))

// 页面中资源请求路径问题







app.get('/',(req, res) => {
    res.render('index')
})

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000/')
})