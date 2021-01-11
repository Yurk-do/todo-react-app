import React from "react";
import "./App.css";
import { EditForm } from "./components/editForm/editForm.js";
import { Counter } from "./components/counter/counter.js";
import { TodoList } from "./components/todoList/todoList.js";

function App() {
  return (
    <div id="app-container">
      <EditForm />
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
