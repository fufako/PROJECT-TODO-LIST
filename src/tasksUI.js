export function taskAddingHelper() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.addEventListener("click", showTaskForm)

  const addBtn = document.querySelector(".add-task")
  addBtn.addEventListener("click", addNewTask)

  const cancelBtn = document.querySelector(".cancel-task")
  cancelBtn.addEventListener("click", hideTaskForm)
}

function addNewTask() {
  const taskContainer = document.querySelector(".tasks-container")

  //Create new task DOM elements

  const newTask = document.createElement("div")
  const checkbox = document.createElement("div")
  const newTaskInfo = document.createElement("div")
  const newTaskTitle = document.createElement("div")
  const newTaskDetails = document.createElement("div")
  const date = document.createElement("div")
  const isImportant = document.createElement("checkbox")
  const deleteBtn = document.createElement("button")

  newTask.className = "new-task"
  newTaskInfo.className = "new-task-info"
  newTaskTitle.className = "new-task-title"
  newTaskDetails.className = "new-task-details"
  checkbox.className = "checkbox"
  deleteBtn.className = "delete-task-button"
  deleteBtn.innerHTML = "X"

  newTaskTitle.innerHTML = document.querySelector("#inputTitle").value
  newTaskDetails.innerHTML = document.querySelector("#inputDetail").value
  newTaskInfo.appendChild(newTaskTitle)
  newTaskInfo.appendChild(newTaskDetails)

  date.innerHTML = document.querySelector("#inputDate").value

  newTask.appendChild(checkbox)
  newTask.appendChild(newTaskInfo)
  newTask.appendChild(date)
  newTask.appendChild(isImportant)
  newTask.appendChild(deleteBtn)

  taskContainer.appendChild(newTask)
  hideTaskForm()
}
function showTaskForm() {
  const taskForm = document.querySelector(".inputField")
  taskForm.style.display = "flex"
}
function hideTaskForm() {
  const taskForm = document.querySelector(".inputField")
  const userInputs = document.querySelectorAll(".taskInputs")
  taskForm.style.display = "none"
  userInputs.forEach((input) => {
    input.value = ""
  })
}
