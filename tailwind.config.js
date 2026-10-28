/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brat: '#8ACE00',
        ink: '#0A0A0A',
        charcoal: '#1F1F1F',
        paper: '#F5F5F5',
        ash: '#EDEDED',
        mute: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        hard: '6px 6px 0 #000000',
      },
    },
  },
  plugins: [],
}
