/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        'link-hover': 'var(--text-link-hover)'
      },
      backgroundColor: {
        primary: 'rgba(var(--bg-primary))',
        'primary-blur': 'var(--bg-primary-blur)',
        'on-primary': 'var(--bg-on-primary)',
        code: 'var(--bg-code)'
      },
      borderColor: {
        primary: 'var(--border-primary)',
        code: 'var(--border-code)',
        'on-primary': 'var(--border-on-primary)'
      }
    }
  },
  plugins: []
}
