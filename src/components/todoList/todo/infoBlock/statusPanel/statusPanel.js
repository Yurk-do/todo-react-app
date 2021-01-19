import React from "react";
import "./statusPanel.css";

export const StatusPanel = ({ status }) => {
  const labels = {
    done: "This todo was completed",
    "in-process": "You have to do this thing",
    postponed: "No need to do anything",
  };

  return (
    <React.Fragment>
      <dt className="status-row">Status:</dt>
      <dd className="status-row">{labels[status]}</dd>
    </React.Fragment>
  );
};
