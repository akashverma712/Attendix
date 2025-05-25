const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/endgame");

const attendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unique_id: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
