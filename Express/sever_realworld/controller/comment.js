const {Comment} = require('../model')
const {Article} = require("../model/index");
// 创建评论
exports.addComment = async (req, res, next) => {
    try {
        const comment = new Comment(req.body.comment)
        await comment.save()
        res.status(201).json({
            comment,
            state: 'success'
        })
        console.log(comment);
    } catch (err) {
        next(err)
    }
}
// 获取评论列表
exports.getComments = async (req, res, next) => {
    try {
        const {limit = 20, offset = 0} = req.query
        const comList = await Comment.find()
            .limit(parseInt(limit))
            .skip(parseInt(offset))
            .sort({createdAt: -1})
        const commentsCount=await Comment.countDocuments()
        console.log(comList)
        res.status(200).json({
            comList,
            commentsCount
        })
    } catch (err) {
        next(err)
    }
}
