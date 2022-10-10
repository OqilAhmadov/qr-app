import React from "react";
import { Link } from "react-router-dom";
import IconMessage from "assets/images/icon-message.png";
import "./sendsms.scss"

const SendSms = () => {
  return (
    <div className="sendsms">
      <img className="iconMessage" src={IconMessage} alt="icon sms" />
      <h2 className="title">Lūdzu pārbaudiet savu e-pasta pastkasti</h2>
      <p className="description">Lai ielogotos, ievadiet 4 ciparu droršības kodu, ko nosūtījām uz adresi <span>peteris.kalnins@gmail.com</span></p>
      <div className="form">
        <span className="checkSms">Ievadiet 4 ciparu drošības kodu</span>
        <form>
          <input className="inputCode" type="text" placeholder="Ievadiet kodu šeit" />
          <button type="submit">Apstiprināt</button>
        </form>
        <p className="checkSpamFolder">Nesaņēmāt e-pastu? Pārbaudiet savu SPAM iesūtni</p>
        <p className="smsCode"><Link to="">Nosūtīt kodu vēlreiz</Link></p>
      </div>
    </div>
  );
};

export default SendSms;
