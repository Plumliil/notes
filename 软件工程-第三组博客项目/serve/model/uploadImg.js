const mongoose=require('mongoose');
const {createdAt}=require('./base_model');
const Schema=mongoose.Schema;
const imgSchema=new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true
    // },
    data:{
        type:[Object],
        required:true
    },
    urls:{
        type:[String],
        required:true
    },
    // article:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Article',
    //     required:true
    // },
    createdAt
})
// const
module.exports=imgSchema
