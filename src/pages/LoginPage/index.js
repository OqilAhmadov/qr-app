import React, { useState } from "react";
import "./style.scss";
import IconEye from "assets/images/icons-eye.svg";
import IconEyeUn from "assets/images/icon-eye-un.svg";

const LoginPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="login">
      <div className="login__content">
        <h3 className="login__title">Pieslēgties</h3>
        <div className="login__form">
          <form>
            <h4 className="input-title">E-pasts</h4>
            <input className="input-email" type="email" placeholder="peteris.kalnins@gmail.com" />
            <h4 className="input-title">E-pasts</h4>
            <div className="password">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="input-password"
                placeholder="Password"
              />
              <button onClick={togglePassword} type="button" className="btn-eye">
                {passwordType === "password" ? (
                  <img src={IconEyeUn} alt="icon eye" />
                ) : (
                  <img src={IconEye} alt="icon eye" />
                )}
              </button>
            </div>
            <button className="btn-submit" type="submit">
              Pieslēgties
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
