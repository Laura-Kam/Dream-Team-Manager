const Engineer = require("../lib/engineer");
//testing constructor name argument

describe("Constructor name", () => {
  test("Can set name via constructor argument", () => {
    const testName4 = "Laura";

    const element4 = new Engineer(testName4);

    expect(element4.name).toBe(testName4);
  });
});

//testing constructor id argument

describe("Constructor id", () => {
  test("Can set id via constructor argument", () => {
    const testId5 = 1;

    const element4 = new Engineer("laura", testId5);

    expect(element4.id).toBe(testId5);
  });
});
//testing constructor email argument

describe("Constructor email", () => {
  test("Can set email via constructor argument", () => {
    const testEmail6 = "laura@gmail.com";

    const element6 = new Engineer("laura", 1, testEmail6);

    expect(element6.email).toBe(testEmail6);
  });
});

describe("Constructor method getEmail", () => {
  test("Can set name via constructor method getEmail", () => {
    const myGitHub = "Laura-Kam";

    const elementE = new Engineer("Sarah", "2", "laurag@gmail.com", myGitHub);

    expect(elementE.github).toEqual(myGitHub);
  });
});

//testing getRole

describe("Constructor method getRole", () => {
  test("Can set name via constructor method getRole", () => {
    let engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
  });
});

//getGitHub method test:

describe("Constructor method getGitHub", () => {
  test("Can set name via constructor method getEmail", () => {
    const mygithub = "Laura-Kam";

    const elementF = new Engineer("Sarah", "2", "laurag@gmail.com", mygithub);

    expect(elementF.getGitHub()).toEqual(mygithub);
  });
});
