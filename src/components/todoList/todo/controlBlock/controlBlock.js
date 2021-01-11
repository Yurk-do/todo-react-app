import React from "react";
import "./controlBlock.css";

export function ControlBlock() {
  return (
    <div className="control-block">
      <button className="view-button" data-action="view">
        View
      </button>
      <button className="postpone-button" data-action="postpone">
        Postpone
      </button>
      <button className="done-button" data-action="done">
        Done
      </button>
      <button className="delete-button" data-action="delete">
        Delete
      </button>
    </div>
  );
}
