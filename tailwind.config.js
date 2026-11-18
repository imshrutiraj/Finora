/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        finora: {
          bg: '#080F1D',
          surface: '#101B2D',
          card: '#142238',
          elevated: '#1A2B43',
          border: '#1E3252',
          blue: '#3B82F6',
          electric: '#60A5FA',
          teal: '#2DD4BF',
          text: '#F8FAFC',
          muted: '#94A3B8',
          success: '#22C55E',
          warning: '#F59E0B',
          danger: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'card-glow': '0 0 20px -5px rgba(59, 130, 246, 0.15)',
        'teal-glow': '0 0 25px -5px rgba(45, 212, 191, 0.2)',
      }
    },
  },
  plugins: [],
}
