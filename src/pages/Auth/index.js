import React from "react";
import "./auth.scss";
import LogoIcon from "assets/images/Emoji.svg";
import LoginPage from "pages/LoginPage";
import SendSms from "pages/SendSms";
import ChooseAuth from "pages/ChooseAuth";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__header">
        <h3>
          <img src={LogoIcon} alt="logo" /> Pusdienlaiks
        </h3>
        <div className="links">
          <span>Pieslēgties</span>
          <span>Pieteikt bērnu</span>
        </div>
      </div>
      <div className="auth__main">
        <ChooseAuth />
      </div>
      <div className="auth__lang">
        <span className="activeLang">LAT</span>
        <span>ENG</span>
      </div>
    </div>
  );
};

export default Auth;
