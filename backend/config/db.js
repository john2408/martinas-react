require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_DB_URI, {
             useNewUrlParser: true , 
             useUnifiedTopology : true
          });

        console.log("Mongo DB connection SUCCESS");
        
    } catch (error) {

        console.error(`Mongo DB connection FAIL ${error}`);
        process.exit(1)

    }
}

module.exports = connectDB;