const fs = require("fs");
const path = require('path')
const {Images} = require('../model/index')
exports.uploadOne = async (req, res, next) => {
    try {
        console.log(req.file);
        // var imgUrl = 'imgUrl'
        fs.readFile(req.file.path, async (err, data) => {
            if (err) {
                return res.send('上传失败')
            }
            fs.writeFile(`./static/img/${req.file.originalname}`, data, err => {
                console.log('写入成功')
            })
            const imgData = {
                data:[req.file],
                url: [`http://localhost:3000/public/img/${req.file.originalname}`]
            }
            const img = new Images(imgData)
            await img.save()
            res.status(201).json({
                img
            })
        })
    } catch (err) {
        next(err)
    }
}
exports.uploadMany = async (req, res, next) => {
    try {
        const files = req.files
        let imgsData = {
            data:[],
            urls:[],
            // article:''
        }
        files.forEach(item => {
            fs.readFile(item.path, async (err, data) => {
                if (err) {
                    return res.send('上传失败')
                }
                fs.writeFile(`./static/img/${item.originalname}`, data, err => {
                    console.log('写入成功')
                })
            })
            imgsData.data.push(item)
            imgsData.urls.push(`http://localhost:3000/public/img/${item.originalname}`)
        })
        // imgsData.article=req.params.articleId
        const imgs=new Images(imgsData)
        await imgs.save()
        res.status(201).json({
            imgs,
            status:'success'
        })
    } catch (err) {
        next(err)
    }
}
