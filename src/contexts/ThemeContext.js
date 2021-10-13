import React, { createContext, useContext } from "react";
import useThemeToggle from "../hooks/useThemeToggle";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, changeTheme] = useThemeToggle();

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  return theme;
};

export const useChangeTheme = () => {
  const { changeTheme } = useContext(ThemeContext);
  return changeTheme;
};

export default ThemeProvider;
