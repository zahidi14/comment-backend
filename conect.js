require("dotenv").config();
const connect = () => {
  const mongo = process.env.URI;

  const mongose = require("mongoose");

  mongose
    .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo connected"))
    .catch((error) => console.log("error"));
};
module.exports = connect;
