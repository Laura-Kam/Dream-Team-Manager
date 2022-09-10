const Engineer = require("../lib/engineer");

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName4 = "Laura";

    const element4 = new Engineer(testName4);

    expect(element4.name).toBe(testName4);
  });
});

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId5 = 1;

    const element4 = new Engineer("laura", testId5);

    expect(element4.id).toBe(testId5);
  });
});

describe("Constructor email", () => {
  test("Can set email via constructor argument", () => {
    const testEmail6 = "laura@gmail.com";

    const element6 = new Engineer("laura", 1, testEmail6);

    expect(element6.email).toBe(testEmail6);
  });
});
