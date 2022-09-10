const Employee = require("../lib/employee");

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName = "Laura";

    const element = new Employee(testName);

    expect(element.name).toBe(testName);
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
