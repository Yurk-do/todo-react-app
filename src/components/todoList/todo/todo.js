import React from "react";
import "./todo.css";
import { InfoBlock } from "./infoBlock/infoBlock.js";
import { ControlBlock } from "./controlBlock/controlBlock.js";

export const Todo = ({ todo }) => (
  <div key={`div-${todo.id}`} className="item">
    <h2 className="todo-item-text">{todo.text}</h2>
    <InfoBlock
      state={todo.state}
      dateCreated={todo.dateCreated}
      dateCompleted={todo.dateCompleted}
    />
    <ControlBlock />
  </div>
);
