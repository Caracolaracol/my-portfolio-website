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
        chrono: ['ChronoType'],
        tommylight: ['TommyLight'],
        tommyregular: ['TommyRegular'],
        tommybold: ['TommyBold']
      },

    },
    colors: {
      // backgrounds
      negro: 'rgb(12,9,19)',
      negroback: 'rgba(58, 53,71,0.8)',
      // components
      purpural: 'rgb( 44, 40, 68 )',
      purpuralh: 'rgb( 65, 57, 113 )',
      purpuraclaro: 'rgba(60, 41, 120, 0.2)',
      //  text colors
      whitem: 'rgb(170, 170, 170)',
      texth: 'rgb(221,212,237)',
      naranja: 'rgb(147, 94, 48)',
      naranjahover: 'rgb(205, 117, 39)',
      //borders
      naranjaborder: 'rgba(147, 94, 48, 0.377)',
      // 
      orangeclear: 'rgb(184,108,103)'
    },
    screens: {
      
      tablet: '640px',
      // => @media (min-width: 640px) { ... },
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
