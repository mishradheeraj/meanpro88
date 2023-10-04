const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String  
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    
});
 


const users = new mongoose.model("clientdata",userSchema);
module.exports = users;