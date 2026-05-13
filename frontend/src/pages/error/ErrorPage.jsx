
export default function ErrorPage() {
    return (
        <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gradient-to-l from-surface-50 to-surface-100">
            <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
                <h1 className="text-8xl md:text-9xl font-bold text-primary-500">404</h1>
                <div className="h-1 w-16 rounded bg-primary-500 my-5 md:my-7"></div>
                <p className="text-2xl md:text-3xl font-bold text-background-900">صفحه پیدا نشد</p>
                <p className="text-sm md:text-base mt-4 text-muted-600 max-w-md text-center">صفحه‌ای که دنبال آن می‌گردید ممکن است حذف شده باشد، نام آن تغییر کرده باشد، یا به طور موقت در دسترس نباشد.</p>
                <div className="flex items-center gap-4 mt-6">
                    <a href="/" className="bg-background-900 hover:bg-background-800 px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
                        بازگشت به خانه
                    </a>
                    <a href="#" className="border border-surface-300 px-7 py-2.5 text-background-800 rounded-md active:scale-95 transition-all hover:bg-surface-50">
                        تماس با پشتیبانی
                    </a>
                </div>
            </div>
        </div>
    );
};