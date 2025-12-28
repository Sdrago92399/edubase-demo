export const AuthService = {
  register: (userData) => {
    const users = JSON.parse(localStorage.getItem('popx_users') || '[]');
    const existingUser = users.find(u => u.email === userData.email);
    
    if (existingUser) {
      return { success: false, error: 'Email already registered' };
    }
    
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('popx_users', JSON.stringify(users));
    localStorage.setItem('popx_current_user', JSON.stringify(newUser));
    
    return { success: true, user: newUser };
  },
  
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('popx_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return { success: false, error: 'Invalid email or password' };
    }
    
    localStorage.setItem('popx_current_user', JSON.stringify(user));
    return { success: true, user };
  },
  
  getCurrentUser: () => {
    const user = localStorage.getItem('popx_current_user');
    return user ? JSON.parse(user) : null;
  },
  
  logout: () => {
    localStorage.removeItem('popx_current_user');
  }
};