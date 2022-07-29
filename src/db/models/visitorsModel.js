const mongoose = require("mongoose");

const visitorsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    trim: true,
  }
},{timestamps:{createdAt:true,updatedAt:true}});

module.exports = mongoose.model("Visitors", visitorsSchema);
