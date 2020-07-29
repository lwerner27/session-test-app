const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
    },
    { runSettersOnQuery: true }
);

userSchema.pre("save", function (next) {
    this.email = this.email.toLowerCase();
    next();
});

var User = mongoose.model("User", userSchema);

module.exports = User;
