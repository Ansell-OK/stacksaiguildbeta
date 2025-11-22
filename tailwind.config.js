/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#F9FAFB', // Very light gray/white
          dark: '#0F1121', // Deep Navy/Black
          card: '#1A1C2E', // Dark card background
          primary: '#4F46E5', // Indigo
          accent: '#818CF8', // Soft Indigo
          lavender: '#EEF2FF',
          highlight: '#06B6D4', // Cyan
          muted: '#64748B', // Slate 500
        }
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}