const {Tag} =require('../model')
// 标签列表
exports.tag = async (req, res, next) => {
    try {
        console.log(111);
        res.send('asdasd')
        // })
    } catch (err) {
        next(err)
    }
}
// 标签列表
exports.tagsList = async (req, res, next) => {
    try {
        const tagList=await Tag.find()
        const tagsCount=await Tag.countDocuments()
        res.status(200).json({
            tagList,
            tagsCount
        })
    } catch (err) {
        next(err)
    }
}
// 添加标签
exports.addTag = async (req, res, next) => {
    try {
        // 处理请求
        const tag=new Tag(req.body.tag)
        await tag.save()
        res.status(201).json({
            tag
        })
    } catch (err) {
        next(err)
    }
}
// 更新标签
exports.updateTag = async (req, res, next) => {
    try {
        let tag=await Tag.find(req.body.tag)
        tag[0].num+=1
        await Tag.updateOne({_id:tag[0]._id} ,{num:tag[0].num})
        res.status(200).json({
            tag,
            state:'sucess'
        })
    } catch (err) {
        next(err)
    }
}