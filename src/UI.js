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
      <div class="inputField">
      <label>Title:</label>
      <input type="text" class="taskInputs" id="inputTitle" placeholder="What to do?" />
      <label>Details(optional):</label>
      <textarea
        type="text"
        id="inputDetail"
        class="taskInputs"
        placeholder="How about nothing?"
        wrap="hard"
      ></textarea>
      <label>Date:</label>
      <input type="date" class="taskInputs" id="inputDate" />
      <div class="formButtons">
        <input type="submit" class="add-task" value="Add" />
        <input type="button" class="cancel-task" value="Cancel" />
      </div>
    </div>
    <div class="new-task"><div class="checkbox"></div><div class="new-task-info"><div class="new-task-title">11</div><div class="new-task-details">21</div></div><div>0001-03-13</div><span></span><button class="delete-project-button "></button></div>
      </div>
      
    </div>`
}

export function setTitle() {
  const title = document.querySelector(".title")
  const filterButtons = document.querySelectorAll("div.tasks-filter > p")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(filterButtons)
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
  const userInput = document.querySelector("#project-input")
  userInput.value = ""
  projectForm.style.display = "none"
}
export function addProject() {
  const projectsContainer = document.querySelector(".projects-container")
  const projectForm = document.querySelector(".project-form")
  const newProject = document.createElement("div")
  newProject.className = "project-container"

  const projectTitle = document.createElement("p")

  const deleteBtn = document.createElement("button")
  deleteBtn.innerHTML = "Delete"
  deleteBtn.className = "delete-project-button"
  deleteBtn.addEventListener("click", deleteProject)

  const projectName = document.querySelector("#project-input")

  projectTitle.textContent = projectName.value
  newProject.appendChild(projectTitle)
  newProject.appendChild(deleteBtn)
  projectsContainer.appendChild(newProject)

  //Add event listener to new project so that title changes when user clicks on it
  const title = document.querySelector(".title")
  projectTitle.addEventListener("click", function () {
    title.innerHTML = projectTitle.innerText
  })

  hideProjectForm()
}
function deleteProject() {
  this.parentElement.remove()

  //Change title after deleting project
  const title = document.querySelector(".title")
  title.innerHTML = "Today"
}
