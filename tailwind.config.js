module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'borahe': '#E6D0DE',
        'cream': '#FFD2A2',
        'regal-blue': '#243c5a',
        'brown': {
          50 : '#DDBC9B',
          100 : '#C7998C',
          150 : '#E0B4AD',
          200 : '#C7998C',
          250 : '#E9B3A3',
          300 : '#551A25',
        },
        'dark-blue' : '#0d436f',
        'obrown' : '#ec4d13'
        // 'brown': '#E6D0DE',
        // 'choco': '#C7998C',
      },
      backgroundImage: {
        'floral-pattern' : "url(/src/images/pink-flower.jpg)"
      },
    },
  },
  plugins: [],
}