/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px'
    },
  },
  plugins: [],
};
