module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './asserts/**/*.{png,jpg,jpeg}',

  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      transformOrigin: {
        zero: '0 0 ',
      },
      transitionProperty: {
        width: 'width',
      },
      backgroundImage: {
        first: "url('./asserts/Icons/background/1.jpg')",
        second: "url('./asserts/Icons/background/4-6.jpg')",
        three: "url('./asserts/Icons/background/6.jpg')",

      },
      colors: {
        orange: '#F57328',
        'main-cyan': '#00ffff',
        'main-voilet': '#9c31fe',
        'primary-blue': '#5956e9',
        'hover-blue': '#5a66f9',
        'regal-blue': '#243c5a',
        'nft-dark': '#24252D',
        'nft-gray-1': '#E3E1E3',
        'nft-gray-2': '#888888',
        'nft-gray-3': '#4F4F4F',
        'nft-black-1': '#2D2E36',
        'nft-black-2': '#1B1A21',
        'nft-black-3': '#2A2D3A',
        'nft-black-4': '#24252D',
        'nft-red-violet': '#DA18A3',
        'file-active': '#2196f3',
        'file-accept': '#00e676',
        'file-reject': '#ff1744',
        green: 'green',
        'text-blue': '#5956df',
        red: '#C21010',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        navhover: {
          '0%': {

            borderBottomWidth: '0%',
            borderBottom: '5px',
          },
          '100%': {
            borderBottomWidth: '100%',
            borderBottom: '5px',
          },
        },
      },
      animation: {
        navhover: 'navhover 1s ease-in-out',
      },
    },
    screens: {
      lg: { max: '1800px' },
      xmd: { max: '1200px' },
      md: { max: '990px' },
      xsm: { max: '900px' },
      hsm: { max: '800px' },
      sm: { max: '700px' },
      xs: { max: '500px' },
      minmd: { min: '990px' },
      minlg: '2100px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      black: ['Gilroy-Black', 'sans-serif'],
      blackItalic: ['Gilroy-Black-Italic', 'sans-serif'],
      bold: ['Gilroy-Bold', 'sans-serif'],
      boldItalic: ['Gilroy-Bold-Italic', 'sans-serif'],
      extraBold: ['Gilroy-Extra-Bold', 'sans-serif'],
      extraBoldItalic: ['Gilroy-Extra-Bold-Italic', 'sans-serif'],
      heavy: ['Gilroy-Heavy', 'sans-serif'],
      heavyItalic: ['Gilroy-Heavy-Italic', 'sans-serif'],
      light: ['Gilroy-Light', 'sans-serif'],
      medium: ['Gilroy-Medium', 'sans-serif'],
      lightItalic: ['Gilroy-Light-Italic', 'sans-serif'],
      mediumItalic: ['Gilroy-Medium-Italic', 'sans-serif'],
      regular: ['Gilroy-Regular', 'sans-serif'],
      regularItalic: ['Gilroy-Regular-Italic', 'sans-serif'],
      semibold: ['Gilroy-Semibold', 'sans-serif'],
      thin: ['Gilroy-Thin', 'sans-serif'],
      thinItalic: ['Gilroy-Thin-Italic', 'sans-serif'],
      ultraLight: ['Gilroy-Ultra-Light', 'sans-serif'],
      ultraLightItalic: ['Gilroy-Ultra-Light-Itali', 'sans-serif'],
      Libre: ['LibreBaskerville', 'sans-serif'],
      proxima: ['ProximaNova', 'sans-serif'],

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
