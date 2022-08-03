import "./style.css"
import { loadUI, createEventListener, displayAllTasks } from "./UI"
import { projectAddingHelper } from "./projectsUI"
import { taskAddingHelper } from "./tasksUI"
export const allTasks = JSON.parse(localStorage.getItem("allTasks") || "[]")
console.log(allTasks)

loadUI()
displayAllTasks()
createEventListener()

projectAddingHelper()
taskAddingHelper()
