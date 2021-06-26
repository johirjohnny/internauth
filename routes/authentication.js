const router = require("express").Router();
const User = require("../models/User");

//here I have used register function
router.post("/register", async(req, res)=>{
    try{
        const newUser =new User({
            username : req.body.username,
            email: req.body.email,
            password : req.body.password,

        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.send.json( err);
    }
})
module.export = router;  