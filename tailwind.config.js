/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#8c4af2',
        secondary: '#6b56f6',
        tertiary: '#DFDAFE',
        danger: '#ff394b',
        success: '#5df888',
        warning: '#f4901f',
        info: '#1bd084',
        background: '#F8F7FF',
        text: {
          default: '#1A1A1A',
          description: '#6B6B6B',
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
