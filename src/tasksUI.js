import Star from "./images/notImportant.png"
import StarFull from "./images/isImportant.png"
import DeleteImg from "./images/delete.png"
import checkmarkImg from "./images/checkmark.png"
import { Task } from "./Task"
import { allTasks } from "./index"
import removeArrayItem from "remove-item-from-array"

export function taskAddingHelper() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.addEventListener("click", showTaskForm)

  const addBtn = document.querySelector(".add-task")
  addBtn.addEventListener("click", createNewTask)

  const cancelBtn = document.querySelector(".cancel-task")
  cancelBtn.addEventListener("click", hideTaskForm)
}
//Adds to HTML
export function addNewTask(taskName, taskDetails, taskDate, taskID) {
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
  isImportant.src = Star
  deleteBtn.className = "delete-task-button"
  deleteBtn.src = DeleteImg
  deleteBtn.addEventListener("click", deleteTask)

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
  const inputName = document.querySelector("#inputTitle").value
  const inputDetails = document.querySelector("#inputDetail").value
  const inputDate = document.querySelector("#inputDate").value
  const newTask = new Task(inputName, inputDetails, inputDate, taskID)
  allTasks.push(newTask)
  addNewTask(newTask.name, newTask.details, newTask.dueDate, newTask.id)
  taskID++
  hideTaskForm()
  console.log(allTasks)
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

function deleteTask(e) {
  let taskToDelete = e.target.parentNode
  let id = taskToDelete.dataset.id
  let selectedTask = findSelectedTask(id)
  let index = allTasks.indexOf(selectedTask)
  allTasks.splice(index, 1)
  taskToDelete.remove()
  console.log(index)
  console.log(allTasks)
  taskID--
}
function findSelectedTask(id) {
  let selectedTask = allTasks.find((task) => task.id == id)
  if (selectedTask) return selectedTask
}
