import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Create this CSS file for styles
import houseImage from "../assets/assets.jpg"; // Add the house image here

const LoginPage = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="login-page">
      <header className="header">
        <img src="/path-to-logo" alt="UrbanHelp Logo" className="logo" onClick={handleHomePage}/>
        <h1>UrbanHelp</h1>
      </header>
      <main className="main-content">
        <img src={houseImage} alt="House" className="house-image" />
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
