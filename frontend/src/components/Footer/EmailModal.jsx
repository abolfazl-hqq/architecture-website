'use client';

import { useEffect } from 'react';

function EmailModal({ isOpen, onClose, title, message, type = 'success' }) {
  // بستن مودال با کلید Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // جلوگیری از اسکرول صفحه
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const icons = {
    success: (
      <svg className="w-16 h-16 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    error: (
      <svg className="w-16 h-16 text-primary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    info: (
      <svg className="w-16 h-16 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-400 hover:text-muted-600 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="mb-6">
          {icons[type]}
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-black text-background-900 mb-3">
            {title}
          </h3>
          <p className="text-muted-600 leading-relaxed mb-6">
            {message}
          </p>

          {/* Button */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-l from-background-900 to-background-800 hover:from-background-800 hover:to-background-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
          >
            متوجه شدم
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-success-500/10 to-transparent rounded-tr-3xl -z-10" />
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        div.relative.bg-white {
          animation: modalIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default EmailModal;