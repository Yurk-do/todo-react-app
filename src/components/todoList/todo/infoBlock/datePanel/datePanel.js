import React from "react";
import { DateFormat } from "./dateFormat/dateFormat.js";
import "./datePanel.css";

export const DatePanel = ({ label, dateTime }) =>
  dateTime === null ? null : (
    <div className="column">
      <dt className="date-row">{label}</dt>
      <dd className="date-row">
        <DateFormat dateTime={dateTime} />
      </dd>
    </div>
  );
