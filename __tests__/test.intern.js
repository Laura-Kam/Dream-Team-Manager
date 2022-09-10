const Intern = require("../lib/intern");
//testing constructor name argument

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName11 = "Laura";

    const element11 = new Intern(testName11);

    expect(element11.name).toBe(testName11);
  });
});

//testing constructor id argument

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId8 = 1;

    const element8 = new Intern("laura", testId8);

    expect(element8.id).toBe(testId8);
  });
});
//testing constructor email argument

describe("Constructor email", () => {
  test("Can set email via constructor argument", () => {
    const testEmail9 = "laura@gmail.com";

    const element9 = new Intern("laura", 1, testEmail9);

    expect(element9.email).toBe(testEmail9);
  });
});

//testing constructor school argument

describe("Constructor school", () => {
  test("Can set school via constructor argument", () => {
    const mySchool = "Harvard University";

    const element10 = new Intern("laura", 1, "laurag@gmail.com", mySchool);

    expect(element10.school).toBe(mySchool);
  });
});

//getSchool method test:

describe("Constructor method getSchool", () => {
  test("Can set name via constructor method getSchool", () => {
    const myschool = "Harvard University";

    const elementF = new Intern("Sarah", "2", "laurag@gmail.com", myschool);

    expect(elementF.getSchool()).toEqual(myschool);
  });
});
//testing getRole

describe("Constructor method getRole", () => {
  test("Can set name via constructor method getRole", () => {
    let intern = new Intern();
    expect(intern.getRole()).toBe("intern");
  });
});
