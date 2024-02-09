import React, { useState } from "react";
import "./CSS/LoginSignUp.css";
import { useNavigate  } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate ();
  return (
    <form
      method="post"
      className="loginsignup"
      onSubmit={(e) => {
        e.preventDefault();

        const payload = {
          name: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        };

        console.log(payload);
      }}
    >
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            name="text"
            id="nameId"
            placeholder="Your name"
            autoFocus={true}
          />
          <input
            type="email"
            name="email"
            id="emailId"
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            id="passId"
            placeholder="Your Pasword"
          />
        </div>
        <button type="submit" onClick={()=> navigate("/HomePage")}>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login Here!</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and use & privacy policy</p>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;
