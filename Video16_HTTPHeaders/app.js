//HTTP Headers : are an important part of the API request and response as they represent the meta-data associated witht the API request and response.
    //It carries information for the request and the response body.

//it has two things request headers and response headers

//always add X to custom headers (to mark the header as custom and not built in)


const { urlencoded } = require('body-parser');
const express = require('express')
const fs = require('fs')

const port = 3000;
const app = express();

app.use(express.urlencoded({extended:false})); //to decode form data
app.use(express.json({extended:false})); //to decode json file!

app.get("/api/users",(req,res)=>{
    res.setHeader("X-MyName","Susmik Maiti");//custom header
    req.X_Id = "98wjkey389dkjnqw";
    //always add X to custom headers
    return res.json({"Name":"Susmik"});
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on http://localhost:${port}`);
})


//defnition in an advanced way
//example
//implementation

