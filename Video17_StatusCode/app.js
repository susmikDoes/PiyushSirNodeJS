//HTTP Response code(IBM)
const { log } = require('console');
const express = require('express')

const port = 3002;
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    //console.log("Connect")
    

    const data = req.body;
    if(!data || !data.email){
        return res.status(400).json({msg:'All fields are required specially Email.'});
    }
    console.log(data);

    res.send("<h1>Hello World!</h1>");
})

app.listen(port,()=>{
    console.log(`Connected to http://localhost:${port}`);
})

//Video 18 - Getting started with MongoDB

 