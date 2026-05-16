const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://susmik787_db_user:susmiK123@cluster0.fjuasv4.mongodb.net/?retryWrites=true&w=majority")
    .then(() => { console.log("Connected to MongoDB") })
    .catch((err) => {console.error("Error connecting to MongoDB", err);});