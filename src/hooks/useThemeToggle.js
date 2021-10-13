import { useCallback, useEffect, useMemo, useState } from "react";
import { COLOR_SCHEME, THEME, DARK, LIGHT } from "../constants";

const getInitTheme = () => {
  const osTheme = window.matchMedia(COLOR_SCHEME).matches ? DARK : LIGHT;
  const localStorageTheme = JSON.parse(localStorage.getItem(THEME)) || null;
  return localStorageTheme || osTheme;
};

const useThemeToggle = () => {
  const initTheme = useMemo(() => getInitTheme(), []);
  const [theme, setTheme] = useState(initTheme);

  const changeTheme = useCallback((isDark) => {
    const currentTheme = isDark ? DARK : LIGHT;
    setTheme(currentTheme);
    localStorage.setItem(THEME, JSON.stringify(currentTheme));
  }, []);

  const handleMatchMedia = useCallback(
    (e) =>
      !JSON.parse(localStorage.getItem(THEME)) &&
      setTheme(e.matches ? DARK : LIGHT),
    []
  );

  useEffect(() => {
    window
      .matchMedia(COLOR_SCHEME)
      .addEventListener("change", handleMatchMedia);

    return () =>
      window
        .matchMedia(COLOR_SCHEME)
        .removeEventListener("change", handleMatchMedia);
  }, [handleMatchMedia]);

  useEffect(() => {
    if (theme === DARK) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }
  }, [theme]);

  return [theme, changeTheme];
};

export default useThemeToggle;
