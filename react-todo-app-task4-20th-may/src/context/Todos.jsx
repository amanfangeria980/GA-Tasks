/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useReducer } from "react";
import { todosReducer } from "./../reducers/todoReducers";

// creating a context and exporting it
export const TodosContext = createContext(null);
// creating a provider and exporting it
export const TodosProvider = (props) => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const todoObj = useContext(TodosContext);
  return todoObj;
};
