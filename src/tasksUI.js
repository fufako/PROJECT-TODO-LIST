import Star from "./images/notImportant.png"
import StarFull from "./images/isImportant.png"
import DeleteImg from "./images/delete.png"
import checkmarkImg from "./images/checkmark.png"
import { Task } from "./Task"
import { allTasks } from "./index"
import removeArrayItem from "remove-item-from-array"
import { displayImportant } from "./UI"

export function taskAddingHelper() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.addEventListener("click", showTaskForm)

  const addBtn = document.querySelector(".add-task")
  addBtn.addEventListener("click", createNewTask)

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

  if (checkImportant === true) {
    isImportant.src = StarFull
    isImportant.className = "important"
  } else {
    isImportant.src = Star
    isImportant.className = "not-important"
  }
  if (checkDone === false) {
    checkbox.style.backgroundImage = ``
  } else {
    checkbox.style.backgroundImage = `url(${checkmarkImg})`
  }

  isImportant.addEventListener("click", importantHandler)
  deleteBtn.className = "delete-task-button"
  deleteBtn.src = DeleteImg
  deleteBtn.addEventListener("click", deleteTask)
  checkbox.dataset.checked = "false"
  checkbox.addEventListener("click", markTask)

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
//Adds Task object to allTasks array
let taskID = 0
function createNewTask() {
  const homeTitles = ["All Tasks", "Today", "Next 7 Days", "Important"]
  const title = document.querySelector(".title").innerHTML
  const inputName = document.querySelector("#inputTitle").value
  const inputDetails = document.querySelector("#inputDetail").value
  const inputDate = document.querySelector("#inputDate").value
  let newTask = {}

  if (homeTitles.includes(title) == false) {
    newTask = new Task(inputName, inputDetails, inputDate, taskID, title)
  } else {
    newTask = new Task(inputName, inputDetails, inputDate, taskID)
  }
  if (title === "Important") {
    newTask.isImportant = true
    addNewTask(
      newTask.name,
      newTask.details,
      newTask.dueDate,
      newTask.id,
      null,
      true
    )
  } else {
    addNewTask(newTask.name, newTask.details, newTask.dueDate, newTask.id)
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
  const taskForm = document.querySelector(".inputField")
  const userInputs = document.querySelectorAll(".taskInputs")
  taskForm.style.display = "none"
  userInputs.forEach((input) => {
    input.value = ""
  })
}

function deleteTask(e) {
  let taskToDelete = e.target.parentNode
  let id = taskToDelete.dataset.id
  let selectedTask = findSelectedTask(id)
  let index = allTasks.indexOf(selectedTask)
  allTasks.splice(index, 1)
  localStorage.setItem("allTasks", JSON.stringify(allTasks))
  taskToDelete.remove()
  taskID--
}
function findSelectedTask(id) {
  let selectedTask = allTasks.find((task) => task.id == id)
  if (selectedTask) return selectedTask
}
function importantHandler(e) {
  const isImportantIcon = e.target
  const title = document.querySelector(".title")
  let taskToImportant = e.target.parentNode
  let id = taskToImportant.dataset.id
  let selectedTask = findSelectedTask(id)
  let index = allTasks.indexOf(selectedTask)
  if (isImportantIcon.className === "not-important") {
    isImportantIcon.src = StarFull
    isImportantIcon.className = "important"
    allTasks[index].isImportant = true
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  } else {
    isImportantIcon.src = Star
    isImportantIcon.className = "not-important"
    allTasks[index].isImportant = false
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  }

  if (title.innerHTML.match("Important")) {
    displayImportant()
  }
}
function markTask(e) {
  const checkbox = e.target
  let taskToMark = e.target.parentNode
  let id = taskToMark.dataset.id
  let selectedTask = findSelectedTask(id)
  let index = allTasks.indexOf(selectedTask)
  if (checkbox.dataset.checked === "false") {
    checkbox.style.backgroundImage = `url(${checkmarkImg})`
    checkbox.dataset.checked = "true"
    allTasks[index].isDone = true
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  } else {
    checkbox.style.backgroundImage = ""
    console.log("hehre")
    checkbox.dataset.checked = "false"
    allTasks[index].isDone = false
    localStorage.setItem("allTasks", JSON.stringify(allTasks))
  }

  console.log(allTasks)
}
