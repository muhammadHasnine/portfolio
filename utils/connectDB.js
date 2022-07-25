const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:"config/config.env"})
const connectDB = async()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((data)=>{
        console.log(`MONGO DB  connected at ${data.connection.host} successfully`)
      }).catch((error)=>{
        console.log(`MONGO DB connection faild for ${error}`)
      })
}
module.exports = connectDB;