import React from 'react';
import { useMemberstackModal } from '@memberstack/react';
import './HomePage.css';

function HomePage() {
  const { openModal, hideModal } = useMemberstackModal();

  const handleSignUp = () => {
    openModal({
      type: 'PAYMENT',
      priceId: 'prc_learner-lr1s00uua', 
    });
  };

  const handleLogin = () => {
    openModal({
      type: 'LOGIN',
    });
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Professional Platform</h1>
        <p>Your success is our priority</p>
      </header>
      
      <div className="button-container">
        <button onClick={handleSignUp} className="action-button signup">
          Sign Up
        </button>
        <button onClick={handleLogin} className="action-button login">
          Log In
        </button>
        <a href="/testimonials" className="action-button testimonials">
          Testimonials
        </a>
      </div>
    </div>
  );
}

export default HomePage;