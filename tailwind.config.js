module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
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
  plugins: [require("daisyui")],
}
