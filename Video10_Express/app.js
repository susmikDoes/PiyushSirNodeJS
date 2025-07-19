const express = require("express")
const app = express()
const port = 3012;

app.get("/", (req,res)=>{
    res.send("Hello from Home Page. "+"Hello "+req.query.name+".");
});

app.listen(port , ()=>{
    console.log(`Server is connected to ${port}`);
});