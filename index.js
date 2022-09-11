//  Include packages needed for this application
const employeeClass = require("./lib/employee");
const engineerObj = require("./lib/engineer");
const internObj = require("./lib/intern");
const managerObj = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];

const template = require("./src/template");

//initialise function in node:

function init() {
  //start with create manager first.
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

  //create new employee function:

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

      //if user  or employee choice is engineer, then call engineer, etc)

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

  //create engineer function

  function newEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is the engineer ID?",
          name: "id",
        },

        {
          type: "input",
          message: "What is the engineer email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the engineer github?",
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
          message: "What is the intern name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is the intern ID?",
          name: "id",
        },

        {
          type: "input",
          message: "What is the intern email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the intern school?",
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
