const express=require('express');

const app=express();


// app.get('/user/:id',
//     (req, res, next) => {
//     if(req.params.id==='0') next('route');
//     else next();
//     },
//     (req,res,next)=>{
//     res.send('regular');
//     }
// )
//
// app.get('/user/:id',(req, res, next) => {
//     res.send('special');
// })

function logORiginalUrl(req,res,next){
    console.log('Request URL:',req.originalUrl);
    next()
}
function logMethod(req,res,next){
    console.log('Request Type:',req.method);
    next()
}

let logStuff=[logORiginalUrl,logMethod];

app.get('/user/:id',logStuff,(req,res,next)=>{
    res.send('USER INFO');
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})