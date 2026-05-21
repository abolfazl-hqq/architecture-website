import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import { valueAccents } from "../../constants/colors";
import Header from "../../components/Header/Header";
/* eslint-disable react-refresh/only-export-components */
export const metadata = {
  title: 'درباره ما | نوسان',
  description: 'شرکت معماری نوسان با بیش از ۲۰ سال تجربه در زمینه طراحی معماری، فروش کاشی و ساخت ساختمان. آشنایی با تیم حرفه‌ای و خدمات ما.',
  keywords: 'درباره نوسان, شرکت معماری, تاریخچه نوسان, تیم معماری',
  openGraph: {
    title: 'درباره ما | شرکت معماری نوسان',
    description: 'آشنایی با شرکت معماری نوسان و تیم حرفه‌ای ما',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Hero />

      <MissionVision />

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-background-950 via-background-900 to-background-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '۲۰+', label: 'سال تجربه', icon: '📅' },
              { number: '۵۰۰+', label: 'پروژه موفق', icon: '🏗️' },
              { number: '۱۰۰+', label: 'مشتری راضی', icon: '😊' },
              { number: '۵۰+', label: 'تیم حرفه‌ای', icon: '👥' },
            ].map((stat, index) => (
              <div key={index} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-xl shadow-background-950/30 backdrop-blur-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-3xl">
                  {stat.icon}
                </div>
                <p className="mt-6 text-4xl font-black text-white">{stat.number}</p>
                <p className="mt-3 text-base text-muted-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-background-900 mb-4">ارزش‌های ما</h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-600">
              اصولی که هر روز با آن‌ها کار می‌کنیم تا پروژه‌هایمان هم پایدار، هم دقیق و هم الهام‌بخش باشند.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'خلاقیت و نوآوری',
                description: 'پیدا کردن راهکارهای نوآورانه برای خلق فضاهایی منحصربه‌فرد.',
                accent: valueAccents.creativity
              },
              {
                title: 'کیفیت و دقت',
                description: 'توجه ویژه به هر جزئیات در طراحی، اجرا و نظارت پروژه.',
                accent: valueAccents.quality
              },
              {
                title: 'تعهد و مسئولیت',
                description: 'انجام کار با تمام توان تا رضایت نهایی مشتری حاصل شود.',
                accent: valueAccents.commitment
              },
            ].map((value, index) => (
              <div key={index} className="group overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${value.accent}`} />
                <h3 className="mt-6 text-2xl font-black text-background-900">{value.title}</h3>
                <p className="mt-4 text-muted-600 leading-8">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-background-900 via-background-950 to-background-900 text-white py-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-72 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-300/80">همین امروز شروع کنید</p>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            برای طراحی پروژه‌ای فراتر از انتظار همراه ما باشید
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-300">
            با تجربه و دانش تیم نوسان، طراحی معماری شما به مجموعه‌ای تبدیل می‌شود که علاوه‌بر زیبایی، عملکرد بالا و ارزش پایدار هم دارد.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-base font-bold text-white transition hover:bg-primary-400 hover:shadow-[0_20px_50px_rgba(244,63,94,0.3)]">
              تماس با ما
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
              درخواست پیش فاکتور
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
