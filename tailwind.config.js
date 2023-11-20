/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors:{
      "primary": "#ff6e31",
      "secondary": "#ffb444",
      "tartiary": "#32c072",
      "primary-bg": "#fff3eb",
      "secondary-bg":"#fff7eb",
    }
  },
  },
  plugins: [],
}

