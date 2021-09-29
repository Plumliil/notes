const express=require('express')
const commentCtrl=require('../controller/comment')

const router=express.Router()

// 获取标签
router.get('/',commentCtrl.getComments)
// 添加标签
router.post('/addComment',commentCtrl.addComment)

module.exports=router