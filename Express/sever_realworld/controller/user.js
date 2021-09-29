const {User} = require('../model')
const jwt=require('../util/jwt')
const {jwtSecret}=require('../config/config.default')
// 用户注册
exports.register = async (req, res, next) => {
    try {
        // 1.获取请求体数据
        // 2.数据验证
        // 3.验证通过，将数据保存到数据库
        let user = new User(req.body.user)

        // 保存到数据库
        await user.save()

        user=user.toJSON()

        console.log(user)

        delete user.password
        // 4.发送成功响应
        console.log(req.body.user)
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}
// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 1.获取请求体数据
        // 2.数据验证
        // 3.生成token
        // req.user为验证时挂载的user
        const user=req.user.toJSON()
        const token=await jwt.sign({
            userId:user._id,
            userName:user.username
        },jwtSecret)
        // 4.验证通过，将数据保存到数据库
        // 5 .发送成功响应
        delete user.password

        res.status(200).json({
            ...user,
            token
        })
        // res.send('login')
    } catch (err) {
        next(err)
    }
}
// 获取当前用户
exports.getCurrentUser = async (req, res, next) => {
    try {
        console.log(req.headers)
        // res.send('getCurrentUser')
        res.status(200).json({
            user:req.user
        })

    } catch (err) {
        next(err)
    }
}// 更新当前用户
exports.updateCurrentUser = async (req, res, next) => {
    try {
        res.send('updateCurrentUser')
    } catch (err) {
        next(err)
    }
}