var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  _id: Number,
  profile_pic: String,
  name: String,
  lname: String,
  dBirth: String,
  country: String,
  email: String,
  password: String
}, { versionKey: false });

module.exports = mongoose.model("User", UsersSchema);
