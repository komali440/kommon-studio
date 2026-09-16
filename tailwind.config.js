/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B22',
          'orange-hover': '#E05510',
          navy: '#183B4E',
          darknavy: '#0C2230',
          cream: '#FFF5EB',
          'cream-dark': '#F5EBE0',
          charcoal: '#101214',
          gray: '#E8E5E0',
          'soft-gray': '#F4F2EE',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'orange-glow': '0 10px 30px -10px rgba(255, 107, 34, 0.4)',
        'navy-glow': '0 20px 40px -15px rgba(24, 59, 78, 0.25)',
        'card-subtle': '0 4px 20px rgba(16, 18, 20, 0.04)',
        'card-hover': '0 20px 40px rgba(16, 18, 20, 0.08)',
      }
    },
  },
  plugins: [],
}
