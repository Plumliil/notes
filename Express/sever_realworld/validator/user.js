const valudate = require('../middleware/validate');
const {body,validationResult}=require('express-validator')
const {User} = require('../model/index')
const {Promise} = require("mongoose");
const md5=require('../util/md5');
exports.register = valudate([
    body('user.username')
        .notEmpty().withMessage('用户名不能为空')
        .custom(async username => {
            const user = await User.findOne({username})
            if (user) {
                return Promise.reject('用户名已存在')
            }
        }),
    body('user.email')
        .notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式不正确')
        .bail()
        .custom(async email => {
            const user = await User.findOne({email})
            if (user) {
                return Promise.reject('邮箱已存在')
            }
        })

])
exports.login=[
    valudate([
        body('user.email').notEmpty().withMessage('邮箱不能为空'),
        body('user.password').notEmpty().withMessage('密码不能为空')
    ]),
    valudate([
        body('user.email')
            .custom(async (email,{req})=>{
                const user = await User.findOne({email}).select('password')
                if(!user){
                    return Promise.reject('用户不存在')
                }
                // 将数据挂载请求到对象中，后续的中间件也可以使用
                req.user=user
            })
    ]),
    valudate([
        body('user.password').custom(async(password, {req})=>{
            console.log(md5(password))
            console.log(req.user.password)
            if(md5(password)!==req.user.password){
                return Promise.reject('密码错误')
            }
        })
    ])
]
