import React from "react";
import "./style.scss";

import ScanIcon from "assets/images/icon-QR.svg";
import ListIcon from "assets/images/icon-list.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="scanQRcode active">
        <img src={ScanIcon} alt="scanIcon" />
        <h3>Scan QR Code</h3>
      </div>
      <div className="list">
        <img src={ListIcon} alt="listIcon" />
        <h3>Attendance list</h3>
      </div>
    </div>
  );
};

export default Footer;
