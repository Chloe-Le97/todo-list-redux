import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/index";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

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
const GreenCheckbox = withStyles({
  root: {
    color: "#0c9499",
    "&$checked": {
      color: "#0c9499",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

class ConnectedList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Object.values(this.props.todo.todoList).map((item) => (
            <div className="list-container">
              <li key={item.id}>
                <GreenCheckbox
                  onClick={() => this.props.toggleTodo(item.id)}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <div
                  key={item.id}
                  style={{
                    textDecoration: this.props.todo.todoList[item.id].completed
                      ? "line-through"
                      : "",
                  }}
                >
                  {item.text.input}
                </div>
                <div className="button">
                  {/* <button
                  onClick={() => this.props.toggleTodo(item.id)}
                  className="check"
                ></button> */}
                  {/* <button
                  onClick={() => this.props.deleteTodo(item.id)}
                  className="del"
                ></button> */}
                  <DeleteIcon
                    color="secondary"
                    className="del"
                    onClick={() => this.props.deleteTodo(item.id)}
                  ></DeleteIcon>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
