const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/youtube-app-1")
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log("Error connecting to MongoDB: ", err));


// Middleware
app.use(express.json()); // optional for handling JSON bodies too



// Root route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the MongoDB-powered Express API" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
