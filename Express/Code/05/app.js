const express=require('express');

const app=express();


// req.body获取请求体
// app.use(express.json());
// app.use(express.urlencoded());
//
// const mylogger=(req)=>{
//     console.log(req.method,req.url,Date.now())
// }



// function json(options){
//     return (req,res,next)=>{
//         console.log(`hello ${options.message}`);
//         next()
//     }
// }
//
// app.use(json({
//     message:'张三'
// }));

// 中间件的顺序很重要
// req 请求对象
// res 响应对象
// next 下一个中间件
app.use((req,res,next)=>{
    req.foo='bar';
    res.abc=()=>{
        console.log('abc')
    }
    console.log(req.method,req.url,Date.now())
    // 交出执行权，往后继续匹配
    next()
})

app.get('/',(req,res)=>{
    console.log(req.foo)
    res.send('get /')
})
app.get('/about',(req,res)=>{
    res.abc()
    res.send('get /about')
})
app.post('/login',(req,res)=>{
    res.send('gpost /login')
})
app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})



// const mylogger=(req)=>{
//     console.log(req.method,req.url,Date.now())
//
// }
//
// app.get('/',(req,res)=>{
//     mylogger(req);
//     res.send('get /')
// })
// app.get('/about',(req,res)=>{
//     mylogger(req);
//     res.send('get /about')
// })
// app.post('/login',(req,res)=>{
//     mylogger(req);
//     res.send('gpost /login')
// })
// app.listen(3000,()=>{
//     console.log('Server running at http://localhost:3000/')
// })