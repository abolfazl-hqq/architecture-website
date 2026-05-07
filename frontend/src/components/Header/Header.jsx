// src/components/Header.jsx
import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Logo.jpg'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const services = [
    { name: 'هنری', href: '/#tiles' },
    { name: 'طراحی معماری', href: '/#design' },
    { name: 'ساخت ساختمان', href: '/#construction' }
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // تابع اسکرول نرم
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-background-900 via-background-800 to-background-900 shadow-2xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14">  
              <img src={logo} alt="logo" className="w-full h-full object-cover rounded-full"/>
            </div>  
            <div className="text-3xl font-black tracking-tight">
              <span className="text-primary-500">نو</span>
              <span className="text-white">سان</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <a href="/" className="text-muted-300 hover:text-primary-500 transition-colors duration-300 px-3 py-2 text-button">
              خانه
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center text-muted-300 hover:text-primary-500 transition-colors duration-300 px-3 py-2 text-button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                خدمات ما
                <svg 
                  className={`mr-1.5 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
                  isServicesOpen 
                    ? 'opacity-100 scale-100 translate-y-0 visible' 
                    : 'opacity-0 scale-95 -translate-y-2 invisible'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={(e) => scrollToSection(e, service.href)}
                      className="block px-4 py-3 text-muted-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 hover:pr-6 border-r-2 border-transparent hover:border-primary-500 text-body-sm font-medium"
                    >
                      <div className="flex items-center">
                        <svg className="w-2.5 h-2.5 text-primary-500 ml-2.5" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        {service.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="/#portfolio" 
              onClick={(e) => scrollToSection(e, '/#portfolio')}
              className="text-muted-300 hover:text-primary-500 transition-colors duration-300 px-3 py-2 text-button"
            >
              نمونه کارها
            </a>
            <a href="/about" className="text-muted-300 hover:text-primary-500 transition-colors duration-300 px-3 py-2 text-button">
              درباره ما
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => scrollToSection(e, '/#contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 text-button shadow-lg shadow-primary-600/20"
            >
              تماس با ما
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-300 hover:text-white text-2xl p-2"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-surface-800 rounded-xl mt-2 shadow-xl">
            <a 
              href="/" 
              className="block px-3 py-3 text-muted-300 hover:text-primary-500 hover:bg-surface-700 rounded-lg transition-all duration-200 text-body-md"
            >
              خانه
            </a>
            
            {/* Mobile Services */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-right px-3 py-3 text-muted-300 font-medium hover:bg-surface-700 rounded-lg flex items-center justify-between text-body-md"
              >
                خدمات ما
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {services.map((service, index) => (
                  <a 
                    key={index} 
                    href={service.href}
                    onClick={(e) => scrollToSection(e, service.href)}
                    className="block pr-8 px-3 py-2.5 text-muted-400 hover:text-primary-500 hover:bg-surface-700 rounded-lg transition-all duration-200 text-body-sm"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="/about" 
              className="block px-3 py-3 text-muted-300 hover:text-primary-500 hover:bg-surface-700 rounded-lg transition-all duration-200 text-body-md"
            >
              درباره ما
            </a>
            <a 
              href="/#portfolio" 
              onClick={(e) => scrollToSection(e, '/#portfolio')}
              className="block px-3 py-3 text-muted-300 hover:text-primary-500 hover:bg-surface-700 rounded-lg transition-all duration-200 text-body-md"
            >
              نمونه کارها
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => scrollToSection(e, '/#contact')}
              className="block px-3 py-3 bg-primary-600 text-white rounded-lg text-center mt-2 hover:bg-primary-700 transition-all duration-200 text-body-md"
            >
              تماس با ما
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;