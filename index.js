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
 
const mongoose =require('mongoose')


const app=express();

// connect with momngo dg
const connectionString='mongodb://localhost:27017'
const dataBaseName='testapp'
mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:dataBaseName
}).then(()=>{
    console.log('connected to database')}).catch((err)=>{
        console.log("error connecting to database",err)
    })

app.listen(3001,()=>{
    console.log("server is running on port https:/localhost:3001");
})

app.get("/",(req,res,next)=>{
    res.write(`hello world`)
res.send()

})