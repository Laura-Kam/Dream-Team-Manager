const Employee = require("../lib/engineer");

describe("Engineer", () => {
  test("should return an object containing a 'github' property", () => {
    const obj = new Employee();

    expect("github" in obj).toEqual(true);
  });
});
