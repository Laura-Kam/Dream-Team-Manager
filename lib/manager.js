const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officeNumber = officenumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
