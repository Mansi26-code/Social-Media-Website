import React, { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import instance from '../../axios';
 // Import the custom Axios instance

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await instance.post("/auth/register", user);
        console.log(username);// Use the custom Axios instance
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <form className="registerBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="registerInput" />
            <input placeholder="Email" required ref={email} className="registerInput" type="email" />
            <input placeholder="Password" required ref={password} className="registerInput" type="password" minLength="6" />
            <input placeholder="Confirm Password" required ref={passwordAgain} className="registerInput" type="password" />
            <button className="registerButton" type="submit">Sign Up</button>
            <button className="registerLoginButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


