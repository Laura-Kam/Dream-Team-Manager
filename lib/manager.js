const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, role, officenumber) {
    super(name, id, email, role);
    this.officenumber = officenumber;
  }
  getOfficeNumber() {
    return this.officenumber;
  }
}

module.exports = Manager;
