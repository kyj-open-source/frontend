/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'theme': 'var(--theme)'
      }
    },
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
}

