import React from "react";
import "./style.scss";

import IconSettings from "assets/images/icon-settings.svg";
import IconLeft from "assets/images/icon-left.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="leftIcon">
        <img src={IconLeft} alt="leftIcon" />
        <span>Events</span>
      </div>
      <h3 className="title">Scan QR Code</h3>
      <img className="settingsIcon" src={IconSettings} alt="settingsIcon" />
    </div>
  );
};

export default Header;
