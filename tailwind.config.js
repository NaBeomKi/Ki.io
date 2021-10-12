module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ["Noto Sans KR", "sans-serif"],
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
