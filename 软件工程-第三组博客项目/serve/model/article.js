const mongoose=require('mongoose');
const baseModel=require('./base_model');
const Schema=mongoose.Schema;
const articleSchema=new mongoose.Schema({
    ...baseModel,
    image:{
        type:[String],
        default:['http://124.70.8.61:3366/public/img/4.jpg']
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    favoriteCount:{
        type:String,
        required:true,
        default:'0'
    },
    // approve:{
    //     type:Number,
    //     required:true,
    //     default:0
    // },
    author:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    authorName:{
        type:String,
        // required:true
    }
})
// const
module.exports=articleSchema
