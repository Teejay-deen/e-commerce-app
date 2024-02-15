import React, { useState } from "react";
import "./CSS/LoginSignUp.css";
import { useNavigate  } from 'react-router-dom';
import axios, { Axios } from "axios";

const LoginSignup = () => {
  const navigate = useNavigate ();

  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userEmail, setUserEmail] = useState("")


  const submitUserLogin = async ()=>{
    try{
      const reqBody = {
        "username": userName,
        "password":userPassword,
        "email":userEmail
      }
      const response = await axios.post("https://dummyjson.com/auth/login", reqBody );
      if (response) {
        console.log(response)
      }
    }
    catch (e) {

    }
    finally{

    }
  }
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
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            autoFocus={true}
          />
          <input
            type="email"
            name="email"
            id="emailId"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e)=> setUserEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="passId"
            placeholder="Your Pasword"
            value={userPassword}
            onChange={(e)=> setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={submitUserLogin}>Continue</button>
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
