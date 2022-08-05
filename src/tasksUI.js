import Star from "./images/notImportant.png"
import StarFull from "./images/isImportant.png"
import DeleteImg from "./images/delete.png"
import checkmarkImg from "./images/checkmark.png"
import { Task } from "./Task"
import { allTasks } from "./index"
import { displayImportant } from "./UI"

export function taskAddingHelper() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.addEventListener("click", showTaskForm)

  const addBtn = document.querySelector(".add-task")
  addBtn.addEventListener("click", validateTask)

  const cancelBtn = document.querySelector(".cancel-task")
  cancelBtn.addEventListener("click", hideTaskForm)
}
//Adds to HTML
export function addNewTask(
  taskName,
  taskDetails,
  taskDate,
  taskID,
  projectName,
  checkDone,
  checkImportant
) {
  const taskContainer = document.querySelector(".tasks-container")

  //Create new task DOM elements

  const newTask = document.createElement("div")
  const checkbox = document.createElement("div")
  const newTaskInfo = document.createElement("div")
  const newTaskTitle = document.createElement("div")
  const newTaskDetails = document.createElement("div")
  const date = document.createElement("div")
  const isImportant = document.createElement("img")
  const deleteBtn = document.createElement("img")

  //Add class names to new elements

  newTask.className = "new-task"
  newTask.dataset.id = taskID
  checkbox.className = "checkbox"
  newTaskInfo.className = "new-task-info"
  newTaskTitle.className = "new-task-title"
  newTaskDetails.className = "new-task-details"
  date.className = "new-task-date"

  //Check if task is important or done for display

  if (checkImportant === true) {
    isImportant.src = StarFull
    isImportant.className = "important"
  } else {
    isImportant.src = Star
    isImportant.className = "not-important"
  }
  if (checkDone === true) {
    checkbox.style.backgroundImage = `url(${checkmarkImg})`
    newTaskInfo.style.textDecoration = "line-through"
  }

  //Add event listeners to onclick elements of a task

  isImportant.addEventListener("click", importantHandler)
  deleteBtn.className = "delete-task-button"
  deleteBtn.src = DeleteImg
  deleteBtn.addEventListener("click", deleteTask)
  checkbox.dataset.checked = "false"
  checkbox.addEventListener("click", markTask)

  // Fill task with data

  newTaskTitle.innerHTML = taskName
  newTaskDetails.innerHTML = taskDetails
  date.innerHTML = taskDate

  //Append new elements
  newTaskInfo.appendChild(newTaskTitle)
  newTaskInfo.appendChild(newTaskDetails)

  newTask.appendChild(checkbox)
  newTask.appendChild(newTaskInfo)
  newTask.appendChild(date)
  newTask.appendChild(isImportant)
  newTask.appendChild(deleteBtn)

  taskContainer.appendChild(newTask)
}
//Create and adds Task object to allTasks array
let taskID = 0
function createNewTask() {
  const title = document.querySelector(".title").innerHTML
  const inputName = document.querySelector("#inputTitle").value
  console.log(inputName)
  const inputDetails = document.querySelector("#inputDetail").value
  const inputDate = document.querySelector("#inputDate").value
  let newTask = {}

  newTask = new Task(inputName, inputDetails, inputDate, taskID, title)

  if (title === "Important") {
    newTask.isImportant = true
    addNewTask(
      newTask.name,
      newTask.details,
      newTask.dueDate,
      newTask.id,
      newTask.projectName,
      false,
      true
    )
  } else {
    addNewTask(
      newTask.name,
      newTask.details,
      newTask.dueDate,
      newTask.id,
      false,
      false
    )
  }
  localStorage.setItem("newTask", JSON.stringify(newTask))
  allTasks.push(newTask)
  localStorage.setItem("allTasks", JSON.stringify(allTasks))

  taskID++
  hideTaskForm()
}
function showTaskForm() {
  const taskForm = document.querySelector(".inputField")
  taskForm.style.display = "flex"
}
export function hideTaskForm() {
  const validationMessage = document.querySelector("#task-validation-message")
  validationMessage.style.display = "none"

  const taskForm = document.querySelector(".inputField")
  const userInputs = document.querySelectorAll(".taskInputs")
  taskForm.style.display = "none"
  userInputs.forEach((input) => {
    input.value = ""
  })
}

function deleteTask(e) {
  const taskIndex = findSelectedTaskIndex(e)
  allTasks.splice(taskIndex, 1)
  localStorage.setItem("allTasks", JSON.stringify(allTasks))
  e.target.parentNode.remove()
  taskID--
}
function findSelectedTaskIndex(e) {
  const taskToFind = e.target.parentNode
  const id = taskToFind.dataset.id
  const selectedTask = allTasks.find((task) => task.id == id)
  const index = allTasks.indexOf(selectedTask)

  return index
}
function importantHandler(e) {
  const isImportantIcon = e.target
  const title = document.querySelector(".title")
  const taskIndex = findSelectedTaskIndex(e)

  if (isImportantIcon.className === "not-important") {
    isImportantIcon.src = StarFull
    isImportantIcon.className = "important"
    allTasks[taskIndex].isImportant = true
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  } else {
    isImportantIcon.src = Star
    isImportantIcon.className = "not-important"
    allTasks[taskIndex].isImportant = false
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  }

  if (title.innerHTML.match("Important")) {
    displayImportant()
  }
}
function markTask(e) {
  const checkbox = e.target
  const checkboxParent = e.target.parentNode
  let index = findSelectedTaskIndex(e)
  if (checkbox.dataset.checked === "false") {
    checkbox.style.backgroundImage = `url(${checkmarkImg})`
    checkbox.dataset.checked = "true"
    checkboxParent.style.textDecoration = "line-through"
    allTasks[index].isDone = true
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  } else {
    checkbox.style.backgroundImage = ""
    checkbox.dataset.checked = "false"
    checkboxParent.style.textDecoration = ""
    allTasks[index].isDone = false
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  }
}
function validateTask() {
  const taskNameInput = document.querySelector("#inputTitle").value
  const validationMessage = document.querySelector("#task-validation-message")
  if (taskNameInput !== "") {
    createNewTask()
    validationMessage.style.display = "none"
  } else {
    validationMessage.style.display = "inherit"
  }
}
