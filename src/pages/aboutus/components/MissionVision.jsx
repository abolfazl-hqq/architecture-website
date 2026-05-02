import MissionCard from "./MissionCard";

export default function MissionVision() {
  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <MissionCard
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="ماموریت ما"
            description={
              <p className="mt-6 text-base leading-8 text-muted-600">
                ما فضاهای معماری خلق می‌کنیم که عملکرد، زیبایی و تجربه انسانی را با هم ترکیب می‌کند.
                هر پروژه برای ما فرصتی است تا کیفیت، نوآوری و اصالت را در کنار هم قرار دهیم.
              </p>
            }
            featuresList={[
              'تمرکز بر راه‌حل‌های کاربرمحور و قابل اجرا',
              'احترام به بوم‌شناسی و فرهنگ هر مکان',
              'حفظ تعادل بین زیبایی و عملکرد در هر جزئیات',
            ]}
          />

          <MissionCard
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
            title="چشم‌انداز ما"
            description={
              <p className="mt-6 text-base leading-8 text-muted-600">
                ما می‌خواهیم نام نوسان به عنوان پیشروترین شرکت معماری شناخته شود،
                شرکتی که کیفیت، مدرن بودن و استحکام را در هر پروژه نشان می‌دهد.
              </p>
            }
            featuresList={[
              'نوآوری فراتر از مرزهای رایج',
              'پایداری اقتصاد و محیط زیست',
              'تحقق پروژه‌های انسانی و الهام‌بخش',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
