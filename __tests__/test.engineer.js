const Engineer = require("../lib/engineer");

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName1 = "Laura";

    const element1 = new Engineer(testName);

    expect(element1.name).toBe(testName1);
  });
});

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId = 1;

    const element = new Employee("laura-k@yahoo.co.uk", testId);

    expect(element.id).toBe(testId);
  });
});

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId = "1";

    const element = new Employee("laura-k@yahoo.co.uk", testId);

    expect(element.id).toBe(testId);
  });
});
