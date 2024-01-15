import React from "react";
import "./CSS/LoginSignUp.css"

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder="Your name" />
          <input type="email" name="" id="" placeholder="Your Email" />
          <input type="password" name="" id="" placeholder="Your Pasword" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login here!</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
