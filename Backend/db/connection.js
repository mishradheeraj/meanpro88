const mongoose = require("mongoose");

const DB = "mongodb+srv://dheerj123:dheerj123@cluster0.zksbibq.mongodb.net/personalproject";
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));



