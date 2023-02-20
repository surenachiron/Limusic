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
      screens: {
        'zero': '140px',
        'smmd': '640px',
        'mdlg': '768px',
        'smmdlg': '640px'
      },
      // e6e6e6
      colors: {
        'blackpro': '#09121c',
        'blackopacitylittle': '#000000d1',
        'blacklight': '#5a5a5a',
        'bluepro': '#3369ff',
        'graypro': '#536274',
        'grayprolight': '#979797',
        'grayprodark': '#323232',
        'orangepro': '#ffbb0c',
        'testbacksecond': 'rgba(32, 32, 32, 0.86)',
        'videobackgroundbeforewhow': '#f3f3f3e0',
        'hoversong': '#363636',
        'textlyrics': '#b9b9b9',
        'deleteafter': '#781f28'
      },
      spacing: {
        '13/100': '13vh',
        '30/100': '35vh',
        '50/100': '50vh',
        '60/100': '60vh',
        '70/100': '70vh',
        '80/100': '80vh',
        '90/100': '90vh',
        '17': '4.5rem',
        '2/7': '46%',
        '2/8': '48%',
        '200': '87%',
        '100': '100%'
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
