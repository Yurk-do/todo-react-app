import React from "react";
import "./todoList.css";
import { LinkStat } from "./linkStat/linkStat.js";
import { EmptyList } from "./emptyList/emptyList.js";
import { Todo } from "./todo/todo.js";

export function TodoList({ allTodo }) {
  return (
    <div className="todo-list-container">
      <h1>My ToDos</h1>
      <LinkStat />
      <ul id="todo-list">
        {allTodo.length > 0 ? (
          allTodo.map((todo) => (
            <li key={`li-${todo.id}`}>
              <Todo todo={todo} />
            </li>
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
    </div>
  );
}
