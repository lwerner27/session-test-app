const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    findUserByUsername: (req, res) => {
        User.findOne({ username: req.body.username })
            .then((user) => {
                if (user) {
                    const isMatch = bcrypt.compareSync(
                        req.body.password,
                        user.password
                    );

                    if (isMatch) {
                        return res.status(200).json({
                            msg: "You have successfully logged in.",
                        });
                    } else {
                        return res.status(401).json({
                            msg: "Username or Password was incorrect.",
                        });
                    }
                } else {
                    return res.status(400).json({
                        msg: "No user found with that username.",
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
