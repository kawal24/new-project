const { default: mongoose } = require("mongoose");
const { createBook, listOfBook } = require("../services/book.service");



const  bookController=async(req,res,next)=>{
    const requestbody=req.body;
    const newbook= await createBook(requestbody)
     res.send({message:"ok",newbook})
 }

 const getBookController=async(req,res,next)=>{
    const ListCustomer= await listOfBook.find()
    res.send({
        message:"ok",
       data: ListCustomer
    })
}
 module.exports={bookController,getBookController}