module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pure-white': '#ffffff',
        'light-blue': '#5A698F',
        'semi-dark-blue': '#161D2F',
        'dark-blue': '#10141E',
        'light-orange': '#FC4747',
      },
      gridTemplateColumns: {
        trending: 'repeat(20, 300px)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
