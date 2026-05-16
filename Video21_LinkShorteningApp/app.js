const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/connect');
const urlRoutes = require('./routes/urlRoutes');

app.set("view engine", "ejs")
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


connectDB(process.env.MONGO_URI);
app.use('/', urlRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
