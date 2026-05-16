const express = require("express");
const path = require("path");
const connectDB = require("./config/connect");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

    
connectDB(link);

app.use("/", urlRoutes);

app.listen(3000,'0.0.0.0', () =>
  console.log("Server running at http://localhost:3000")
);
