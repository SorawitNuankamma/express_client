const express = require("express");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "./config.env" });
//console.log(process.env);

app.get("/", function (req, res) {
  if (process.env.NODE_ENV === "development") {
    res.send("hello world dev");
  } else {
    res.send("hello world");
  }
});

app.listen(5000, function () {
  console.log("Server is running at port 5000");
});

console.log("start server");
