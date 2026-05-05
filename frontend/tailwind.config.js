import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        accent: colors.sky,
        success: colors.emerald,
        muted: colors.slate,
        background: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['IRANSansX', 'system-ui', 'sans-serif'],
        display: ['IRANSansX', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.2', fontWeight: '900' }],
        'display-lg': ['3.75rem', { lineHeight: '1.3', fontWeight: '800' }],
        'display-md': ['2.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-xl': ['2rem', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.8', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.8', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.7', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}

