const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middleware/error-handler')
const Router = require('./router/router')

// 数据库连接
require('./model/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(cors());

// 配置静态资源目录 整一个文件夹 通过域名能访问
app.use('/public',express.static(path.join(__dirname, './static')))

// 挂载路由
app.use('/api', Router);
// 搭载统一处理错误中间件
app.use(errorHandler())

const PORT = process.env.PORT || 3000;
// const PORT=5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
