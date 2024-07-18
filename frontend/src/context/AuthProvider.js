import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data with the token
      const fetchUser = async () => {
        const res = await fetch('/api/auth/me', {
          headers: { 'x-auth-token': token }
        });
        const data = await res.json();
        setUser(data);
      };
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
