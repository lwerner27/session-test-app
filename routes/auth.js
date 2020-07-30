const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Route for handling user registration.
router.post('/register', (req, res) => {
    console.log('/register route hit.');
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
                .json({ success: true, msg: 'Registration successful.' });
        })
        .catch((error) => {
            if (error.code === 11000) {
                return res.status(400).json({
                    success: false,
                    msg:
                        'There is already an account associated with this username.',
                });
            } else {
                console.log(error);
                return res.status(400).json({
                    success: false,
                    msg:
                        'There was a problem with your registration please try again later.',
                });
            }
        });
});

router.post('/proxy', (req, res) => {
    const {
        firstName,
        lastName,
        username,
        password,
        location,
        role,
    } = req.body;

    console.log(firstName, lastName, username, password, location, role);
    res.status(200).json({ msg: 'Your request was recieved.' });
});

module.exports = router;
