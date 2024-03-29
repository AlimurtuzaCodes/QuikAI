/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      primary: '#7E92F8',
      secondary: {
        900: '#335081',
        800: '#47628E',
        700: '#5C739A',
        600: '#7085A7',
        500: '#8596B3',
        400: '#99A8C0',
        300: '#ADB9CD',
        200: '#C2CBD9',
        100: '#D6DCE6',
        50: '#EBEEF2',
      },
      gray: {
        900: '#212121',
        800: '#424242',
        700: '#616161',
        600: '#757575',
        500: '#9E9E9E',
        400: '#BDBDBD',
        300: '#E0E0E0',
        200: '#EEEEEE',
        100: '#F5F5F5',
        50: '#FAFAFA',
      },
      primaryDark: '#201D67',
      yellow: '#FBD964',
      red: '#F75555',
    },
    fontFamily: {
      urbBold: 'Urbanist_Bold',
      urbSemiBold: 'Urbanist_SemiBold',
      urbMed: 'Urbanist_Medium',
      urbReg: 'Urbanist_Regular',
    },
    fontSize: {
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      h5: '20px',
      h6: '18px',

      bodyXL: '18px',
      bodyL: '16px',
      bodyM: '14px',
      bodyS: '12px',
      bodyXS: '10px',
    },
  },
  plugins: [],
};
