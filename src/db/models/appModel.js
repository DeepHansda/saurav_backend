const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  number:{
    type: Number,
    trim: true,
    required: true,
  },
  img: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: "true",
    required: true,
  },

  desc: {
    type: String,
    trim: "true",
    required: true,
  },
  addi_desc: {
    type: String,
    trim: "true",
  },
  download_link: {
    type: String,
    trim: "true",
    required: true,
  },
  navigation: {
    type: String,
    trim: "true",
  },

  features:[{feature:{type:String,trim: "true"}}],
  referral_code: {
    type: String,
    trim: "true",
  },
  signup_bonus: {
    type: Number,
    trim: "true",
  },
  refer_bonus: {
    type: Number,
    trim: "true",
  },
  withdrawable_bonus: {
    type: Number,
    trim: "true",
  },
},{timestamps:{createdAt:true,updatedAt:true}});

module.exports = mongoose.model("App", appSchema);
