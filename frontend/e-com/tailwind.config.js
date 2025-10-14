/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#A28B55', // DDF4E7
        'brand-2': '#86AB89', // 67C090
        'brand-3': '#CBE2B5', // 26667F
        'brand-4': '#E7FBE6', // 124170
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
