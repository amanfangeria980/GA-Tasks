// Fetch todos from API
async function getTodosFromAPI(dispatch) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const initialTodos = data.slice(0, 10).map((todo) => ({
      text: todo.title,
      completed: false,
    }));
    dispatch({ type: "INIT_TODOS", payload: initialTodos });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Load todos from local storage or fetch from API
export const loadTodos = (dispatch) => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    dispatch({ type: "SET_TODOS", payload: JSON.parse(storedTodos) });
  } else {
    getTodosFromAPI(dispatch);
  }
};

// Save todos to local storage
export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Add a new todo
export const addTodo = (input, todos, dispatch) => {
  if (input.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  dispatch({ type: "ADD_TODO", payload: input });
};

// Toggle the todo status
export const toggleTodo = (index, dispatch) => {
  dispatch({ type: "TOGGLE_STATUS", payload: index });
};

// Remove a todo
export const removeTodo = (index, dispatch) => {
  dispatch({ type: "REMOVE_TODO", payload: index });
};
