import { displayAllTasks, setTitle, displayProjectTasks } from "./UI"
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
    displayProjectTasks(title.innerHTML)
  })

  hideProjectForm()
}
function deleteProject() {
  this.parentElement.remove()

  //Change title after deleting project
  const title = document.querySelector(".title")
  title.innerHTML = "All Tasks"
  displayAllTasks()
}
