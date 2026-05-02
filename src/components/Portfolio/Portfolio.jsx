import { useState } from "react";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'همه پروژه‌ها' },
    { id: 'residential', name: 'مسکونی' },
    { id: 'commercial', name: 'تجاری' },
    { id: 'interior', name: 'طراحی داخلی' }
  ];

  const projects = [
    {
      id: 1,
      title: 'ویلای مدرن شمال',
      category: 'residential',
      image: 'https://dezharco.com/wp-content/uploads/2021/05/portada_Untitled_Panorama54.jpg',
      description: 'طراحی و اجرای ویلای مدرن با نمای شیشه‌ای'
    },
    {
      id: 2,
      title: 'مجتمع تجاری مرکزی',
      category: 'commercial',
      image: 'https://archline.ir/file/2020/05/iranian-commercial-building-design-idea-7238265-26.jpg',
      description: 'ساخت مجتمع تجاری ۵ طبقه'
    },
    {
      id: 3,
      title: 'آپارتمان لوکس',
      category: 'residential',
      image: 'https://archline.ir/file/2020/06/iranian-villa-design-idea-8255-2.jpg',
      description: 'طراحی داخلی آپارتمان ۲۰۰ متری'
    },
    {
      id: 4,
      title: 'دفتر کار مدرن',
      category: 'interior',
      image: 'https://archline.ir/file/2020/05/iranian-building-design-idea-739372-5.jpg',
      description: 'طراحی داخلی دفتر کار شرکتی'
    },
    {
      id: 5,
      title: 'هتل تجاری مسکونی',
      category: 'commercial',
      image: 'https://archline.ir/file/2020/05/iranian-office-building-design-idea-782096-1.jpg',
      description: 'بازسازی و طراحی هتل'
    },
    {
      id: 6,
      title: 'پنت‌هاوس دوبلکس',
      category: 'residential',
      image: 'https://archline.ir/file/2020/04/iranian-building-design-idea-623926-5.jpg',
      description: 'طراحی و اجرای پنت‌هاوس لوکس'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-background-900" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            نمونه کارهای ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-primary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="text-xl text-muted-400 max-w-2xl mx-auto">
            منتخبی از بهترین پروژه‌های اجرا شده
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50 scale-105'
                  : 'bg-surface-800 text-muted-400 hover:bg-surface-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <button className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300">
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    مشاهده پروژه
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  {categories.find(cat => cat.id === project.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm border border-white/20 transition-all duration-300 inline-flex items-center hover:scale-105">
            مشاهده همه پروژه‌ها
            <svg className="mr-2 w-5 h-5 group-hover:mr-4 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
