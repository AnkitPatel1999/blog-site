import React from "react";
import logo from "../../../assets/home/logo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h4>MyWays</h4>
        </div>
        <div className="header-nav">
          <button
            type="button"
            className="signup-btn"
            data-toggle="modal"
            data-target="#signUp"
          >
            Sign Up
          </button>
          <div className="signin-btn">Sign In</div>
        </div>
      </div>
    </>
  );
};

export default Header;
