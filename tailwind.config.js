/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#8B5CF6',
        secondary: '#F59E0B',
        accent: '#EC4899',
        surface: '#1F2937',
        background: '#111827',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#8B5CF6',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { 'box-shadow': '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { 'box-shadow': '0 0 40px rgba(139, 92, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}