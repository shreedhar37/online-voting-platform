/* eslint-disable no-undef */
// sample test case

describe("Sample test cases", () => {
  test("Sample test case 1", () => {
    expect(true).toBe(true);
  });
});

// __tests__/todo.js
/* eslint-disable no-undef */
const db = require("../models");

describe("Admin Test Suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("Should add admin", async () => {
    const adminCounts = await db.Admin.count();
    await db.Admin.addAdmin({
      firstName: "Test firstName",
      lastName: "Test lastName",
      email: "Test email",
      password: "Test-pa$$w0rd",
    });
    const newAdminCount = await db.Admin.count();
    expect(newAdminCount).toBe(adminCounts + 1);
  });
});
