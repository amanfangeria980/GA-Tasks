/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../style/Todos.css";
import { useTodos } from "../context/Todos";
import {
  loadTodos,
  saveTodos,
  addTodo,
  toggleTodo,
  removeTodo,
} from "../utils/todoFunctions";

const TodoApp = () => {
  const { todos, dispatch } = useTodos();
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const pendingTasks = totalTasks - completedTasks;
  const [input, setInput] = useState("");

  // Load todos from local storage or fetch from API
  useEffect(() => {
    loadTodos(dispatch);
  }, []);

  // Update local storage and task counts whenever todos change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  //On enter key press, fire the addTodo event
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodoHandler();
  };

  // addTodoHandler
  const addTodoHandler = () => {
    addTodo(input, todos, dispatch);
    setInput("");
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
        <button onClick={addTodoHandler}>Add</button>
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
                onChange={() => toggleTodo(index, dispatch)}
              />
              <span>{todo.text}</span>
            </div>
            <button
              className="removeBtn"
              onClick={() => removeTodo(index, dispatch)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
