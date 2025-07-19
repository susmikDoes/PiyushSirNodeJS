const express = require('express')
const fs = require('fs')

const port = 3001;
const app = express();


app.use(express.urlencoded({extended:false}))
/*
This is a middleware what this does is - 
 Turns the form data into object and then places it into req.body
*/

//req is the request coming from the website
//if we want to send response directly we have res
//if we want to go to the next middleware or route we have next
/*
INTRODUCTION TO MIDDLEWARE
app.use((req,res,next) => {
    console.log("This is a middleware!");
    req.myUserName = "piyushgarg.dev";
    next();
    //next();
    //return res.json({msg:"Hello from middleware 1"});
})
*/

app.use((req,res,next)=>{
    fs.appendFile('log.txt',`${Date.now()} : ${req.method} : ${req.path}`,(err,data)=>{
        next();
    });
    next();
})

app.use((req,res,next)=>{
    console.log("Hello from middleware 2!");
    console.log("UserName : ",req.myUserName);
    console.log("Out of middleware to get route!")
    next();
})

app.get('/api/users',(req,res)=>{
    console.log("Inside get route!");
    console.log("Username : ",req.myUserName);
    res.send('<h1>Reached final destination</h1>')
})

app.listen(port,()=>{
    console.log(`Connected to http://localhost:${port}`)
})