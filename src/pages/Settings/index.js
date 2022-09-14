import React from "react";
import "./style.scss";
import CloseIcon from "assets/images/icon-close.svg";
import Button from "components/button";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__top">
        <h3 className="title">Settings</h3>
        <img className="closeIcon" src={CloseIcon} alt="closeIcon" />
      </div>
      <div className="settings__content">
        <h3 className="title">Registration mode</h3>
        <div className="change-mode">
          <h3> Continuous registration</h3>
          <div class="checkboxWrapper">
            <input type="checkbox" value="1" id="checkboxThreeInput" name="" />
            <label for="checkboxThreeInput"></label>
          </div>
        </div>
      </div>
      <div className="logout">
         <Button title="Log out" iconLogOut={true} type="redBordered" />
      </div>
    </div>
  );
};

export default Settings;
