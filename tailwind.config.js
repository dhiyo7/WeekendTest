module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herro': "url('/public/BG_1.svg')",
      },
      backgroundColor: {
        'primary': '#EEBECE',
        'secondary': '#0B24FB'
      },
      textColor: {
        'second': '#0B24FB'
      },
      marginTop: {
        'hero': '84px',
        '240': '240px'
      },

      height: {
        '110': '120vh',
        '591': '591px',
        '1473': '1468px',
        '2038': '2038px'

      },
      width: {
        '619': '619px'
      }
    },
  },
  plugins: [],
}
