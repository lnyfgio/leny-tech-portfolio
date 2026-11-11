
const request = require("supertest");
const app = require("../src/app");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("GET / should return service information", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.equal(response.body.service, "DevOps Engineering Platform");
  assert.equal(response.body.status, "running");
});

test("GET /health should return an OK status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.status, "ok");
});

test("GET /ready should return a ready status", async () => {
  const response = await request(app).get("/ready");

  assert.equal(response.status, 200);
  assert.equal(response.body.status, "ready");
});
