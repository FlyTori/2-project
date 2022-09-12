module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', '"Noto Sans TC"', 'cursive', 'system-ui', 'sans-serif'],
        'dis1': ['"Abril Fatface"'], 
        'dis2': ['"Girassol"'], // for bar project
        'dis3': ['"Great Vibes"'], // for bar project
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
