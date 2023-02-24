const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Reg = mongoose.model("Reg", userSchema);
module.exports = Reg;
