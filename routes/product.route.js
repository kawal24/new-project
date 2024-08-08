const express = require('express');

const ProductRouter = express.Router();

const {productService} = require('../services/product');
const { createProductcontroller } = require('../controller/product.controller');

productService.post('/',createProductcontroller)