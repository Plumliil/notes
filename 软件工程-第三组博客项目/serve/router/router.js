const express=require('express');
const {body,validationResult}=require('express-validator')
const userValidator=require('../validator/user')
const router=express.Router();

router.get('/',(req, res) => {
    res.send('get index /')
})

// 用户相关路由
router.use(require('./user'));

// 用户资料相关路由
router.use('/profiles',require('./profile'));

// 文章相关路由
router.use('/articles',require('./article'));

// 标签相关路由
router.use('/tags',require('./tag'));

// 评论相关路由
router.use('/comments',require('./comment'));

// 上传图片
router.use('/upload',require('./uploadImg'));




module.exports=router;
