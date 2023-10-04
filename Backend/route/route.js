const express = require('express');
const  user = require("../schema/schemaone");
const router = express.Router();

//==============get all data api=============== //
router.get("/fetchdata", async(req,res)=>{
    const allusers = await user.find();
    res.json(allusers);
    console.log(allusers);
});


// ==============Define a route for handling POST requests====================//

router.post("/sent",async(req,res)=>{
  const {username,email,pass,phone,repass,address} = req.body;
  const adduser = new users({
      username,email,pass,phone,repass,address
  });
  await adduser.save();
  res.status(201).json(adduser);
  console.log(adduser);
});



module.exports = router;




