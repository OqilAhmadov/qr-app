import React from "react";
import "./chooseAuth.scss";

import IconArrow from "assets/images/icon-arrow.svg";
import EmailIcon from "assets/images/Information.png";
import PhoneIcon from "assets/images/mobile-alt.png";

const ChooseAuth = () => {
  return (
    <div className="chooseAuth">
      <h2 className="title">Norādiet veidu kā vēlaties saņemt drošības kodu</h2>
      <p className="description">
        Izvēloties saņemšanas veidu, Jums uzreiz tiks nosūtīts drošības kods, kuru ievadot varēsiet
        ielogoties savā kontā
      </p>
      <div className="buttons">
        <button type="button" className="phoneButton">
          <p>
            <img src={PhoneIcon} alt="phoneIcon" /> Nosūtīt kā SMS
          </p>{" "}
          <img src={IconArrow} alt="IconArrow" />
        </button>
        <button type="button" className="emailButton">
          <p>
            <img src={EmailIcon} alt="EmailIcon" /> Nosūtīt e-pastā
          </p>{" "}
          <img src={IconArrow} alt="IconArrow" />
        </button>
      </div>
    </div>
  );
};

export default ChooseAuth;
