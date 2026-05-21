/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./*.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
    
      borderRadius: { '4xl':'2rem', '5xl':'2.5rem', '6xl':'3rem' },
    }
  },
  plugins: [],
}