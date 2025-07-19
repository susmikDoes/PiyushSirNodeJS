/*
How does authentication works?
    2 types statefull and stateless - 
Statefull :
    Can be understood by the example of a valet keeping car keys again a token number which is then shared witht the car owner
 so like the car owner gives the valet the car the client gives the username/password to the server.
in return server will give a unique id/session id back to the client and keep a record of this itself.
now whenever the client makes a server request it also sends this unqiue/session id. the server cross checks the 
validity of this unique id from its own list and then responds accordingly.

this u_id can be transferred as cookie, respose or headers.

we use middleware to check this id and if valid the middleware forwards to the next router or reject it from that point itself.
*/

const express = require("express");
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/encryption_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

const staticRouter = require("./routes/staticRouter");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "secretkey123",
    resave: false,
    saveUninitialized: false
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", staticRouter);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
