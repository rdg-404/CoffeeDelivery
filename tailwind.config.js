/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      0: '0',
    },
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

      width: {
        640: '40rem',
        448: '28rem',
      },
    },

    colors: {
      'base-background': '#fafafa',
      'base-text': '#574F4D',
      'button-map-bg': '#EBE5F9',
      'base-button': '#E6E5E5',
      'button-cart-bg': '#F1E9C9',
      'button-cart': '#C47F17',
      'button-map': '#8047F8',
      'timer-button': '#DBAC2C',
      'box-button': '#574F4D',
      'brand-yellow': '#F1E9C9',
      'base-label': '#8D8686',
      'base-card': '#F3F2F2',
      'base-input': '#EDEDED',
      'base-border': '#E6E5E5',
    },
  },
  plugins: [],
}
