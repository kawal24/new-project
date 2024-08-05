const mongoose=require('mongoose')


const customerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
    dob:{type:Date},
    email:{type:String,required:false,unique:true},
    phoneNumber:{type:String},
    isactive:{type:Boolean,default:true}
  
})

const customermodel=mongoose.model("customer",customerSchema) // it will create a collection named customers

module.exports=customermodel