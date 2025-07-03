/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  animation: {
    gradient: "gradient 6s ease infinite",
  },
  keyframes: {
    gradient: {
      "0%, 100%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
    },
  },
  backgroundSize: {
    'gradient': '200% 200%',
  }
},
animation: {
  'pulse-slow': 'pulse 6s ease-in-out infinite',
},
darkMode: 'class',



}
