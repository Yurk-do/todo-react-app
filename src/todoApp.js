import React from "react";
import "./App.css";
import { TodoForm } from "./components/todoForm/todoForm.js";
import { Counter } from "./components/counter/counter.js";
import { TodoList } from "./components/todoList/todoList.js";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: props.allTodo };
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }
  handleCreateTodo(todo) {
    const newTodos = [todo, ...this.state.todos];
    this.setState({ todos: newTodos });
  }
  render() {
    const { todos } = this.state;
    return (
      <div id="app-container">
        <h1>Create Todo</h1>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <Counter />
        <TodoList allTodo={todos} />
      </div>
    );
  }
}

export default TodoApp;
