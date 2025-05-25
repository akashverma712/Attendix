const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/endgame");

const UserSchema = mongoose.Schema({
    name: String,
    registration_number: Number,
    age: Number,
    semester: String,
    branch: String,
    email: String,
    unique_id: String,
    profilepic: {
        type: String,
        default: "default.png"
    }
})

module.exports = mongoose.model("students", UserSchema);