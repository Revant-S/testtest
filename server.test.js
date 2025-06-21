const request = require("supertest");
const app = require("../repo/server"); // expects candidate app to be cloned into /repo

describe("Health Check", () => {
  test("GET /health → 200 + {status: ok}", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
EOF \
&& npx --yes json -I -f package.json -e 'this.scripts={test:"jest --runInBand"}'

