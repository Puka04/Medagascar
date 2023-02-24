const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const db_Reg = require("./model/db_reg");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/userReg")
  .then(() => {
    console.log("Database Connection Done");
  })
  .catch(() => {
    console.log("Error in establishing Database");
  });

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("signup");
});

app.get("/signin", function (req, res) {
  res.render("signin");
});

app.post("/signin", async (req, res) => {
  try {
    const check = await db_Reg.findOne({ email: req.body.email });
    if (check.password === req.body.password) {
      res.send("You have logged in successfully");
    } else {
      res.send("Password is incorrect");
    }
  } catch (error) {
    console.log(error);
    res.send("Wrong Details");
  }
});

app.get("/signup", function (req, res) {
  res.redirect("/");
});

app.post("/signup", async (req, res) => {
  const data = new db_Reg(req.body);
  console.log(data);
  await data.save();
  res.send("Saved Data");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
