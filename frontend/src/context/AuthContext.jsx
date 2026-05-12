// Context for authentication state management
import { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = authService.getToken();
    if (savedToken) {
      setToken(savedToken);
    }
    setLoading(false);
  }, []);

  const login = (token, userData) => {
    authService.setToken(token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    authService.logout();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
