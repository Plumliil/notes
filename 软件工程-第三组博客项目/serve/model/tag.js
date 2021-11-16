const mongoose=require('mongoose');
const baseModel=require('./base_model');
const tagSchema=new mongoose.Schema({
    ...baseModel,
    tag:{
        type:String,
        required:true
    },
    num:{
        type:Number,
        required:true,
        default:1
    }
})
// const
module.exports=tagSchema