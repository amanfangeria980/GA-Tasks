// When the page loads initially
document.addEventListener("DOMContentLoaded", () => {
    // If todos are not present, fetch from the API, else retrieve from local storage
    if (!localStorage.getItem("todos")) {
        fetchInitialTodos();
    } else {
        loadTodosFromStorage();
    }
    // Update the count of tasks
    updateCount();
});

// Update funtion to update the count of tasks
const updateCount = () => {
    let todoItems = document.querySelectorAll(".todoItem");
    let completedCount = 0;
    let pendingCount = 0;
    let totalCount = 0;
    todoItems.forEach((item) => {
        if (item.classList.contains("completed")) {
            completedCount++;
        } else {
            pendingCount++;
        }
    });

    totalCount = completedCount + pendingCount;

    document.getElementById("completedCount").textContent = completedCount;
    document.getElementById("pendingCount").textContent = pendingCount;
    document.getElementById("totalCount").textContent = totalCount;
};

// Fetch todos from the API
const fetchInitialTodos = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        const data = await response.json();
        let initialTodos = data.slice(0, 10).map((todo) => ({
            text: todo.title,
            completed: false,
        }));

        // Store todos in local storage
        localStorage.setItem("todos", JSON.stringify(initialTodos));
        loadTodosFromStorage();
    } catch (err) {
        console.log(err);
    }
};

// function to add a todo
const addTodo = () => {
    let input = document.getElementById("todoInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    let ul = document.getElementById("todoList");
    let li = document.createElement("li");

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        li.classList.toggle("completed");
        updateLocalStorage();
    };

    let todoText = document.createElement("span");
    todoText.textContent = input;

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(todoText);

    let removeButton = document.createElement("button");
    removeButton.classList.add("removeBtn");
    removeButton.innerText = "Remove";
    removeButton.onclick = function () {
        ul.removeChild(li);
        updateLocalStorage();
    };

    li.appendChild(todoDiv);
    li.appendChild(removeButton);
    li.classList.add("todoItem");
    ul.appendChild(li);
    document.getElementById("todoInput").value = "";
    updateLocalStorage();
};

// updating the local storage on ui changes
const updateLocalStorage = () => {
    let todoItems = document.querySelectorAll(".todoItem");
    let todos = [];
    todoItems.forEach((item) => {
        todos.push({
            text: item.innerText,
            completed: item.classList.contains("completed"),
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    updateCount();
};

// fetching todos from local storage and rendering them.
const loadTodosFromStorage = () => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let ul = document.getElementById("todoList");

    todos.forEach((todo) => {
        let li = document.createElement("li");
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todoDiv");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (todo.completed) {
            li.classList.add("completed");
            checkbox.checked = true;
        }
        checkbox.onclick = function () {
            li.classList.toggle("completed");
            updateLocalStorage();
        };

        let todoText = document.createElement("span");
        todoText.textContent = todo.text;
        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(todoText);
        li.appendChild(todoDiv);

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeBtn");
        removeButton.innerText = "Remove";
        removeButton.onclick = function () {
            ul.removeChild(li);
            updateLocalStorage();
        };

        li.appendChild(removeButton);
        li.classList.add("todoItem");
        ul.appendChild(li);
    });
};
