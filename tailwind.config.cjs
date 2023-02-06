/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tommy: ['Tommy'],
        chrono: ['ChronoType']
      }
    },
    colors: {
      // backgrounds
      negro: 'rgb(12,9,19)',
      // components
      purpural: 'rgba(48, 31, 104, 0.385)',
      purpuralh: 'rgb(30, 18, 71)',
      //  text colors
      whitem: 'rgb(198, 198, 198)',
      texth: 'rgb(221,212,237)',
      naranja: 'rgb(147, 94, 48)',
      naranjahover: 'rgb(205, 117, 39)',
      //borders
      naranjaborder: 'rgba(147, 94, 48, 0.377)'
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
