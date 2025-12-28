import React from 'react';

const Landing = ({ onNavigate }) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <button
          onClick={() => onNavigate('signup')}
          className="btn btn-primary"
        >
          Create Account
        </button>
        
        <button
          onClick={() => onNavigate('signin')}
          className="btn btn-secondary"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;