import ServiceCard from "./ServiceCard";
import { serviceStyles } from '../../constants/colors';

function Services() {
  const services = [
    {
      id: 'tiles',
      title: 'هنری',
      subtitle: 'زیبایی در جزئیات',
      description: 'انواع کاشی‌های مدرن، کلاسیک و لوکس با بهترین کیفیت و قیمت رقابتی',
      color: serviceStyles.tiles.gradient,
      accentClass: serviceStyles.tiles.accentClass,
      backgroundImage: 'https://ohaddeco.com/wp-content/uploads/2023/11/a0979ca8d7ea886f468b267bdd0d4a89.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect x="2" y="2" width="8" height="8" rx="1" />
          <rect x="14" y="2" width="8" height="8" rx="1" />
          <rect x="2" y="14" width="8" height="8" rx="1" />
          <rect x="14" y="14" width="8" height="8" rx="1" />
        </svg>
      ),
      features: [
        'کاشی سرامیکی',
        'کاشی پرسلانی',
        'کاشی موزاییکی',
        'مشاوره رایگان'
      ]
    },
    {
      id: 'design',
      title: 'طراحی معماری',
      subtitle: 'ایده‌های خلاقانه',
      description: 'طراحی‌های منحصر به فرد با جدیدترین متدهای معماری دنیا',
      color: serviceStyles.design.gradient,
      accentClass: serviceStyles.design.accentClass,
      backgroundImage: 'https://t2tstatics-public2.tarh2tarh.com/blog/cover/7ffea537-7302-485a-b9f1-1e65860e4e12/original/22702fbe-9193-4885-8f66-6806d4a02730.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      features: [
        'طراحی داخلی',
        'طراحی نما',
        'مدل‌سازی سه بعدی',
        'طراحی فضای سبز'
      ]
    },
    {
      id: 'construction',
      title: 'ساخت ساختمان',
      subtitle: 'اجرای بی‌نقص',
      description: 'اجرای پروژه‌های ساختمانی با بالاترین استانداردهای مهندسی',
      color: serviceStyles.construction.gradient,
      accentClass: serviceStyles.construction.accentClass,
      backgroundImage: 'https://ipanel.istgah.com/images/2023/08/13/2991936_cIHhev_r.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
        </svg>
      ),
      features: [
        'ساخت مسکونی',
        'ساخت تجاری',
        'بازسازی حرفه‌ای',
        'نظارت مهندسی'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-surface-50 to-surface-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-background-900 mb-4 tracking-tight">
            خدمات ما
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-l from-primary-500 to-accent-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-600 max-w-2xl mx-auto leading-relaxed">
            ارائه خدمات کامل معماری و ساختمانی با بهترین کیفیت
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard service = {service} index= {index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;