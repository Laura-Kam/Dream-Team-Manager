const employeeClass = require("./lib/employee");
const engineerObj = require("./lib/engineer");
const internObj = require("./lib/intern");
const managerObj = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];

//open the template html file:

const template = (managers, engineers, interns) => {
  let htmlPage = fs.readFileSync("index.html", "utf-8");
  if (htmlPage) {
    //add managers
    let htmlManager = "";
    managers.forEach((manager) => {
      htmlManager += `<div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="manager-name">${managerObj.getName()}</h5>
          <h6 class="card-text" id="manager-role">${managerObj.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="manager-id">ID:</li>
          <li class="list-group-item" id="manager-email">Email:${managerObj.getEmail()}</li>
          <li class="list-group-item" id="manager-office">Office number:${managerObj.getOfficeeemail()}</li>
        </ul>
      </div>`;
    });
  }
  //create engineer:
  let htmlEngineer = "";
  engineers.array.forEach((engineer) => {
    htmlEngineer += `<div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" class="engineer-name">${engineerObj.getName()}</h5>
        <h6 class="card-text" class="engineer-role">${engineerObj.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" class="engineer-id">ID:${engineerObj.getId()}</li>
        <li class="list-group-item" class="engineer-email">Email:${engineerObj.getEmail()}</li>
        <li class="list-group-item" class="engineer-github">Github: ${engineerObj.getgitHub()}</li>
      </ul>
    </div>`;
  });
};

letHtmlIntern = "";
interns.forEach((intern) => {
  htmlEngineer += `<div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${internObj.getName()}</h5>
        <h6 class="card-text">${internObj.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${internObj.getId()}</li>
        <li class="list-group-item">Email: ${internObj.getEmail()}</li>
        <li class="list-group-item">School: ${internObj.getSchool()}</li>
      </ul>
    </div>`;
});

htmlSection = htmlSection.replace("<!--manager-->");
htmlSection = htmlSection.replace("<!--engineers-->");
htmlSection = htmlSection.replace("<!--intern-->");

//function that creates manager section

//return markdown syntax.

//create in dist folder - html.

//write to file. etc..

fs.writeFileSync("./dist/myteam.html", html, "utf-8");

console.log("team built on page");
