import React from "react";
import "./infoBlock.css";

export function InfoBlock({ state, dateCreated, dateCompleted }) {
  return (
    <div className="info-block">
      <p className="status-panel">{state}</p>
      <p className="created-date-panel">{dateCreated}</p>
      {dateCompleted != undefined && (
        <p className="done-date-panel">{dateCompleted}</p>
      )}
    </div>
  );
}
