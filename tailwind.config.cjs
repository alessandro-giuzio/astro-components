/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
      },
    },
  },
  plugins: [],
};
