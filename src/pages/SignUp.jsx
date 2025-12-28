import React, { useState } from 'react';
import { AuthService } from '@/utils/AuthService';

const SignUp = ({ onNavigate, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: null
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleAgencyChange = (value) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email || 
        !formData.password || formData.isAgency === null) {
      setError('Please fill in all required fields');
      return;
    }
    
    const result = AuthService.register(formData);
    
    if (result.success) {
      onRegister(result.user);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2 className="auth-title">Create your PopX account</h2>
        
        <form onSubmit={handleSubmit} className="form signup-form">
          <div className="form-group">
            <label className="form-label">Full Name<span className="required-star">*</span></label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Phone number<span className="required-star">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email address<span className="required-star">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password<span className="required-star">*</span></label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Company name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label-dark">Are you an Agency?<span className="required-star">*</span></label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === true}
                  onChange={() => handleAgencyChange(true)}
                  className="radio-input"
                />
                <span className="radio-text">Yes</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === false}
                  onChange={() => handleAgencyChange(false)}
                  className="radio-input"
                />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button
            type="submit"
            className={`btn signup-btn ${
              formData.fullName &&
              formData.phone &&
              formData.email &&
              formData.password &&
              (formData.isAgency === true || formData.isAgency === false)
                ? "btn-primary"
                : "btn-gray"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;