const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const route = require("./route/route");
const userRoute = require("./route/userRoute");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/tes", route);
app.use("/user", userRoute);
const port = 8000;
const url = process.env.DB;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log("database error", err);
  });

app.listen(port, () => {
  console.log("listening on port ", port);
});
