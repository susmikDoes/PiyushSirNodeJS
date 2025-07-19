const mongoose = require('mongoose');

// Define Mongoose Schema
const userSchema = new mongoose.Schema({
    firtName: { type: String, required: true },  // typo kept same as original
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String },
    gender: { type: String }
}, { timestamps: true });

//exporting the module
module.exports = mongoose.model('User',userSchema);