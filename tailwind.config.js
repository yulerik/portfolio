module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'b-primary': "#05386B",
      'b-secondary': "#379683",
      'b-accent': "#5CDB95",
      'b-neutral': "#8EE4AF",
      "b-base-100": "#EDF5E1",
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-23deg)' },
          '50%': { transform: 'rotate(23deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
}
