/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor:'var(--bg-color)',
        bodyColor:'var(--body)',
        headingColor:'var(--heading-color)',
        labelColor:'var(--label-color)',
        buttonColor:'var(--button-color)',
        buttonHoverColor:'var(--button-hover-color)',
        focusColor:'var(--focus)',
        errorColor:'var(--error-color)',
        inputBorderColor:'var(--inputborder-color)',
        iconColor:'var(--iconColor)'
      }
    },
  },
  plugins: [],
}