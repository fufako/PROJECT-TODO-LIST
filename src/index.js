import "./style.css"
import { loadUI, setTitle } from "./UI"
import { projectAddingHelper } from "./projectsUI"
import { taskAddingHelper } from "./tasksUI"

loadUI()
setTitle()

projectAddingHelper()
taskAddingHelper()
