/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        "orange":"#F74528",
        "header":"#404040",
        "grey":"#E4E4E4",
        "border":"#F9F9F9",
        "button":"#FD6644",
        "payment":"#1BAC03",
        "bottom":"#F2F4FF"
      },
      colors:{
        "blue":"#0021CE",
        "purple":"#6F11E1",
        "payment":"#1BAC03"
      },
      fontFamily:{
"inter":'Inter',
      }
    },
  },
  plugins: [],
}

