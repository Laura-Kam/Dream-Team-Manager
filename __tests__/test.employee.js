//requiring function- employee

const Employee = require("../lib/employee");

//testing constructor name

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName = "Laura";

    const element = new Employee(testName);

    expect(element.name).toBe(testName);
  });
});

//testing constructor id

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId = 1;

    const element1 = new Employee("laura", testId);

    expect(element1.id).toBe(testId);
  });
});

//testing constructor email

describe("Constructor email", () => {
  test("Can set email via constructor argument", () => {
    const testEmail = "laura_ek@yahoo.co.uk";

    const element2 = new Employee("laura", 1, testEmail);

    expect(element2.email).toBe(testEmail);
  });
});

//testing getName method.

describe("Constructor method getName", () => {
  test("Can set name via constructor method getName", () => {
    const myName = "Sarah";

    const elementI = new Employee(myName);

    expect(elementI.getName()).toEqual(myName);
  });
});

//testing getID method

describe("Constructor method getId", () => {
  test("Can set name via constructor method getId", () => {
    const myId = "2";

    const elementJ = new Employee("Sarah", myId);

    expect(elementJ.getId()).toEqual(myId);
  });
});

describe("Constructor method getEmail", () => {
  test("Can set name via constructor method getEmail", () => {
    const myEmail = "laurag@gmail.com";

    const elementA = new Employee("Sarah", "2", myEmail);

    expect(elementA.getEmail()).toEqual(myEmail);
  });
});

describe("Constructor method getRole", () => {
  test("Can set name via constructor method getRole", () => {
    const myRole = "engineer";

    const elementD = new Employee(getRole());

    expect(elementD).toEqual("engineer");
  });
});
