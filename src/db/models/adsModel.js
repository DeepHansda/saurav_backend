const mongoose = require('mongoose')

const adsSchema = new mongoose.Schema({
    img:{
        type:String,
        trim:true,
        required:true
    },

    ads_link:{
        type:String,
        trim:true,
        required:true
    },
},{timestamps:{createdAt:true,updatedAt:true}})

module.exports = mongoose.model('Ads',adsSchema)