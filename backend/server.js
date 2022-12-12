const express = require("express");
const defaultManager = require("./data/defaultData");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/defaultData", (req, res) => {
  res.json(defaultManager);
});

app.listen(PORT, console.log(`server open at port ${PORT}`));
