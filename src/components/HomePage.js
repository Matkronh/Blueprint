import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './HomePage.css';

function HomePage() {
  return (

    
    <div className="home-container">
        <Helmet>
        <script>
          {`
            var MemberSpace = window.MemberSpace || {"subdomain":"blueprint2"};
            (function(d){
              var s = d.createElement("script");
              s.src = "https://cdn.memberspace.com/scripts/widgets.js";
              var e = d.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(s,e);
            }(document));
          `}
        </script>
      </Helmet>
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