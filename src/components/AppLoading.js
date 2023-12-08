import React from "react";
import "./AppLoading.css";
import rootslogo from "../images/rootslogo.png";

const AppLoading = () => {
  return (
    <div className="loading-container">
      <img src={rootslogo} alt="Logo" className="logo" />
      <p className="tagline">Welcome to <span className="product-name">ROOTS</span></p>
    </div>
  );
};

export default AppLoading;
