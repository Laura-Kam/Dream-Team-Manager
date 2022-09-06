const Employee = require("../lib/employee");

describe("Employee", () => {
  test("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    const obj = new Employee();

    expect("name" in obj).toEqual(true);
  });
});

describe("Employee", () => {
  test("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    const obj = new Employee();

    expect("id" in obj).toEqual(true);
  });
});

describe("Employee", () => {
  test("should return an object containing a 'name' property when called with the 'new' keyword", () => {
    const obj = new Employee();

    expect("email" in obj).toEqual(true);
  });
});

describe("getName", () => {
  test("should return the 'Employee's object's 'name' value", () => {
    const name = "name";
    const obj = new Employee(name);

    const result = obj.getName();

    expect(result).toEqual(name);
  });
});

describe("getId", () => {
  test("should return the 'Employee's object's 'id' value", () => {
    const id = "id";
    const obj = new Employee(id);

    const result = obj.getId();

    expect(result).toEqual(id);
  });
});

describe("getEmail", () => {
  test("should return the 'Employee's object's 'name' value", () => {
    const email = "email";
    const obj = new Employee(email);

    const result = obj.getId();

    expect(result).toEqual(email);
  });
});
