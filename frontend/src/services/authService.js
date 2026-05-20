// API service for authentication
const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const authService = {
  register: async (username, email, password, passwordConfirm) => {
    const response = await fetch(`${API_BASE_URL}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirm: passwordConfirm
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error('خطا در ثبت نام');
      error.response = { data };
      throw error;
    }

    return data;
  },

  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.detail || 'نام کاربری یا رمز عبور اشتباه است';
      const error = new Error(errorMessage);
      error.response = { data };
      throw error;
    }

    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  setToken: (token) => {
    localStorage.setItem('token', token);
  },
};