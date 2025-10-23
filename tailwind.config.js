/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-mobile': "url('/assets/banner-hero-bg-mobile.png')",
        'hero-bg-desktop': "url('/src/assets/banner-hero-bg-desktop.png')",
        'search-icon-bg':
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaC1pY29uIGx1Y2lkZS1zZWFyY2giPjxwYXRoIGQ9Im0yMSAyMS00LjM0LTQuMzQiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PC9zdmc+')",
      },
      screens: {
        mobile: '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
