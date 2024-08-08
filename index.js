// const fs=require("fs");


// console.log("hello wrold");

// const fileBuffer=fs.readFileSync("food.txt");

// const foodString=fileBuffer.toString();
// const filestringconten=foodString.toString();

// console.log(filestringconten);

// // add some food

// const foodtoadd="pizza, cake,burgur";

// fs.writeFileSync("food.txt",foodtoadd)


// fs.appendFileSync("food.txt",foodtoadd)


const express = require('express');
 
const mongoose =require('mongoose');
const { createCustomer ,ListCustomers } = require('./services/customer');


const app=express();

// connect with momngo dg
const connectionString='mongodb+srv://kawaljit:*****@cluster0.qelonsb.mongodb.net/test'
const dataBaseName='testapp'
mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:dataBaseName
}).then(()=>{
    console.log('connected to database');
})
    .catch((err)=>{
        console.log("error connecting to database",err)
    })

app.listen(3005,()=>{
    console.log("server is running on port http://localhost:3005");
})


app.get("/",(req,res,next)=>{
    res.write(`hello world`)
})
app.get("/res", ()=>console.log("gefkldu"))

// createc customer service/
app.use(express.json())

// 1 router ,2. middleware , 3.controller , .5 service


app.use('/customers',createCustomer,ListCustomers)
app.use('/book',bookRouter)