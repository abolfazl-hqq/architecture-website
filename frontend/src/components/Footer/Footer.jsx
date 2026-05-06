// src/components/Footer/Footer.jsx
'use client';

import { useState } from 'react';
import EmailModal from './EmailModal';

function Footer() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    type: 'success'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // اعتبارسنجی ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setModalContent({
        title: 'خطا!',
        message: 'لطفاً آدرس ایمیل خود را وارد کنید.',
        type: 'error'
      });
      setIsModalOpen(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setModalContent({
        title: 'ایمیل نامعتبر!',
        message: 'لطفاً یک آدرس ایمیل معتبر وارد کنید. مثال: name@example.com',
        type: 'error'
      });
      setIsModalOpen(true);
      return;
    }

    // اینجا می‌تونی ایمیل رو به سرور بفرستی
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
    
    // نمایش پیام موفقیت
    setModalContent({
      title: 'ثبت نام موفق!',
      message: 'ایمیل شما با موفقیت در خبرنامه ثبت شد. به زودی اخبار و پروژه‌های جدیدمان را برای شما ارسال خواهیم کرد.',
      type: 'success'
    });
    setIsModalOpen(true);
    setEmail(''); // پاک کردن input
  };

  return (
    <>
      <footer className="relative bg-white text-slate-900 shadow-[0_-20px_60px_-30px_rgba(15,23,42,0.18)] ring-1 ring-slate-100">
        {/* Top Wave */}
        <div className="absolute -top-1 left-0 right-0 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#0F172A" fillOpacity="1" d="M0,70L80,61.3C160,53,320,35,480,40C640,45,800,75,960,80C1120,85,1280,73,1360,67.7L1440,60L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="text-3xl font-black">
                <span className="text-primary-600">نو</span>
                <span className="text-slate-900">سان</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                ما با بیش از ۲۰ سال تجربه در زمینه معماری و ساختمان، همراه شما در خلق فضاهای رویایی هستیم.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-surface-100 text-slate-700 hover:bg-primary-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="اینستاگرام">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-surface-100 text-slate-700 hover:bg-accent-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="توییتر">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-surface-100 text-slate-700 hover:bg-accent-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="لینکدین">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-surface-100 text-slate-700 hover:bg-success-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="تلگرام">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.123c-.033 1.25-.293 2.515-.624 3.743-.426 1.588-1.199 3.102-2.467 4.299-1.074 1.014-2.438 1.553-3.909 1.656-1.893.133-3.881-.541-5.133-1.954-.656-.74-1.086-1.621-1.31-2.568-.223-.945-.268-1.916-.143-2.873.129-.987.449-1.942.975-2.78.384-.611.864-1.159 1.463-1.578.553-.387 1.196-.606 1.852-.606.457 0 .758.29.896.719.198.618.338 1.257.392 1.907.063.76.047 1.527-.056 2.283-.077.567-.198 1.132-.403 1.671-.12.316-.273.627-.509.889-.056.062-.129.08-.207.046-.143-.063-.226-.18-.249-.334-.06-.391-.011-.787.04-1.179.104-.793.178-1.59.2-2.389.015-.556-.024-1.115-.133-1.663-.083-.416-.254-.695-.719-.603-.731.146-1.309.612-1.747 1.182-.67.87-1.02 1.893-1.14 2.963-.133 1.182.051 2.358.524 3.441.427.977 1.112 1.757 2.015 2.283 1.217.709 2.578.876 3.945.565 1.567-.357 2.789-1.303 3.657-2.642.931-1.438 1.278-3.063 1.343-4.731.037-.951-.108-1.899-.432-2.795-.254-.703-.784-.789-1.256-.362-.611.552-.91 1.269-1.032 2.053-.067.432-.061.876-.15 1.306-.119.576-.895.465-.869-.107.042-.943.212-1.886.543-2.78.264-.713.731-1.343 1.399-1.662.632-.302 1.525-.109 1.919.562.345.588.528 1.254.599 1.937z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block text-slate-900">
                دسترسی سریع
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-slate-600 hover:text-primary-600 transition-colors duration-300 flex items-center group">
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">←</span>
                    خانه
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-600 hover:text-primary-600 transition-colors duration-300 flex items-center group">
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">←</span>
                    خدمات ما
                  </a>
                </li>
                <li>
                  <a href="#tiles" className="text-slate-600 hover:text-primary-600 transition-colors duration-300 pr-4">
                    فروش کاشی
                  </a>
                </li>
                <li>
                  <a href="#design" className="text-slate-600 hover:text-primary-600 transition-colors duration-300 pr-4">
                    طراحی معماری
                  </a>
                </li>
                <li>
                  <a href="#construction" className="text-slate-600 hover:text-primary-600 transition-colors duration-300 pr-4">
                    ساخت ساختمان
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-slate-600 hover:text-primary-600 transition-colors duration-300 flex items-center group">
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">←</span>
                    نمونه کارها
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div id='contact'>
              <h3 className="text-xl font-bold mb-6 relative inline-block text-slate-900">
                اطلاعات تماس
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary-600 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-slate-600 text-md">مشهد، شهرک غرب</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-slate-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-slate-500 text-sm">۰۹۱۲-۳۴۵۶۷۸۹</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-slate-600">info@navasan.ir</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-slate-600">شنبه تا پنجشنبه</p>
                    <p className="text-slate-500 text-sm">۹:۰۰ صبح تا ۱۸:۰۰ عصر</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block text-slate-900">
                خبرنامه
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary-600 rounded-full"></span>
              </h3>
              <p className="text-slate-600 mb-4">
                برای دریافت جدیدترین اخبار و پروژه‌ها، ایمیل خود را وارد کنید:
              </p>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-surface-100 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300 text-slate-900 placeholder-slate-400 text-left"
                    dir="ltr"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 p-2 rounded-lg transition-all duration-300 hover:scale-105"
                    aria-label="ثبت ایمیل"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-500 text-xs">
                  با ثبت ایمیل، با قوانین و مقررات ما موافقت می‌کنید.
                </p>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-slate-200"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © ۱۴۰۵ تمامی حقوق محفوظ است | طراحی و توسعه توسط{" "}
              <span className="text-primary-600 font-medium">نوسان</span>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors duration-300">قوانین و مقررات</a>
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors duration-300">حریم خصوصی</a>
              <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors duration-300">سوالات متداول</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg shadow-primary-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="رفتن به بالای صفحه"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </footer>

      {/* Modal */}
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
        type={modalContent.type}
      />
    </>
  );
}

export default Footer;