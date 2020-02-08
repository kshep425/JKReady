let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

let todos = [];

render_comments();

function render_comments() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");


    li.appendChild(button);
    todoList.appendChild(li);
  }
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let todoText = todoInput.value.trim();
  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.value = "";
  render_comments();
});

todoList.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("button") === true) {

    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    render_comments();
  }
});
