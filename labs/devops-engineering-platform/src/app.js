
const express = require("express");
const client = require("@prometheus-io/client");

const app = express();

app.use(express.json());

// Prometheus metrics registry
const register = new client.Registry();

register.setDefaultLabels({
  service: "devops-engineering-platform"
});

// Collect Node.js runtime metrics
client.collectDefaultMetrics({ register });

// HTTP request counter
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
  registers: [register]
});

// HTTP request duration histogram
const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.3, 0.5, 1, 2, 5],
  registers: [register]
});

// Measure incoming HTTP requests
app.use((req, res, next) => {
  const start = process.hrtime();

  res.on("finish", () => {
    const duration = process.hrtime(start);
    const seconds = duration[0] + duration[1] / 1e9;

    const route = req.route?.path || req.path;

    httpRequestsTotal.inc({
      method: req.method,
      route,
      status_code: String(res.statusCode)
    });

    httpRequestDuration.observe(
      {
        method: req.method,
        route,
        status_code: String(res.statusCode)
      },
      seconds
    );
  });

  next();
});

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

// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

module.exports = app;
