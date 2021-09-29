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
app.set('views', path.join(__dirname, '/views'));
// 可以省略的模板文件后缀名
app.set('view engine', 'art');


const todos = [
    {id: 1, title: '吃饭1'},
    {id: 2, title: '吃饭2'},
    {id: 3, title: '吃饭3'},
    {id: 4, title: '吃饭4'},
    {id: 5, title: '吃饭5'},
]

app.get('/', (req, res) => {
    // 1.普通文本
    // res.send('Hello Word');
    // 2.HTML 格式文本
    // res.send('<h1>Hello Express!</h1>')
    // 3.为了便于开发和维护 把文本内容放到单独的文件中 err
    // fs.readFile('./views/index.html',(err, data) => {
    //     if (err){
    //         return res.status(404).send('404 NOT FOUNT')
    //     }
    //     res.send(data)
    // })
    // 4.动态页面渲染
    // fs.readFile('./views/index.html','utf-8',(err, data) => {
    //     if (err){
    //         return res.status(404).send('404 NOT FOUNT')
    //     }
    //     // 获取数据
    //     // 获取模板
    //     // 数据+模板
    //     let str=''
    //     todos.forEach(
    //         str+=`<li>${}</li>`
    //     })
    //     const ret=data.replace('^_^',str)
    //     res.send(ret)
    // })
    // 5.使用模板引擎
    // 1>.读取模板内容
    // fs.readFile('./views/index.html',(err, templateStr) => {
    //     if (err){
    //         return res.status(404).send('404 NOT FOUNT')
    //     }
    //     // 2>.获取数据
    //
    //     // 3>.渲染
    //     const ret=template.render(templateStr,{ // 模板中使用的数据
    //         foo:"bar",
    //         todos
    //     })
    //     res.end(ret)
    // })

    // 只要配置了模板引擎就可以使用render
    // 1.读取模板文件 2.渲染 3.发送响应
    res.render('index',{
        foo:'bar',
        todos
    })
})

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000/')
})