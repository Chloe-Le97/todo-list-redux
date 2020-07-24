import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/action-types";

let TodoId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: TodoId++,
    text,
  },
});

export const deleteTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});
