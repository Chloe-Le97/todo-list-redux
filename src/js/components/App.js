import React from "react";
import List from "./List";
import Form from "./Form";
import "./todo-list.style.css";

const App = () => (
  <div className="container">
    <div>
      <h1>To Do List</h1>
    </div>
    <div className="form">
      <Form />
      <List />
    </div>
  </div>
);

export default App;
