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
        <div class="projects-container">
        <div class="project-form">
        <input type="text" id="project-input" placeholder="Enter Project Name" maxlength="24"/>
        <button id="add-project">Add</button>
        <button id="cancel">Cancel</button>
        </div>
        </div>
      </div>
      <div class="tasks-container">
      <div class="title"> All tasks</div>
      <div class="add-task-container"><button id="add-new-task"> + </button> </div>
      <div class="inputField">
      <label>Title:</label>
      <input type="text" class="taskInputs" id="inputTitle" placeholder="What to do?" />
      <label>Details(optional):</label>
      <textarea
        type="text"
        id="inputDetail"
        class="taskInputs"
        placeholder="How about nothing?"
        wrap="hard"
      ></textarea>
      <label>Date(optional):</label>
      <input type="date" class="taskInputs" id="inputDate" />
      <div class="formButtons">
        <input type="submit" class="add-task" value="Add" />
        <input type="button" class="cancel-task" value="Cancel" />
      </div>
    </div>
      </div>
      
    </div>`
}

export function setTitle() {
  const title = document.querySelector(".title")
  const filterButtons = document.querySelectorAll("div.tasks-filter > p")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(filterButtons)
      title.innerHTML = button.innerHTML
    })
  })
}
