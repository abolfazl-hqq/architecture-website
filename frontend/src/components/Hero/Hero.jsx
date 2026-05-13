
function Hero() {
  const backgroundImageUrl = 'https://archline.ir/file/2017/01/11-contemporary-australian-architecture-130117-1018-01.jpg';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 30, 30, 0.7) 0%, rgba(20, 20, 20, 0.8) 100%), url('${backgroundImageUrl}')`,
          backgroundPosition: 'center'
        }}>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-block mt-6">
            <span className="bg-primary-600/30 text-primary-300 px-6 py-2.5 rounded-full text-sm lg:text-base font-semibold backdrop-blur-sm border border-primary-500/50 tracking-wide">
              ✨ طراحی معمارانه | خدمات دکوریشن
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-black tracking-tight leading-tight">
              <div className="text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-lg">
                سریع‌ترین راه به فضای رویایی
              </div>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-surface-100 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md">
            ما فضاهایی طراحی می‌کنیم که شما را متحیر نماید. با ترکیب هنر معماری و تکنولوژی جدید، 
            رویاهای شما را به واقعیت تبدیل می‌کنیم.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="group bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/50 flex items-center justify-center gap-3 text-base lg:text-lg">
              مشاهده پروژه‌های ما
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group bg-white/15 hover:bg-white/25 text-white px-10 py-4 rounded-lg font-bold backdrop-blur-md border border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 flex items-center justify-center gap-3 text-base lg:text-lg">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              تماشای معرفی
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-2xl lg:text-3xl font-bold text-primary-400">۲۰+</div>
              <div className="text-sm lg:text-base text-muted-300">سال تجربه</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-2xl lg:text-3xl font-bold text-primary-400">۵۰۰+</div>
              <div className="text-sm lg:text-base text-muted-300">پروژه انجام شده</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-2xl lg:text-3xl font-bold text-primary-400">۱۰۰%</div>
              <div className="text-sm lg:text-base text-muted-300">رضایت مشتری</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center animate-bounce">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;