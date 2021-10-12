import { useCallback, useEffect, useState } from "react";

const DARK_MODE = "dark-mode";
const COLOR_SCHEME = "(prefers-color-scheme: dark)";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeDarkMode = useCallback((isDark) => {
    setIsDarkMode(isDark);
    localStorage.setItem(DARK_MODE, JSON.stringify(isDark));
  }, []);

  const handleMatchMedia = useCallback((e) => setIsDarkMode(e.matches), []);

  useEffect(() => {
    const isOsDark = window.matchMedia(COLOR_SCHEME).matches;
    const isDark =
      JSON.parse(localStorage.getItem(DARK_MODE)) ||
      (isOsDark && !JSON.parse(localStorage.getItem(DARK_MODE)));
    setIsDarkMode(isDark);

    window
      .matchMedia(COLOR_SCHEME)
      .addEventListener("change", handleMatchMedia);

    return () =>
      window
        .matchMedia(COLOR_SCHEME)
        .removeEventListener("change", handleMatchMedia);
  }, [handleMatchMedia]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return [isDarkMode, changeDarkMode];
};

export default useDarkMode;
