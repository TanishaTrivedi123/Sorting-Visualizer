const mongoose = require("mongoose");

const MONGOURL = process.env.MONGOURL;

const db = async() => {
    try{
        const response = await mongoose.connect(MONGOURL);
        
        if(response){
            console.log("Database is successfully connected");
        }
    }
    catch(error){
        console.log("Database is not successfully connected");
    }
}

module.exports = db;