import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/action-types";

const initState = {
  // eg of todoList
  // todoList : { id1: {id: 'id1', text: 'abc' }}
  todoList: {},
};
//const initialState = [];

function rootReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      let todoItem = { id: payload.id, text: payload.text, completed: false };
      let newtodoList = state.todoList;
      newtodoList[payload.id] = todoItem;
      return { ...state, todoList: newtodoList };

    case TOGGLE_TODO:
      let id = payload.id;
      let todoList = state.todoList;
      todoList[id].completed = !todoList[id].completed;
      return { ...state, todoList };

    case REMOVE_TODO:
      // let todoList = state.todoList;
      let removedTodoList = Object.keys(state.todoList).reduce((list, key) => {
        if (key != payload.id) {
          list[key] = state.todoList[key];
        }
        return list;
      }, {});
      return { ...state, todoList: removedTodoList };

    default:
      return state;
  }
}
export default rootReducer;
