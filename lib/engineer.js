const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, name, role, email, github) {
    super(name, role, id, email);
    this.github = github;
  }
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
