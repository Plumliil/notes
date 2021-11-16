const express=require('express')
const tagCtrl=require('../controller/tag')

const router=express.Router()

// 获取标签列表
router.get('/',tagCtrl.tagsList)
// 获取标签
router.get('/tag',tagCtrl.tag)
// 添加标签
router.post('/addTag',tagCtrl.addTag)
// 更新标签
router.put('/updateTag',tagCtrl.updateTag)
module.exports=router