$(document).ready(function () {
    let todoInput = document.querySelector("#todo-text");
    let todoForm = document.querySelector("#todo-form");
    let todoList = document.querySelector("#todo-list");
    let todoCountSpan = document.querySelector("#todo-count");

    var todos = ["Awesome!", "Great job!"];

    render_blog();

    function render_blog() {

        todoList.innerHTML = "";
        todoCountSpan.textContent = todos.length;

        // Render a new li for each todo
        for (var i = 0; i < todos.length; i++) {
            var todo = todos[i];

            var li = document.createElement("li");
            li.textContent = todo;
            todoList.appendChild(li);
        }
    }

    // When form is submitted...
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var todoText = todoInput.value.trim();
        if (todoText === "") {
            return;
        }

        todos.push(todoText);
        todoInput.value = "";
    })
});
