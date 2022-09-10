//  Include packages needed for this application
const employeeClass = require("./lib/employee");
const engineerObj = require("./lib/engineer");
const internObj = require("./lib/intern");
const managerObj = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];

const template = require("./src/template");

function init() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the employee name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is the employee ID?",
          name: "id",
        },

        {
          type: "input",
          message: "What is the employee email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the employee github?",
          name: "github",
        },
      ])
      .then((responseObj) => {
        const { name, id, email, github } = responseObj;
        const engineer = new engineerObj(name, id, email, github);
        team.push(engineer);
        console.log(team);
        newEmployee();
      });
  }

  function newEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeChoice",
          message: "Which type of employee would you like to add?",
          choices: ["Engineer", "Intern", "I don't want to add any employees"],
        },
      ])
      .then((responseObj) => {
        switch (responseObj.employeeChoice) {
          case "Engineer":
            newEngineer();
            break;
          case "Intern":
            newIntern();
            break;
          default:
            console.log("generate html");
        }
      });
  }

  function newEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the employee name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is the employee ID?",
          name: "id",
        },

        {
          type: "input",
          message: "What is the employee email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the employee github?",
          name: "github",
        },
      ])
      .then((responseObj) => {
        const { name, id, email, github } = responseObj;
        const engineer = new engineerObj(name, id, email, github);
        team.push(engineer);
        console.log(team);
      });
  }

  function newIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the employee name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is the employee ID?",
          name: "id",
        },

        {
          type: "input",
          message: "What is the employee email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the employee school?",
          name: "school",
        },
      ])
      .then((responseObj) => {
        const { name, id, email, school } = responseObj;
        const intern = new internObj(name, id, email, school);
        team.push(intern);
        console.log(team);
      });
  }
  createManager();
}

init();
