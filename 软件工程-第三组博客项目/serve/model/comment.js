const mongoose=require('mongoose');
const baseModel=require('./base_model');
const commentSchema=new mongoose.Schema({
    ...baseModel,
    name:{
        type:String,
        required:true
    },
    qq:{
        type:Number,
        required:true,
        default:1
    },
    imgUrl:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    approval:{
        type:Number,
        required:true,
        default:0
    },
    Topping:{
        type:Boolean,
        default:false
    }
})
// const
module.exports=commentSchema
