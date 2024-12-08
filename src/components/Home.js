import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 
import toolsImage from "../assets/assets.jpg"; // Add the house/tools image here

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };
  const handleHomePage = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="landing-page">
      <header className="header">
        <img src="/path-to-logo" alt="UrbanHelp Logo" className="logo" onClick={handleHomePage} />
        <h1>UrbanHelp</h1>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h2>Whipping Up Home Help, One Click at a Time</h2>
          <p>
            Your go-to platform for finding trustworthy and skilled house help
            in Kathmandu. Simplify your life, hire with confidence, and enjoy a
            well-maintained home.
          </p>
          <button className="get-started-btn" onClick={handleLogin}>Get Started</button>
        </div>
        <img src={toolsImage} alt="House Tools" className="tools-image" />
      </main>
    </div>
  );
};

export default Home;
