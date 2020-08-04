const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const userController = require("../controllers/User");

// Route for handling user registration.
router.post("/register", (req, res) => {
    let { firstName, lastName, username, password, location, role } = req.body;

    let userData = {
        firstName,
        lastName,
        username,
        password: bcrypt.hashSync(password, 10),
        location,
        role,
    };

    let newUser = new User(userData);
    newUser
        .save()
        .then((user) => {
            return res
                .status(201)
                .json({ success: true, msg: "Registration successful." });
        })
        .catch((error) => {
            if (error.code === 11000) {
                return res.status(400).json({
                    success: false,
                    msg:
                        "There is already an account associated with this username.",
                });
            } else {
                console.log(error);
                return res.status(400).json({
                    success: false,
                    msg:
                        "There was a problem with your registration please try again later.",
                });
            }
        });
});

router.post("/login", (req, res) => {
    // see file: /controllers/User.js
    userController.findUserByUsername(req, res);
});

module.exports = router;
