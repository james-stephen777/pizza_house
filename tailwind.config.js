/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary":"#F62500",
        "btn":"#FF6347",
        "input":"#7E322525",
        "placeholder":"#7E322560"
      },
      backgroundImage: {
        'breadcrumb': "url(./assets/img/Breadcrumb.jpg)"
      }
    },
  },
  plugins: [],
}

