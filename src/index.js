import "./style.css"
import {
  loadUI,
  setTitle,
  addProject,
  showProjectForm,
  hideProjectForm,
} from "./UI"

loadUI()
setTitle()

const addProjectBtn = document.querySelector(".add-project-title")
addProjectBtn.addEventListener("click", showProjectForm)

const addBtn = document.querySelector("#add-project")
addBtn.addEventListener("click", addProject)

const cancelBtn = document.querySelector("#cancel")
cancelBtn.addEventListener("click", hideProjectForm)
