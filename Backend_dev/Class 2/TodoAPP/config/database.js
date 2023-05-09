const mongoose = require("mongoose");

require("dotenv").config();
 
const dbConnect= ()=>{
    mongooose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }) 

    .then(()=>console.log("DB ka connection is successful"))
    .catch((error)=>{
        console.log("Issue in DB Connection");
        console.error(error.message);
        // iska kya matlab hai?
        process.exit(1);
    });

}

module.exports=dbConnect;