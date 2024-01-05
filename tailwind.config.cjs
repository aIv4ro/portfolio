/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      textColor: {
        primary: 'black',
        primaryDark: '#e0dfdf',
        linkHover: '#0d5dc1',
        linkHoverDark: '#4497ff'
      },
      backgroundColor: {
        primary: '#f6f6f6',
        primaryDark: '#2c3333',
        onPrimary: '#e5e5e5',
        onPrimaryDark: '#282828'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
