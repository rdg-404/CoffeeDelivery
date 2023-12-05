/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'intro-bg': "url('/src/assets/intro-bg.svg')",
      // },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo: ['"Baloo 2"', 'sans-serif'],
      },

      height: {
        544: '34rem',
      },
    },

    colors: {
      'base-background': '#fafafa',
      'base-text': '#574F4D',
      'button-map-bg': '#EBE5F9',
      'button-cart-bg': '#F1E9C9',
      'button-cart': '#C47F17',
      'button-map': '#8047F8',
    },
  },
  plugins: [],
}
