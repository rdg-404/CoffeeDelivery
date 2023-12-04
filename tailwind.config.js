/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      //   baloo: ['Baloo', 'sans-serif'],
      // },
    },

    colors: {
      'base-background': '#fafafa',
      'base-text': '#574F4D',
    },
  },
  plugins: [],
}
