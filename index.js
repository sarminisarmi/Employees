const express=require('express')
const app=express()
const Port=6000;
const path =require('path')
const router=require('./Employees');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);






app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
});
