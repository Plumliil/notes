const express=require('express');
const fs=require('fs');
const {getDb}=require('./db');
const {saveDb}=require('./db');
const router=require('./router');

const app=express();

// 配置解析表单请求体： application/json
app.use(express.json());
// 配置解析表单请求体： application/x-www-form-urlencoded
app.use(express.urlencoded());

// 挂载路由
// 给路由限制访问前缀
app.use('/todos',router);

// 通常会在所有路由后配置处理 404 内容
// 请求进来从上到下一次匹配
app.use((req, res, next) => {
    res.status(404).send('404 NOT FIND')
})

// 在所有中间件后挂载错误处理中间件
app.use((err,req,res,next)=>{
    console.log('错误',err);
    res.status(500).json({
        error:err.message
    })
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})
