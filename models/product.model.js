const mongoose=require('mongoose')

const product=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    quantity:{type:Number,default:0},
    isactive:{type:Boolean,default:true}
})

const productModel=mongoose.model('product',product)
module.exports=customermodel