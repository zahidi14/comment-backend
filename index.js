const express = require("express");
const app = express();
const port = 5000;
const jsonServer = require("json-server");
const jsonServerRouter = jsonServer.router("db.json");
const jsonServerMiddlewares = jsonServer.defaults();

app.use("/", jsonServerRouter, jsonServerMiddlewares);

app.use(express.json());

app.get("/comments", (req, res) => {
  const comment = jsonServerRouter.db.get().value();
  res.json(comment);
});

app.listen(port, () => {
  console.log("running on port ", port);
});
