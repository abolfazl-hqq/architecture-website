export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-950 via-background-900 to-background-950 text-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-300 ring-1 ring-primary-300/20">
                تجربه‌ای فراتر از طراحی
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                معماری هوشمند، فضاهایی با هویت ماندگار
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-300 sm:text-xl">
                تیم نوسان با بیش از ۲۰ سال تجربه، فضاهایی را طراحی می‌کند که
                هم زیبا، هم کاربردی و هم با روح محیطی هماهنگ باشند. هر پروژه برای ما
                فرصتی است تا معماری را به سطحی تازه برسانیم.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'طراحی تخصصی', value: 'تحلیل دقیق نیازها' },
                { label: 'پایداری', value: 'مواد باکیفیت و دوست‌دار محیط' },
                { label: 'هماهنگی', value: 'یکپارچگی در همه مراحل' },
                { label: 'پشتیبانی', value: 'همراهی تا تحویل نهایی' },
              ].map((item, index) => (
                <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-background-950/10 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-400">{item.label}</p>
                  <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white transition hover:bg-primary-400 hover:shadow-[0_20px_50px_rgba(244,63,94,0.25)]">
                شروع پروژه
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                درخواست مشاوره
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-900/90 p-8 shadow-2xl shadow-background-950/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.25),transparent_30%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_30%)]" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-surface-100">
                    شاخص‌های برتر نوسان
                  </span>
                  <div className="mt-8 space-y-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-sm text-muted-300">پروژه‌های منتخب</h3>
                      <p className="mt-3 text-3xl font-black text-white">۵۰۰+</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-sm text-muted-300">رضایت مشتری</h3>
                      <p className="mt-3 text-3xl font-black text-white">۹۸٪</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  {['طراحی شهری', 'بازسازی لوکس', 'ساختمان مسکونی', 'دفتر کار مدرن'].map((item, index) => (
                    <div key={index} className="rounded-3xl border border-white/10 bg-background-950/70 px-5 py-4 text-sm text-muted-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
