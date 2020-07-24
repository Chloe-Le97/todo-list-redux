import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/index";
import "./todo-list.style.css";

const mapStateToProps = (state) => {
  return { todo: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

// const ConnectedList = ({ todo }) => (
//   <ul>
//     {todo.map((item) => (
//       <li key={item.id}>
//         {item.text.input}
//         <button onClick={console.log(this)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// );

class ConnectedList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-container">
          {Object.values(this.props.todo.todoList).map((item) => (
            <li
              key={item.id}
              style={{
                textDecoration: this.props.todo.todoList[item.id].completed
                  ? "line-through"
                  : "",
              }}
            >
              {item.text.input}
              <div className="button">
                <button
                  onClick={() => this.props.toggleTodo(item.id)}
                  className="check"
                ></button>
                <button
                  onClick={() => this.props.deleteTodo(item.id)}
                  className="del"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
