import React from "react";
import "./counter.css";

export function Counter() {
  return (
    <React.Fragment>
      <h2 id="counter">
        <span id="total-counter-text">Total Todo Count:</span>
        <span id="total-counter-number">0</span>
      </h2>
    </React.Fragment>
  );
}
