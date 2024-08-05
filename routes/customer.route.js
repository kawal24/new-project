const express = require('express');

const curtomersRouter = express.Router();

const { createCustomer, ListCustomers } = require('../services/customer');
const { getCustomersController } = require('../controller/customer.controller');

createCustomer.post('/',createCustomerController)

//  listener for get requestof customers

createCustomer.get('/',getCustomersController)







module.export=curtomersRouter;