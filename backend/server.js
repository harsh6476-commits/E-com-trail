const app = require("./src/app");
const dbconnect = require('./src/config/db')
const express = require('express')
require('dotenv').config()
const cors =  require('cors')
const port = process.env.PORT || 4000;
dbconnect()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
    methods:['GET','POST','PUT','DELETE']
}))
const dummyData = [
  { name: "John Doe", age: 28 },
  { name: "Jane Smith", age: 34 }
];   
app.get("/",(req,res)=>{
    res.send(dummyData);
})



app.listen(port , ()=>{
    console.log(`server started at Port ${port}` );
})