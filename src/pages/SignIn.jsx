import React, { useState } from 'react';
import { AuthService } from '@/utils/AuthService';

const SignIn = ({ onNavigate, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    const result = AuthService.login(formData.email, formData.password);
    
    if (result.success) {
      onLogin(result.user);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2 className="auth-title">Signin to your PopX account</h2>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className="form-input"
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button
            type="submit"
            disabled={!formData.email || !formData.password}
            className={`btn ${formData.email && formData.password ? "btn-primary" : "btn-gray"}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;