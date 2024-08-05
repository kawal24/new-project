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
 module.exports={createCustomerController,getCustomersController}
