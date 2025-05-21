module.exports = {
  darkMode: 'class', // Используем класс для переключения темы
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Для Next.js 13+
    './styles/**/*.{js,ts,jsx,tsx}', // Если есть глобальные стили
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};