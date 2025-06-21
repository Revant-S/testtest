const request = require("supertest");
const app = require("../repo/server"); // Assumes app exposes the Express app instance

describe("Health Check", () => {
  test("GET /health → 200 + {status: ok}", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
