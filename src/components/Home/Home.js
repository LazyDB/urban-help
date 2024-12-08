import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import toolsImage from '../../assets/images/assets.jpg';
import Header from '../Shared/Header';

function Home() {
  const navigate = useNavigate();

  return (
    
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="home-left">
          <h2>UrbanHelp</h2>
          <h3>Whipping Up Home Help, One click at a time</h3>
          <p>
            Your go-to platform for finding trustworthy and skilled house help
            in Kathmandu. Simplify your life, hire with confidence, and enjoy a
            well-maintained home.
          </p>
          <button className="get-started" onClick={() => navigate('/login')}>
            Get Started
          </button>
        </div>
        <div className="home-right">
          <img src={toolsImage} alt="Tools and Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
