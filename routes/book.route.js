const express = require('express');
const { createBook } = require('../services/book.service');
const { bookController } = require('../controller/book.constroller');

const bookRouter = express.Router();


createBook.post('/',bookController)
//  createBook.get('/books',bookController)


module.exports=bookRouter;