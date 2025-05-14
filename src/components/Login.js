import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

function Login() {
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-button">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login;