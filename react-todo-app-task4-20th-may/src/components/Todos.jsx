/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../style/Todos.css";
import { useTodos } from "../context/Todos";

const Todos = () => {
  const { todos, setTodos } = useTodos();
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const pendingTasks = totalTasks - completedTasks;
  const [input, setInput] = useState("");

  async function getTodosFromAPI() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      const initialTodos = data.slice(0, 10).map((todo) => ({
        text: todo.title,
        completed: false,
      }));
      setTodos(initialTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  // Load todos from local storage or fetch from API
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      getTodosFromAPI();
    }
  }, []);

  // Update local storage and task counts whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // add todo function
  const addTodo = () => {
    if (input.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    const newTodo = { text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Toggle the todo status
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Remove a todo
  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  //   handleKeyDown
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="container">
      <h1>My Todos App</h1>
      <div className="statusContainer">
        <div>
          <span className="tasksCount">Completed:</span>
          <span id="completedCount">{completedTasks}</span>
        </div>
        <div>
          <span className="tasksCount">Total:</span>
          <span id="totalCount">{totalTasks}</span>
        </div>
        <div>
          <span className="tasksCount">Pending:</span>
          <span id="pendingCount">{pendingTasks}</span>
        </div>
      </div>
      <div className="inputContainer">
        <input
          id="formInp"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul id="todoList">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todoItem ${todo.completed ? "completed" : ""}`}
          >
            <div className="todoDiv">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <span>{todo.text}</span>
            </div>
            <button className="removeBtn" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
