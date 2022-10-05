import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Modal from "components/modal";

const RegistrationQR = () => {
  return (
    <div className="main">
      {/* <Modal.SeveralEvents typeColor="green" button={true} buttonTitle="Register attendance" /> */}
      <div className="main__top">
        <p>
          Registering attendants for 3 events. <Link to="/">Edit</Link>{" "}
        </p>
      </div>
      {/* Area for camera feed */}
      <div className="scanArea">Area for camera feed</div>
      {/* Area for camera feed */}
      <div className="main__bottom">
        <button className="btn" type="button">
          Pause registration
        </button>
      </div>
    </div>
  );
};

export default RegistrationQR;
