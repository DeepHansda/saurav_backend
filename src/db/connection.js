const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const uri = process.env.MONGO_URI
// "mongodb://localhost:27017/saurav_database"
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
module.exports = mongoose.connect(uri, options).then(()=>{
    console.log("Database Connected!")
}).catch(err=>{
    console.log(err)
})

