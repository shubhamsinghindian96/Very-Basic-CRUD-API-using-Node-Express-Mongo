const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 200,
  },
  age: {
    required: true,
    type: Number,
    min: 0,
    max: 150,
    isInt: true,
  },
  city: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 100,
  },
  state: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 100,
  },
  mobileNo: {
    required: true,
    type: String,
    minlength: 10,
    maxlength: 15,
  },
  emailAddress: {
    required: true,
    type: String,
    maxlength: 200,
    isEmail: true,
  },
});

module.exports = mongoose.model("user_records", dataSchema);
