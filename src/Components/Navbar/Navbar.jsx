import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const page = window.location.pathname;

  const [menu, setMenu] = useState(page);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p
          className="shopper"
          onClick={() => {
            setMenu("/shopper");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            SHOPPER
          </Link>
        </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("/shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "/shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("/men");
          }}
        >
          
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "/men" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("/women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "/women" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("/kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "/kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
