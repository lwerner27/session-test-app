const router = require("express").Router();
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSalt(10);

// Route for handling user registration.
router.post("/register", (req, res) => {
    let { firstName, lastName, username, password, location } = req.body;

    let userData = {
        firstName,
        lastName,
        username,
        password: bcrypt.hashSync(password, salt),
        location,
    };

    let newUser = new User(userData);
    newUser
        .save()
        .then((user) => {
            return res.status(201).json("signup successful");
        })
        .catch((error) => {
            if (error.code === 11000) {
                return res.status(400).json({
                    msg:
                        "There is already an account associated with this email.",
                });
            } else {
                return res.status(400).json({
                    msg:
                        "There was a problem with your registration please try again later.",
                });
            }
        });
});

module.exports = router;
