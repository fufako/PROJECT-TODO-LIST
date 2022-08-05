import "./style.css"
import { loadUI, createEventListener, displayAllTasks } from "./UI"
import { projectAddingHelper, displayProjects } from "./projectsUI"
import { taskAddingHelper } from "./tasksUI"
export const allTasks = JSON.parse(localStorage.getItem("allTasks") || "[]")
export const allProjects = JSON.parse(
  localStorage.getItem("allProjects") || "[]"
)
loadUI()
displayAllTasks()
displayProjects()
createEventListener()
projectAddingHelper()
taskAddingHelper()
