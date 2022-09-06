const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, email, school, name, role) {
    super(name, role, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "intern";
  }
}

module.exports = Intern;
