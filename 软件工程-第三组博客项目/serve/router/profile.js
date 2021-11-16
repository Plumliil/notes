const express=require('express');
const profileCtrl=require('../controller/profile')

const router=express.Router();

// 获取指定用户资料
router.post('/:username',profileCtrl.getCurrentUserInfo)

// 关注用户
router.post('/:username/follow',profileCtrl.follow);

// 取消关注
router.delete('/:username/follow',profileCtrl.unfollow);


module.exports=router;