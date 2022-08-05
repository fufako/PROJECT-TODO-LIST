import { allProjects, allTasks } from "."
import { displayAllTasks, setTitle, displayProjectTasks } from "./UI"
export function projectAddingHelper() {
  const addProjectBtn = document.querySelector(".add-project-title")
  addProjectBtn.addEventListener("click", showProjectForm)

  const addBtn = document.querySelector("#add-project")
  addBtn.addEventListener("click", createProject)

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
export function addProject(projectName) {
  const projectsContainer = document.querySelector(".projects-container")
  const projectForm = document.querySelector(".project-form")
  const newProject = document.createElement("div")
  newProject.className = "project-container"

  const projectTitle = document.createElement("p")

  const deleteBtn = document.createElement("button")
  deleteBtn.innerHTML = "Delete"
  deleteBtn.className = "delete-project-button"
  deleteBtn.addEventListener("click", deleteProject)

  projectTitle.textContent = projectName

  newProject.appendChild(projectTitle)
  newProject.appendChild(deleteBtn)
  projectsContainer.appendChild(newProject)

  //Add event listener to new project so that title changes when user clicks on it
  const title = document.querySelector(".title")
  projectTitle.addEventListener("click", function () {
    title.innerHTML = projectTitle.innerText
    displayProjectTasks(title.innerHTML)
  })
  const projectTitleContent = projectTitle.innerHTML

  hideProjectForm()
}
function createProject() {
  const projectName = document.querySelector("#project-input").value
  addProject(projectName)
  localStorage.setItem("projectName", projectName)
  allProjects.push(projectName)
  localStorage.setItem("allProjects", JSON.stringify(allProjects))
}
export function displayProjects() {
  console.log(allProjects)
  clearProjects()
  allProjects.forEach((project) => {
    addProject(project)
  })
}

function deleteProject() {
  this.parentElement.remove()
  const projectTitle = this.parentElement.firstChild.innerHTML
  const index = allProjects.indexOf(projectTitle)
  allProjects.splice(index, 1)
  for (let i = allTasks.length - 1; i >= 0; --i) {
    if (allTasks[i].projectName == projectTitle) {
      allTasks.splice(i, 1)
    }
  }
  localStorage.setItem("allTasks", JSON.stringify(allTasks))
  localStorage.setItem("allProjects", JSON.stringify(allProjects))

  //Change title after deleting project
  const title = document.querySelector(".title")
  title.innerHTML = "All Tasks"
  displayAllTasks()
}

function clearProjects() {
  console.log("Clear")
  const projectsContainer = document.querySelector(".projects-container")
  projectsContainer.innerHTML = ""
}
