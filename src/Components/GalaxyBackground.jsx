import React from "react";
import "./GalaxyBackground.css";

const GalaxyBackground = () => {
  return (
    <div className="galaxy-bg">
      <div className="stars-layer stars-1"></div>
      <div className="stars-layer stars-2"></div>
      <div className="stars-layer stars-3"></div>

      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
    </div>
  );
};

export default GalaxyBackground;
