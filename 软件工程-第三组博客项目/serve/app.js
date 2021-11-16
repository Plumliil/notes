const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middleware/error-handler')
const Router = require('./router/router')
const router = express.Router()
const {Comment} = require('./model')
// 数据库连接
require('./model/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(cors());

router.get('/',async(req,res)=>{
    const comList = await Comment.find()
    res.send(comList)
    console.log(comList)
    // res.send('success')
})

app.use('/', router);

// 配置静态资源目录 整一个文件夹 通过域名能访问
app.use('/public',express.static(path.join(__dirname, './static')))

// 挂载路由
app.use('/api', Router);
// 搭载统一处理错误中间件
app.use(errorHandler())

// const PORT = process.env.PORT || 3366;
const PORT=3366;
app.listen(PORT)
// app.listen(PORT, () => {
//     console.log(`Server is running at http://124.70.8.61:${PORT}`);
// })
