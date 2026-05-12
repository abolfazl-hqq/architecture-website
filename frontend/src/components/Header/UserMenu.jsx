import { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!token) {
    return null;
  }

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-200"
      >
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-600 font-bold">
          {user?.username?.charAt(0).toUpperCase() || 'U'}
        </div>
        <span className="text-sm font-medium hidden sm:inline">{user?.username}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm text-gray-700 font-medium">{user?.username}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium"
          >
            خروج
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
