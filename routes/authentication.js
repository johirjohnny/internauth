const router = require("express").Router();
const User = require("../models/User");

//here I have used register function
router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,

        })
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//here is login workaround

router.post("/login", async (req, res) => {
    try {
        const user = user.findOne({ username: req.body.username })
        !user && res.status(400).json("wrong user information")
        const checkUser = await password.compare(req.body.password, user.password);
        !checkUser && res.status(200).json("wrong user Information");
    } catch (err) {
        res.status(500).json(err);

    }
})
module.export = router;