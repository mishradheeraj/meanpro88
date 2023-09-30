const express = require('express');
const  user = require("../schema/schemaone");
const router = express.Router();

/*get all data api */
router.get("",async(req,res)=>{
    const allusers = await users.find();
    res.json(allusers);
    console.log(allusers);
});






module.exports = router;