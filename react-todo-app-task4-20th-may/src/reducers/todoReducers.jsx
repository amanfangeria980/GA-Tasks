export const todosReducer = (state, action) => {
  switch (action.type) {
    case "INIT_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];
    case "TOGGLE_STATUS":
      return state.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};
