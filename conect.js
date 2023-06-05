require("dotenv").config();
const connect = () => {
  const mongo = "mongodb+srv://zahidi:12qwerty@merndb.l61ga.mongodb.net/";

  const mongose = require("mongoose");

  mongose
    .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo connected"))
    .catch((error) => console.log("error"));
};
module.exports = connect;
