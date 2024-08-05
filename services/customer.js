
const customermodel=require('../models/customer.model')


const createCustomer=async(customer)=>{
  console.log('customer', customer)
    const newCustomer=new customermodel(customer)
    return newCustomer.save()
}

const ListCustomers=async()=>{
    const customerlist= await customermodel.find({})
    return customerlist
}

module.exports={createCustomer, ListCustomers}