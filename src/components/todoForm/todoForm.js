import React from "react";
import "./todoForm.css";
import { ButtonFormBlock } from "./buttonFormBlock/buttonFormBlock.js";

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.state = { todoDescription: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todoDescription: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const nextId = 67 + this.count++;
    const todo = {
      text: this.state.todoDescription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: nextId,
    };
    this.props.onCreateTodo(todo);
  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            id="todo-text"
            type="text"
            name="todo-description"
            value={this.state.todoDescription}
            onChange={this.handleChange}
          />
          <ButtonFormBlock />
        </form>
      </div>
    );
  }
}
