
const Book=require("../models/book.model")


const createBook=async(book)=>{
  console.log("book", book)
    const newbook=new Book(book)
    return newbook.save()
}

const  listOfBook=async(req,res,next)=>{
      const books=await Book.find()
      return books
  }



module.exports={createBook,listOfBook }