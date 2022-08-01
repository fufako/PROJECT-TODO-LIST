const body = document.body
export function loadUI() {
  body.innerHTML = `<div class="header"><h1>ToDo</h1></div>
    <div class="container">
      <div class="sidebar">
        <h3>Home</h3>
        <div class="tasks-filter">
          <p id="all-tasks" >All Tasks</p>
          <p id="today">Today</p>
          <p id="next-7-days">Next 7 Days</p>
          <p id="important">Important</p>
        </div>
        
        <h3>Projects</h3>
        <p class="add-project-title">Add Project</p>
        <div class="projects-container">
        <div class="project-form">
        <input type="text" id="project-input" placeholder="Enter Project Name" maxlength="24"/>
        <button id="add-project">Add</button>
        <button id="cancel">Cancel</button>
        </div>
        </div>
      </div>
      <div class="tasks-container">
      <div class="title"> All tasks</div>
      <div class="add-task-container"><button id="add-new-task"> + </button> </div>
      </div>
    </div>`
}

export function setTitle() {
  const title = document.querySelector(".title")
  const filterButtons = document.querySelectorAll("div.tasks-filter > p")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      title.innerHTML = button.innerHTML
    })
  })
}
export function projectAddingHelper() {
  const addProjectBtn = document.querySelector(".add-project-title")
  addProjectBtn.addEventListener("click", showProjectForm)

  const addBtn = document.querySelector("#add-project")
  addBtn.addEventListener("click", addProject)

  const cancelBtn = document.querySelector("#cancel")
  cancelBtn.addEventListener("click", hideProjectForm)
}

export function showProjectForm() {
  const projectForm = document.querySelector(".project-form")
  projectForm.style.display = "inherit"
  document.querySelector("#project-input").focus()
}

export function hideProjectForm() {
  const projectForm = document.querySelector(".project-form")
  projectForm.style.display = "none"
}
export function addProject() {
  const projectsContainer = document.querySelector(".projects-container")
  const projectForm = document.querySelector(".project-form")
  const newProject = document.createElement("div")
  newProject.className = "project-title"

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.className = "delete-project-button"
  deleteBtn.addEventListener("click", deleteProject)

  const projectName = document.querySelector("#project-input")

  newProject.textContent = projectName.value
  newProject.appendChild(deleteBtn)
  projectsContainer.appendChild(newProject)
  projectName.value = ""
  hideProjectForm()
}
function deleteProject() {
  this.parentElement.remove()
}
