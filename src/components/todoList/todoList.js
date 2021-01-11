import React from "react";
import "./todoList.css";
import { LinkStat } from "./linkStat/linkStat.js";
import { EmptyList } from "./emptyList/emptyList.js";
import { Todo } from "./todo/todo.js";
import { todos } from "../../data/db.js";

export function TodoList(allTodo) {
  return (
    <div className="todo-list-container">
      <h1>My ToDos</h1>
      <LinkStat />
      <div id="todo-list">
        {todos.length > 0 ? <Todo allTodo={todos} /> : <EmptyList />}
      </div>
    </div>
  );
}
