const express=require('express')
const commentCtrl=require('../controller/comment')

const router=express.Router()

// 获取评论
router.get('/',commentCtrl.getComments)
// 添加评论
router.post('/addComment',commentCtrl.addComment)
// 删除评论
router.delete('/:commentId',commentCtrl.deleteComment)

module.exports=router