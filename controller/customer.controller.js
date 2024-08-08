const { default: mongoose } = require("mongoose");
const { ListCustomers } = require("../services/customer");

const createCustomerController=async(req,res,next)=>{
    const requestbody=req.body;
    const newcustomer= await createCustomer(requestbody)
     res.send({message:"ok",newcustomer})
 }

 const getCustomersController=async(req,res,next)=>{
    const ListCustomer= await ListCustomers.find()
    res.send({
        message:"ok",
       data: ListCustomer
    })
}

const ListCustomerByEmailController=async(req,res,next)=>{
    const email=req.params.id; // as a string

    const filterCriteria={
        customerId:!customerID?undefined:mongoose.Types.ObjectId.createFromHexString(customerID)
    }
      const  parameter={filterCriteria};
      const ListCustomer= await ListCustomers(parameter)
    res.send({
        message:"ok",
       data: ListCustomer
    })
}


// const getsinglecustomerController=async(req,res,next)=>{
//     const 
// }
 module.exports={createCustomerController,getCustomersController,ListCustomerByEmailController}
