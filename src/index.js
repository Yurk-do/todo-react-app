import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import TodoApp from "./todoApp";
import { todos } from "./data/db.js";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp allTodo={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);
