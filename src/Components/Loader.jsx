import React from "react";
import "./Loader.css";
import logo from "../assets/coding.png";

console.log("Loader is running");

const Loader = () => {
  return (
    <div className="loader-screen">
      <div className="loader-glow"></div>

      <div className="loader-content">
        <div className="loader-icon-wrap">
          <img src={logo} alt="Logo" className="loader-icon" />
        </div>

        <h1 className="loader-name">Divyanshu</h1>
        <p className="loader-sub">Loading portfolio...</p>

        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
