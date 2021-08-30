const express=require('express');
const morgan=require('morgan');

const app=express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.get('/',(req,res)=>{
    res.send('Hello Word');
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})