// 获取指定用户资料
exports.getCurrentUserInfo=async(req,res,next)=>{
    try{
        // 处理请求
        res.send('getCurrentUserInfo')
    }catch (err){
        next(err)
    }
}
// 关注用户
exports.follow=async(req,res,next)=>{
    try{
        // 处理请求
        res.send('follow')
    }catch (err){
        next(err)
    }
}
// 取消关注用户
exports.unfollow=async(req,res,next)=>{
    try{
        // 处理请求
        res.send('unfollow')
    }catch (err){
        next(err)
    }
}
