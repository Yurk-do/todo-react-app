import React from "react";
import "./editForm.css";
import { TodoText } from "./todoText/todoText.js";
import { ButtonFormBlock } from "./buttonFormBlock/buttonFormBlock.js";

export function EditForm() {
  return (
    <React.Fragment>
      <h1>Create Todo</h1>
      <div className="editor-form">
        <form>
          <TodoText />
          <ButtonFormBlock />
        </form>
      </div>
    </React.Fragment>
  );
}
