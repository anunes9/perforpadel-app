/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
};
