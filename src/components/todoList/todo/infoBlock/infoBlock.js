import React from "react";
import "./infoBlock.css";
import { StatusPanel } from "./statusPanel/statusPanel.js";
import { DatePanel } from "./datePanel/datePanel.js";

export function InfoBlock({ state, dateCreated, dateCompleted }) {
  return (
    <dl className="info-block">
      <StatusPanel status={state} />
      <DatePanel label="Created:" dateTime={dateCreated} />
      {dateCompleted != undefined && (
        <DatePanel
          label="Completed:"
          dateTime={dateCompleted}
          className="done-date-panel"
        />
      )}
    </dl>
  );
}
