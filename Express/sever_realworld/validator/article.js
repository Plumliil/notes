const validate = require('../middleware/validate');
const {body,param} = require('express-validator')
const mongoose = require('mongoose')
const {Article} = require('../model')

// 创建文章
exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('文章标题不能为空'),
    body('article.description').notEmpty().withMessage('文章描述不能为空'),
    body('article.body').notEmpty().withMessage('文章内容不能为空')
])
// 获取文章
exports.getArtcle = validate([

    // validate.isValidObjectId(['params'],'articleId')
    param('articleId').custom(async value => {
        if (!mongoose.isValidObjectId(value)) {
            // console.log(value)
            // 返回一个失败状态的Promise
            return Promise.reject('文章ID类型错误')
        }
    })
])
// 更新文章
// 检查ID是否有效 不懂
exports.updateArticle = [
    validate([
    // 引入验证id
    validate.isValidObjectId(['params'],'articleId')
    // param('articleId').custom(async value => {
    //     if (!mongoose.isValidObjectId(value)) {
    //         return Promise.reject('文章ID类型错误')
    //     }
    // }),
    ]),
    // 检验文章是否存在
    async (req, res, next) => {
        const articleId = req.params.articleId;
        const article = await Article.findById(articleId);
        // 挂载
        req.article = article
        if (!article) {
            return res.status(404).end()
        }
        next()
    },
    // 判断 修改文章的作者是否为当前登录用户
    async (req, res, next) => {
        console.log(typeof (req.user._id), typeof (req.article.author))
        if(req.user._id.toString()!==req.article.author.toString()){
            req.res.status(403).end()
        }
        next()
    }
]
exports.deleteArticle=exports.updateArticle