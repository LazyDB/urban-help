import React from 'react';
import './Login.css';
import Header from '../Shared/Header';
import buildingImage from '../../assets/images/assets.jpg';

function Login() {
  return (
    <div className="login-container">
      <Header />
      <div className="login-content">
        {/* Image Section */}
        <div className="login-image">
          <img src={buildingImage} alt="Building Logo" />
        </div>

        {/* Form Section */}
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
