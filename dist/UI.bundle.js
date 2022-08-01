"use strict";
(self["webpackChunkproject_todo_list"] = self["webpackChunkproject_todo_list"] || []).push([["UI"],{

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUI": () => (/* binding */ loadUI),
/* harmony export */   "setTitle": () => (/* binding */ setTitle)
/* harmony export */ });
const body = document.body
function loadUI() {
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
        </div>
      </div>
      <div class="tasks-container">
      <div class="title"> All tasks</div>
      <div class="add-task-container"><button id="add-new-task"> + </button> </div>
      </div>
    </div>`
}

function setTitle() {
  const title = document.querySelector(".title")
  const filterButtons = document.querySelectorAll("div.tasks-filter > p, ")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      title.innerHTML = button.innerHTML
    })
  })
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcbiAgYm9keS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxoMT5Ub0RvPC9oMT48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhclwiPlxuICAgICAgICA8aDM+SG9tZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1maWx0ZXJcIj5cbiAgICAgICAgICA8cCBpZD1cImFsbC10YXNrc1wiID5BbGwgVGFza3M8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJ0b2RheVwiPlRvZGF5PC9wPlxuICAgICAgICAgIDxwIGlkPVwibmV4dC03LWRheXNcIj5OZXh0IDcgRGF5czwvcD5cbiAgICAgICAgICA8cCBpZD1cImltcG9ydGFudFwiPkltcG9ydGFudDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8aDM+UHJvamVjdHM8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cImFkZC1wcm9qZWN0XCI+QWRkIFByb2plY3Q8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy1jb250YWluZXJcIj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFza3MtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4gQWxsIHRhc2tzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stY29udGFpbmVyXCI+PGJ1dHRvbiBpZD1cImFkZC1uZXctdGFza1wiPiArIDwvYnV0dG9uPiA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbiAgY29uc3QgZmlsdGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYudGFza3MtZmlsdGVyID4gcCwgXCIpXG4gIGZpbHRlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBidXR0b24uaW5uZXJIVE1MXG4gICAgfSlcbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==