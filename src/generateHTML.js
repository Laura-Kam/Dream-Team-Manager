// const employeeClass = require("../lib/employee");
//  const engineerObj = require("../lib/engineer");
// const internObj = require("../lib/intern");
// const managerObj = require("../lib/manager");
//  const inquirer = require("inquirer");
//  const fs = require("fs");

// const template = (managers, engineers, interns) => {
//   for (let i = 0; i < team.length; i++) {
//     if (team === "Manager") {
//       htmlManager(team.Manager[i]);
//     }
//     if (team === "Engineer") {
//       htmlEngineer(team.Engineer[i]);
//     }
//     if (team === "Intern") {
//       letHtmlIntern(team.Intern[i]);
//     }
//   }

const TeamArray = [];

const createTeam = (team) => {
  const generateManager = (manager) => {
    return `<div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="manager-name">${manager.getName()}</h5>
          <h6 class="card-text" id="manager-role">${manager.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="manager-id">ID:</li>
          <li class="list-group-item" id="manager-email">Email:${manager.getEmail()}</li>
          <li class="list-group-item" id="manager-office">Office number:${manager.getOfficeeemail()}</li>
        </ul>
      </div>`;
  };

  const generateEngineer = (engineer) => {
    return `<div class="card" style="width: 18rem">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" class="engineer-name">${engineer.getName()}</h5>
    <h6 class="card-text" class="engineer-role">${engineer.getRole()}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" class="engineer-id">ID:${engineer.getId()}</li>
    <li class="list-group-item" class="engineer-email">Email:${engineer.getEmail()}</li>
    <li class="list-group-item" class="engineer-github">Github: ${engineer.getgitHub()}</li>
  </ul>
</div>`;
  };

  const generateIntern = (intern) => {
    `<div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-text">${intern.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${intern.getId()}</li>
        <li class="list-group-item">Email: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>`;
  };

  TeamArray.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  TeamArray.push(
    TextEncoderStream.filter(
      (employee) => employee.getRole() === "Engineer"
    ).map((engineer) => generateEngineer(engineer))
  );

  TeamArray.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );

  return TeamArray.join("");
};
