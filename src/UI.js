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
        <div class="projects-container"> 
        <p>Add Project</p>
        </div>
      </div>
      <div class="tasks-container">
      <div class="title"> All tasks</div>
      </div>
    </div>`
}

export function filterTasks() {
  const title = document.querySelector(".title")
  const filterButtons = document.querySelectorAll("div.tasks-filter > p")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      title.innerHTML = button.innerHTML
    })
  })
}
