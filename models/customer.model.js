const mongosse=require('mongoose')
const customerSchema=new mongosse.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    dob:{type:Date,required:true},
    email:{type:String,required:false},
    phoneNumber:{type:String,required:true},
    isactive:{type:Boolean,required:true}
  
})

const customermodel=mongosse.model("customer",customerSchema) // it will create a collection named customers

mongosse.model=customerSchema