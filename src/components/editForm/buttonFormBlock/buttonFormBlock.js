import React from "react";
import "./buttonFormBlock.css";

export function ButtonFormBlock() {
  return (
    <div className="button-form-block">
      <input id="add-todo-button" type="button" value="Add" />
      <input id="clear-form-button" type="button" value="Clear" />
    </div>
  );
}
