import React from "react";
import "./todo.css";
import { InfoBlock } from "./infoBlock/infoBlock.js";
import { ControlBlock } from "./controlBlock/controlBlock.js";

export const Todo = ({ allTodo }) =>
  allTodo.map((todo) => (
    <div className="item">
      <h3>{todo.text}</h3>
      <InfoBlock
        state={todo.state}
        dateCreated={todo.dateCreated}
        dateCompleted={todo.dateCompleted}
      />
      <ControlBlock />
    </div>
  ));
