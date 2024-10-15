/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'wheat': 'rgb(245, 222, 179)'
      },
      keyframes: {
        
      }
    },

    screens: {
      'sm' : '300px',
      'md' : '640px',
      'lg' : '1024px'
    },
  },
  plugins: [],
};
