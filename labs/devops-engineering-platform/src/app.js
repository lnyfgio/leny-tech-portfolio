
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    service: "DevOps Engineering Platform",
    message: "Welcome to the DevOps demonstration API",
    version: "1.0.0",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "devops-engineering-platform"
  });
});

app.get("/ready", (req, res) => {
  res.status(200).json({
    status: "ready"
  });
});

module.exports = app;
