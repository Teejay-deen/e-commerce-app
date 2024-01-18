import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSignup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onChangeHandler =(event)=>{
    setFormData(()=>({
      ...formData,
      [event.target.name]: event.target.value
    }))
  }

  const handleContinue =(e)=>{
    e.preventDefault();
    console.log(formData)
  }
  return (
    <form className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input onChange={onChangeHandler} type="text" name="text" id="nameId" placeholder="Your name" />
          <input onChange={onChangeHandler} type="email" name="email" id="emailId" placeholder="Your Email" />
          <input onChange={onChangeHandler} type="password" name="password" id="passId" placeholder="Your Pasword" />
        </div>  
        <button onClick={handleContinue}>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login here!</span>
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
