module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        code: ["Fira Code", "Monaco", "Ubuntu Mono", "monospace"],
      },
      colors: {
        custom: {
          background: "var(--backgroundColor)",
          text: "var(--textColor)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
