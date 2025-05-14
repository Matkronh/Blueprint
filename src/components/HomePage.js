import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Professional Platform</h1>
        <p>Your success is our priority</p>
      </header>
      
      <div className="button-container">
        <Link to="/signup" className="action-button signup">Sign Up</Link>
        <Link to="/login" className="action-button login">Log In</Link>
        <Link to="/testimonials" className="action-button testimonials">Testimonials</Link>
      </div>
    </div>
  );
}

export default HomePage;