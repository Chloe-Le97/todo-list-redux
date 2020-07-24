import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import "./todo-list.style.css";

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { input } = this.state;
    this.props.addTodo({ input });
    this.setState({ input: "" });
  }

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            id="input"
            value={input}
            onChange={this.handleChange}
            placeholder="Add new activity"
          />

          <button type="submit" className="add">
            Add
          </button>
        </div>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
