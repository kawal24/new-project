const customermodel=require('../models/customer.model')

  
  const data={
    
  }
 
 

const createCustomer=async(data)=>{
    const newCustomer=new customermodel(
    {
        name:"bob",
        dataOfBirth:new Date(),
        email:"bob@test.io",
        phoneNumber:"1234567890",
        isactive:true
    }
    )
}