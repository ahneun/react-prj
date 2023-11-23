// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "todos/ADD_TODO";

const DELETE_TODO = "todos/DELETE_TODO";

const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload}
}

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload}
}

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload}
}



const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newToto = action.payload;
      return [newToto, ...state]; //TODO: 여기 작성??????????????????????????????

    case "DELETE_TODO":
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId); //TODO: 여기 작성

    case "SWITCH_TODO":
      const { id, switchs } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, content: switchs}
        }
        return todo
      }); //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;