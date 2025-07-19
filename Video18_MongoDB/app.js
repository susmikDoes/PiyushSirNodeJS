const mongoose = require('mongoose')
const express = require('express')

const port = 3002;
const app = express();

mongoose
    .connect("mongodb://localhost:27017/youtube-app-1")
    .then(()=>{console.log("MongoDB Connected!")})
    .catch(err=>console.log("Error : ",err));

//Schema
const userSchema = new mongoose.Schema({
    firtName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String
    },
    gender:{
        type:String,
        //required:true
    },  
},{timestamps:true});

//Model
const User = mongoose.model('user',userSchema);   //here the user in the right hand side becomes a collection added as s


app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.json({'Naam':"Suna hi Hoga"});
})

//create(insert) a new user
app.post("/api/users",async(req,res)=>{
    const body = req.body;
    const result = await User.create({
        firtName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender,
    })
    console.log(result);
    return res.status(201).json({msg:"Success"});
})

//display data from backend to frontned
app.get("/api/users",async(req,res)=>{
    const allDbUsers = await User.find({});
    const html = `
        <ul>
            ${allDbUsers
                .map((user)=> `<li>${user.firtName} - ${user.email}</li>`)
                .join("")
            }
        </ul>
    `;
    res.send(html);
}) 

app.listen(port,()=>{
    console.log(`Connected to http://localhost:${port}`);
})

//The MVC architecture

/*
    MODELS :
the kind of schemas used say for mongodb
and then export it


    CONTROLLERS


    ROUTES


    VIEWS

*/