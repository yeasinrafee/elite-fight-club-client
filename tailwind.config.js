const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      // Here you can customize colors, fonts, spacing, etc.
      colors: {
        customHoverColor: '#f59e0b', // Example custom hover color (orange)
        customPrimary: '#1d4ed8', // Example custom primary color (blue)
      },
    },
  },
  plugins: [require('daisyui'), flowbite.plugin()],
};
