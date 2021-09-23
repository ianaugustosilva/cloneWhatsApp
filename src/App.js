import React from "react";
import "./App.css";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="header--buttons">
            {" "}
            <div className="header--btn"></div>
          </div>
        </header>
        <div className="search">....</div>

        <div className="chatlist">....</div>
      </div>
      <div className="contentarea">....</div>
    </div>
  );
};