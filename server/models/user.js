const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const userModel = mongoose.model("register", userSchema)
module.exports = userModel;