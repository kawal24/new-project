const mongoose=require('mongoose')


const bookSchema=new mongoose.Schema({
    name:{type:String,required:true},
    publishedDate:{type:Date},
    price:{type:Number},
    authorName:{type:String},
    category:{type:String}, 
})

const Book=mongoose.model("bookSchema",bookSchema) // it will create a collection named customers

module.exports= Book