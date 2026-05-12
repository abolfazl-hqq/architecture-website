import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { authService } from '../../services/authService';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('رمز عبور و تکرار آن مطابقت ندارند');
      setLoading(false);
      return;
    }

    try {
      const data = isLogin
        ? await authService.login(formData.username, formData.password)
        : await authService.register(formData.username, formData.email, formData.password);

      login(data.token, { username: formData.username, email: formData.email || '' });
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-surface-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:mt-24 sm:max-w-xl mx-4 sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-background-900 via-background-800 to-background-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 rounded-full border border-surface-200 bg-surface-100 px-4 py-2 text-sm font-medium text-background-800 shadow-sm transition hover:bg-surface-200"
            >
              بازگشت به خانه
            </button>
          </div>

          <div className="relative mt-6 max-w-md mx-auto text-end">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-background-900">
                {isLogin ? 'ورود به حساب' : 'ایجاد حساب جدید'}
              </h1>
              <p className="text-muted-600 mt-2">
                {isLogin ? 'برای ادامه وارد حساب خود شوید' : 'اطلاعات خود را وارد کنید'}
              </p>
            </div>

            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`min-w-[120px] px-4 py-2 rounded-lg ${isLogin ? 'bg-primary-500 text-white' : 'bg-surface-100 text-muted-600'}`}
              >
                ورود
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`min-w-[120px] px-4 py-2 rounded-lg ${!isLogin ? 'bg-primary-500 text-white' : 'bg-surface-100 text-muted-600'}`}
              >
                ثبت نام
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="divide-y divide-surface-200">
              <div className="py-8 text-base leading-6 space-y-4 text-muted-700 sm:text-lg sm:leading-7">
                {!isLogin && (
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-surface-300 text-background-900 focus:outline-none focus:border-primary-500"
                      placeholder="آدرس ایمیل"
                      required={!isLogin}
                    />
                    <label
                      htmlFor="email"
                      className="absolute right-0 -top-3.5 text-muted-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-muted-600 peer-focus:text-sm"
                    >
                      آدرس ایمیل
                    </label>
                  </div>
                )}
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-surface-300 text-background-900 focus:outline-none focus:border-primary-500"
                    placeholder="نام کاربری"
                    required
                  />
                  <label
                    htmlFor="username"
                    className="absolute right-0 -top-3.5 text-muted-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-muted-600 peer-focus:text-sm"
                  >
                    نام کاربری
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-surface-300 text-background-900 focus:outline-none focus:border-primary-500"
                    placeholder="رمز عبور"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute right-0 -top-3.5 text-muted-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-muted-600 peer-focus:text-sm"
                  >
                    رمز عبور
                  </label>
                </div>
                {!isLogin && (
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-surface-300 text-background-900 focus:outline-none focus:border-primary-500"
                      placeholder="تکرار رمز عبور"
                      required={!isLogin}
                    />
                    <label
                      htmlFor="confirmPassword"
                      className="absolute right-0 -top-3.5 text-muted-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-muted-600 peer-focus:text-sm"
                    >
                      تکرار رمز عبور
                    </label>
                  </div>
                )}
                <div className="relative pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary-500 hover:bg-primary-400 text-white rounded-md px-6 py-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'در حال پردازش...' : (isLogin ? 'ورود' : 'ثبت نام')}
                  </button>
                </div>
              </div>
            </form>

            <div className="w-full flex justify-center mt-6">
              <button className="flex items-center bg-white border border-surface-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-background-800 hover:bg-surface-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                  <title>Google-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Color-" transform="translate(-401.000000, -860.000000)">
                      <g id="Google" transform="translate(401.000000, 860.000000)">
                        <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path>
                        <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path>
                        <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path>
                        <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>ادامه با گوگل</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;