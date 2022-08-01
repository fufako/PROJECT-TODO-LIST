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
        <p class="add-project">Add Project</p>
        <div class="projects-container">
        <div class="project-form">
        <input type="text" />
        <button>Add</button>
        <button>Cancel</button>
        </div>
        </div>
      </div>
      <div class="tasks-container">
      <div class="title"> All tasks</div>
      <div class="add-task-container"><button id="add-new-task"> + </button> </div>
      </div>
    </div>`
}

export function setTitle() {
  const title = document.querySelector(".title")
  const filterButtons = document.querySelectorAll("div.tasks-filter > p")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      title.innerHTML = button.innerHTML
    })
  })
}

function addProject() {
  const projectContainer = document.querySelector(".projects-container")
  const newProject = document.createElement("div")
}
