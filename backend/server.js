const express=require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:'shital',
    password:'shital@123',
    database:'techm'
})

const app=express();
app.get('/records',function(req,res){
    connection.connect();
    connection.query("select * from employee",function(errors,result,fields){
        if(errors) throw errors
        console.log(result)
    })
    connection.end();
})

app.listen(2000,()=>{
    console.log("Server started at 2000 port")
})