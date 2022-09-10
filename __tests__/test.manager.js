const Manager = require("../lib/manager");
//testing constructor name argument

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName11 = "Laura";

    const element11 = new Manager(testName11);

    expect(element11.name).toBe(testName11);
  });
});

//testing constructor id argument

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId8 = 1;

    const element8 = new Manager("laura", testId8);

    expect(element8.id).toBe(testId8);
  });
});
//testing constructor email argument

describe("Constructor email", () => {
  test("Can set email via constructor argument", () => {
    const testEmail9 = "laura@gmail.com";

    const element9 = new Manager("laura", 1, testEmail9);

    expect(element9.email).toBe(testEmail9);
  });
});

//testing constructor officeNumber argument

describe("Constructor office-number", () => {
  test("Can set office number via constructor argument", () => {
    const myofficeno = 1;

    const element10 = new Manager("laura", 1, "laurag@gmail.com", myofficeno);

    expect(element10.officeNumber).toBe(myofficeno);
  });
});

//getOfficeNumber method test:

describe("Constructor method getOfficeNumber", () => {
  test("Can set name via constructor method getOfficeNumber", () => {
    const myofficeNumber = 1;

    const elementF = new Manager(
      "Sarah",
      "2",
      "laurag@gmail.com",
      myofficeNumber
    );

    expect(elementF.getOfficeNumber()).toEqual(myofficeNumber);
  });
});

//testing getRole

describe("Constructor method getRole", () => {
  test("Can set name via constructor method getRole", () => {
    let manager = new Manager();
    expect(manager.getRole()).toBe("manager");
  });
});
