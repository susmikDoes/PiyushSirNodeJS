// models/urlModel.js
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
},{timestamps:true});

module.exports = mongoose.model('Url', urlSchema);

//we will be adding a field which will store the timestampp of when the short link is created