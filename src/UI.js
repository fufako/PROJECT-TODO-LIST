import { format, add, parseISO } from "date-fns"
import { addDays } from "date-fns/esm"
import { allTasks } from "."
import { addNewTask, hideTaskForm } from "./tasksUI"
const body = document.body
export function loadUI() {
  body.innerHTML = `<div class="header"><h1>ToDo</h1></div>
    <div class="container">
      <div class="sidebar">
        <h3>Home</h3>
        <div class="tasks-filter">
          <p id="all-tasks" >All Tasks</p>
          <p id="today">Today</p>
          <p id="next-7-days">Next 7 Days</p>
          <p id="important">Important</p>
        </div>
        
        <h3>Projects</h3>
        <p class="add-project-title">Add Project</p>
        <div class="project-form">
        <p id="project-validation-message"> Project name can't be empty </p>
        <input type="text" id="project-input" placeholder="Enter Project Name" maxlength="24"/>
        <button id="add-project-btn">Add</button>
        <button id="cancel">Cancel</button>
        </div>
        <div class="projects-container">
        
        </div>
      </div>
      <div class="tasks-container">
      <div class="title"> All Tasks</div>
      <div class="add-task-container"><button id="add-new-task"> + </button> </div>
      <div class="inputField">
      
      <label>Title: </label>
      <p id="task-validation-message"> Task title can't be empty </p>
      <input type="text" class="taskInputs" id="inputTitle" placeholder="What to do?"  maxlength="50"/>
      <label>Details(optional):</label>
      <textarea
        type="text"
        id="inputDetail"
        class="taskInputs"
        placeholder="How about nothing?"
        wrap="hard"
        maxlength="50"
      ></textarea>
      <label>Date(optional):</label>
      <input type="date" class="taskInputs" id="inputDate" />
      <div class="formButtons">
        <input type="button" id="add-task-btn" class="add-task" value="Add" />
        <input type="button" class="cancel-task" value="Cancel" />
      </div>
    </div>
      </div>
      
    </div>`
}
export const createEventListener = () => {
  const filterButtons = document.querySelectorAll("div.tasks-filter > p")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      setTitle(button)
      filterTasks()
    })
  })
}
export function setTitle(button) {
  const title = document.querySelector(".title")
  title.innerHTML = button.innerHTML
}
export function filterTasks() {
  const title = document.querySelector(".title")

  if (title.innerHTML.match("All Tasks")) {
    displayAllTasks()
    hideTaskForm()
  } else if (title.innerHTML.match("Today")) {
    displayToday()
    hideTaskForm()
  } else if (title.innerHTML.match("Next 7 Days")) {
    displayThisWeek()
    hideTaskForm()
  } else if (title.innerHTML.match("Important")) {
    displayImportant()
    hideTaskForm()
  }
}

export function displayAllTasks() {
  clearContent()
  showAddTaskBtn()
  allTasks.forEach((task) => {
    addNewTask(
      task.name,
      task.details,
      task.dueDate,
      task.id,
      task.projectName,
      task.isDone,
      task.isImportant
    )
  })
}
function displayToday() {
  const today = format(new Date(), "yyyy-MM-dd")
  clearContent()
  hideAddTaskBtn()
  allTasks.forEach((task) => {
    if (task.dueDate === today) {
      addNewTask(
        task.name,
        task.details,
        task.dueDate,
        task.id,
        task.projectName,
        task.isDone,
        task.isImportant
      )
    }
  })
}

function displayThisWeek() {
  clearContent()
  hideAddTaskBtn()
  const today = format(new Date(), "yyyy-MM-dd")
  const nextWeek = format(addDays(parseISO(today), 7), "yyyy-MM-dd")
  allTasks.forEach((task) => {
    if (task.dueDate >= today && task.dueDate <= nextWeek) {
      addNewTask(
        task.name,
        task.details,
        task.dueDate,
        task.id,
        task.projectName,
        task.isDone,
        task.isImportant
      )
    }
  })
}
export function displayImportant() {
  clearContent()
  showAddTaskBtn()
  allTasks.forEach((task) => {
    if (task.isImportant === true) {
      addNewTask(
        task.name,
        task.details,
        task.dueDate,
        task.id,
        task.projectName,
        task.isDone,
        task.isImportant
      )
    }
  })
}
export function displayProjectTasks(projectName) {
  clearContent()
  showAddTaskBtn()
  allTasks.forEach((task) => {
    if (task.projectName === projectName) {
      addNewTask(
        task.name,
        task.details,
        task.dueDate,
        task.id,
        task.projectName,
        task.isDone,
        task.isImportant
      )
    }
  })
}

function clearContent() {
  const tasks = document.querySelectorAll(".new-task")
  tasks.forEach((task) => {
    task.remove()
  })
}
function hideAddTaskBtn() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.style.display = "none"
}
function showAddTaskBtn() {
  const addTaskBtn = document.querySelector("#add-new-task")
  addTaskBtn.style.display = ""
}
