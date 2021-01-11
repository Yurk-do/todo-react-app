import React from "react";
import "./linkStat.css";
import link from "./statistics.png";

export function LinkStat() {
  return (
    <div className="link-stat-container">
      <a id="link-stat" href="http://localhost:3000/">
        <img id="icon-stat" src={link} alt="link" />
      </a>
    </div>
  );
}
