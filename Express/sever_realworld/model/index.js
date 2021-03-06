const mongoose=require('mongoose');
const {dbUri}=require('../config/config.default');
// const tagSchema = require('./tag');

mongoose.connect(dbUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log('MongoDB 数据库连接失败',err)
    }else{
        console.log('realworld 数据库连接成功')
    }
})

// 组织导出类型类
module.exports={
    User:mongoose.model('User',require('./user')),
    Article:mongoose.model('Article',require('./article')),
    Tag:mongoose.model('Tag',require('./tag')),
    Comment:mongoose.model('Comment',require('./comment')),
    Images:mongoose.model('Img',require('./uploadImg'))
}
