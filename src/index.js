import "./style.css"
import { loadUI, createEventListener } from "./UI"
import { projectAddingHelper } from "./projectsUI"
import { taskAddingHelper } from "./tasksUI"
import { Task } from "./Task"
export const allTasks = []

loadUI()
createEventListener()

projectAddingHelper()
taskAddingHelper()
