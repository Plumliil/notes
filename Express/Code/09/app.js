const express=require('express');
const Path = require("path");

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello Word');
})
app.get('/random.text',(req,res)=>{
    res.send('random.text');
})
// 此路由路径将于acd和匹配abcd
app.get('/ab?cd',(req, res) => {
    res.send('ab?cd');
})
// 此路由路径将会匹配abcd，abbcd，abbbcd
app.get('/ab+cd',(req, res) => {
    res.send('ab+cd');
})
// 此路由路径将会匹配abcd，abxcd，abRANDOMcd，ab123cd
app.get('/ab*cd',(req, res) => {
    res.send('ab*cd');
})
// 此路由路径将会匹配abe,abcde
app.get('/ab(cd)?e',(req, res) => {
    res.send('ab(cd)?e');
})
// 此路由路径将会匹配其中带有“a”的任何内容
// app.get(/a/,(req, res) => {
//     res.send('/a/');
// })
// 此路由路径将会匹配butterfly和dragonfly，但不butterflyman和dragonflyman等以fly结尾的路由
app.get(/.*fly$/,(req, res) => {
    res.send('/.*fly$/');
})
app.get('/users/:id',(req, res) => {
    res.send('userId:'+req.params.id)
})
app.get('/users/:userid/books/:bookid',(req, res) => {
    res.send('/users/:userid/books/:bookid')
})
app.get('/flights/:from-:to',(req, res) => {
    res.send(req.params)
})
app.get('/user/:userId(\\d+)',(req, res) => {
    res.send('/user/:userId(\\d+)'+req.params);
})

// 单个回调函数处理路由
app.get('example/a',(req, res) => {
    res.send('example/a');
})
// 多个回调函数处理路由
app.get('/example/b',
    (req, res, next) => {
        console.log('example/b  第一个回调函数');
        next();
    },
    (req,res)=>{
        res.send('第二个回调函数')
    }
)
// 回调函数以数组形式处理多个路由
const fn1=(req,res,next)=>{
    console.log('fn1')
    next()
}
const fn2=(req,res,next)=>{
    console.log('fn2');
    next()
}
const fn3=(req,res,next)=>{
    res.send('到达了fn3')
}
let fnArr=[fn1,fn2,fn3];
app.get('/fn',fnArr);

// app.route() 链式路由处理
app.route('/book')
    .get((req, res) => {
        res.send('Get a random book');
    })
    .post((req, res) => {
        res.send('Add a book');
    })
    .put((req, res) => {
        res.send('Update the book');
    })

app.all('/secret',(req, res, next) => {
    console.log('Accessing the secret section ...');
    res.send(req.method+'/secret')
    next() // pass control to the next handler
})
app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})