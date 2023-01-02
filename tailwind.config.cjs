/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '940px',
        xl: '1024px',
        '2xl': '940px'
      }
    }
  },
  plugins: [
    require("daisyui"),
    // require("flowbite/plugin"),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  }
};