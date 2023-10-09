const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001; // Use the PORT environment variable for deployment
const corsOptions = {
  origin: "http://localhost:5173", // Adjust this to your Vite project's origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow credentials like cookies
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, application/json"
  );
  next();
});
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
