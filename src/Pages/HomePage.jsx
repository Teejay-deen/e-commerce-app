import React from 'react'
import "./CSS/Homepage.css";
import user_avatar from "../Components/Assets/user-avatar.jpg";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const Logout = useNavigate();
  return (
    <div className='home-screen'>
        <header>
            <h3>Login details</h3>
            <a onClick={()=>Logout("/")}>Logout</a>
        </header>


        <div className="page-content">
            <div className="user-card">
                <img src={user_avatar} alt="user-avatar" />
                <h3>User Full Name</h3>
                <div className="user-meta">
                    <p>
                        <span>Username: </span>
                        <span>Test Username</span>
                    </p>

                    <p>
                        <span>Email:</span>
                        <span>test@gmail.com</span>
                    </p>

                    <p>
                        <span>Gender:</span>
                        <span>Male or Female</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage