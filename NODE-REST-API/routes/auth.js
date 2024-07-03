const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        console.log("Request received", req.body); // Log the request body

        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        console.log("New user created", newUser); // Log the new user

        // save user and respond
        const user = await newUser.save();
        console.log("User saved to database", user); // Log the saved user
        res.status(200).json(user);
    } catch (err) {
        console.log("Error occurred", err); // Log the error
        res.status(500).json(err); // Send error response to client
    }
});


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }); // email is unique
        if (!user) {
            return res.status(404).json("User not found");
        }

        // Check password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json("Invalid password");
        }

        res.status(200).json(user); // Return user data on successful login
    } catch (err) {
        console.log(err);
        res.status(500).json(err); // Send error response to client
    }
});





module.exports = router;
