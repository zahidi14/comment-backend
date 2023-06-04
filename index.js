const express = require("express");
const bodypars = require("body-parser");
const fs = require("fs");
const app = express();

const PORT = 5000;
app.use(bodypars.json());
let comment = [];
let coki = [];
fs.readFile("db.json", "utf8", (err, data) => {
  if (err) {
    console.log("error get json");
  } else {
    comment = JSON.parse(data);
    coki = data;
  }
});

console.log({ ceck: comment });
console.log({ data: coki });
app.get("/comments", (req, res) => {
  res.json(comment);
});
app.listen(PORT, () => {
  console.log("conneccted");
});
