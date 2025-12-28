import Landing from '@/pages/Landing';
import Settings from '@/pages/Settings';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { AuthService } from '@/utils/AuthService';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setCurrentPage('settings');
    }
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentPage('settings');
  };

  const handleRegister = (user) => {
    setCurrentUser(user);
    setCurrentPage('settings');
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {currentPage === 'landing' && (
          <Landing onNavigate={handleNavigate} />
        )}
        {currentPage === 'signin' && (
          <SignIn onNavigate={handleNavigate} onLogin={handleLogin} />
        )}
        {currentPage === 'signup' && (
          <SignUp onNavigate={handleNavigate} onRegister={handleRegister} />
        )}
        {currentPage === 'settings' && (
          <Settings user={currentUser} onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default App;