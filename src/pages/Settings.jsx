import React from "react";
import { User, Camera } from 'lucide-react';

const Settings = ({ user, onLogout }) => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <h2 className="settings-title">Account Settings</h2>
      </header>
        
      <div className="settings-content">
        <div className="user-profile">
          <div className="avatar-container">
            <div className="avatar">
              <User className="avatar-icon" size={32} />
            </div>
            <div className="status-badge" onClick={() => console.log("Camera clicked")}>
              <div className="icon-circle">
                <Camera size={12} strokeWidth={3} color="white" />
              </div>
            </div>
          </div>
          <div className="user-info">
            <h3>{user?.fullName || 'User'}</h3>
            <p>{user?.email || 'user@example.com'}</p>
          </div>
        </div>
        
        <p className="settings-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        
        <button onClick={onLogout} className="btn btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
