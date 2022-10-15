import React from "react";
import "./style.scss";
import IconSettings from "assets/images/icon-settings.svg";
import SeveralEvents from "components/modal/SeveralEvents";
import Modal from "components/modal";

const Events = () => {
  return (
    <div className="events">
      <div className="events__header">
        <h2 className="title">Events </h2>
        <div className="settingsIcon">
          <img src={IconSettings} alt="settingsIcon" />
        </div>
      </div>
      <div className="events__content">
      <Modal.Attendance attending={false} attendanceVerified={true} typeColor="green" button={true} buttonTitle="Register attendance" />

        <h3 className="content-title">Select events to register attendants</h3>
        <ul className="select-events">
          <li className="items">
            <div class="checkbox">
              <input type="checkbox" value="1" id="checkboxInputOne" name="" />
              <label for="checkboxInputOne"></label>
            </div>{" "}
            <div className="text">
              <h3 className="text__title ">Lunch series C</h3>
              <span className="text__caption">7A; 7B; 7C</span>
            </div>
          </li>
          <li className="items">
            <div class="checkbox">
              <input type="checkbox" value="2" id="checkboxInputTwo" name="" />
              <label for="checkboxInputTwo"></label>
            </div>{" "}
            <div className="text">
              <h3 className="text__title ">Lunch series C</h3>
              <span className="text__caption">7A; 7B; 7C</span>
            </div>
          </li>
          <li className="items">
            <div class="checkbox">
              <input type="checkbox" value="3" id="checkboxInputThree" name="" />
              <label for="checkboxInputThree"></label>
            </div>{" "}
            <div className="text">
              <h3 className="text__title ">Lunch series C</h3>
              <span className="text__caption">7A; 7B; 7C</span>
            </div>
          </li>
        </ul>
        <div className="contentButton">
          <button className="submitButton" type="button">
            Start registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
