export const initialState = {
  todos: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: [...state.todos.map(item =>
          item.id === action.payload.id ? { ...item, text: action.payload.text } : item
        )]
      };

    default:
      return state;
  }
};
