const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001; // Use the PORT environment variable for deployment

// Serve the db.json file
app.use("/data", express.static(path.join(__dirname, "db.json")));

// JSON Server
const jsonServerRouter = jsonServer.router("db.json");
const jsonServerMiddlewares = jsonServer.defaults();

// Use JSON Server as middleware
app.use("/api", jsonServerMiddlewares, jsonServerRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
