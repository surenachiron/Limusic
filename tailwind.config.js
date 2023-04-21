/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./public/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: { 'zero': '140px' },
      // e6e6e6
      colors: {
        'blackpro': '#09121c',
        'blackopacitylittle': '#000000d1',
        'blacklight': '#5a5a5a',
        'bluepro': '#3369ff',
        'graypro': '#536274',
        'grayprolight': '#979797',
        'grayprodark': '#323232',
        'grayprosearch': '#8a929a',
        'testbacksecond': 'rgba(32, 32, 32, 0.86)',
        'videobackgroundbeforewhow': '#484848c7',
        'hoversong': '#363636',
        'textlyrics': '#b9b9b9',
      },
      spacing: {
        '60/100': '60vh',
        '70/100': '70vh',
        '80/100': '80vh',
      },
      borderWidth: {
        '1': '1px'
      },
      fontSize: {
        '1': '1px'
      }
    },
  },
  plugins: [],
  darkMode: "class",
  important: true
}
