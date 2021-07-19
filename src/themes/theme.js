const Theme = {
  fonts: {
    main: "Noto Sans KR, sans-serif",
    code: "Fira Code, Monaco, Ubuntu Mono, monospace",
  },
  colors: {
    main1: "hsl(207, 70%, 59%)",
    main2: "hsl(207, 70%, 94%)",
    dark1: "hsl(227, 2%, 12%)",
    dark2: "hsl(227, 2%, 26%)",
    dark3: "hsl(227, 2%, 64%)",
    light1: "hsl(0, 0%, 97%)",
    light2: "hsl(0, 0%, 99%)",
  },
  breakpoints: {
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 65rem)",
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
    shadow: "box-shadow 0.3s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
    shadow2: "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",
  },
};

export default Theme;