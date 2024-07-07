import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <img src="/assets/logo.png" alt="Connectify Logo" className="registerLogoImage" />
          <h3 className="registerLogo typing">Connectify</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Connectify.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" type="password" />
            <input placeholder="Confirm Password" className="registerInput" type="password" />
            <button className="registerButton">Sign Up</button>
            <button className="registerLoginButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

