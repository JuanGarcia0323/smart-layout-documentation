import config from './src/starting-point/project.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: config.colors,
    },
  },
  plugins: [],
};
