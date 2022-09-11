const generateManager = (manager) => {
  return `<div class="card" style="width: 18rem">
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
};

const generateEngineer = (engineer) => {
  return `<div class="card" style="width: 18rem">
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
};

const generateIntern = (intern) => {
  `<div class="card" style="width: 18rem">
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
};
