const mongoose = require('mongoose');


const teachersSchema = mongoose.Schema({
    name: String,
    rgt_number: String,
    profilepic: {
        type: String,
        default: "default1.png"
    },
})

module.exports = mongoose.model("teachers", teachersSchema);