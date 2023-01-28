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
      colors: {
        'blackpro': '#09121c',
        'blackopacitylittle': '#000000d1',
        'blacklight': '#5a5a5a',
        'bluepro': '#3369ff',
        'graypro': '#536274',
        'grayprolight': '#979797',
        'grayprodark': '#323232',
        'orangepro': '#ffbb0c',
        'testbacksecond': 'rgba(32, 32, 32, 0.86)'
      },
      spacing: {
        '13/100': '13vh',
        '30/100': '35vh',
        '50/100': '50vh',
        '80/100': '80vh',
        '17': '4.5rem',
        '2/7': '46%',
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
