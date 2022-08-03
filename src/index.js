import "./style.css"
import { loadUI, createEventListener } from "./UI"
import { projectAddingHelper } from "./projectsUI"
import { taskAddingHelper } from "./tasksUI"
import { Task } from "./Task"
export const allTasks = new Array()

loadUI()
createEventListener()

projectAddingHelper()
taskAddingHelper()
