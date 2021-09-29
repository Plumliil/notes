const mongoose=require('mongoose');
const baseModel=require('./base_model');
const md5=require('../util/md5')
const {set} = require("mongoose");
const userSchema=new mongoose.Schema({
    ...baseModel,
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true,
        set: value => md5(value),
        select:false
    },
    bio:{
        type:String,
        default:null
    },
    image:{
        type:String,
        default:null
    },
})
// const
module.exports=userSchema