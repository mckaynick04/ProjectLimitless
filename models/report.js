const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: String,
  reason: String,
  rUsername: String,
  rID: String,
  time: String
});

module.exports = mongoose.model("Report", reportSchema);
