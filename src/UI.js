const body = document.body
export function loadUI() {
  body.innerHTML = `<div class="header"><h1>ToDo</h1></div>
    <div class="container">
      <div class="sidebar">
        <h3>Home</h3>
        <div class="tasks-filter">
          <p>All Tasks</p>
          <p>Today</p>
          <p>Next 7 Days</p>
          <p>Important</p>
        </div>
        
        <h3>Projects</h3>
        <div class="projects-container"> 
        <p>Add Project</p>
        </div>
      </div>
      <div class="tasks-container">hello :)</div>
    </div>`
}
