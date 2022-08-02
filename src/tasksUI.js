import Star from "./images/notImportant.png"
import StarFull from "./images/isImportant.png"
import DeleteImg from "./images/delete.png"
import checkmarkImg from "./images/checkmark.png"
import { Task } from "./Task"
import { allTasks } from "./index"

export function taskAddingHelper() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.addEventListener("click", showTaskForm)

  const addBtn = document.querySelector(".add-task")
  addBtn.addEventListener("click", createNewTask)

  const cancelBtn = document.querySelector(".cancel-task")
  cancelBtn.addEventListener("click", hideTaskForm)
}

export function addNewTask(taskName, taskDetails, taskDate) {
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
  checkbox.className = "checkbox"
  newTaskInfo.className = "new-task-info"
  newTaskTitle.className = "new-task-title"
  newTaskDetails.className = "new-task-details"
  date.className = "new-task-date"
  isImportant.src = Star
  deleteBtn.className = "delete-task-button"
  deleteBtn.src = DeleteImg

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
function createNewTask() {
  const inputName = document.querySelector("#inputTitle").value
  const inputDetails = document.querySelector("#inputDetail").value
  const inputDate = document.querySelector("#inputDate").value
  const newTask = new Task(inputName, inputDetails, inputDate)
  allTasks.push(newTask)
  addNewTask(newTask.name, newTask.details, newTask.dueDate)
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
function addTask() {}
