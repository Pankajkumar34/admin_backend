
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userModel = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:'user'
    }
});
module.exports = mongoose.model("user", userModel);
