import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  ALL,
  COLOR_SCHEME,
  DARK,
  LIGHT,
  SELECT_OS_THEME,
  SET_TAG,
  THEME,
} from "../constants";
import { initState, reducer } from "./reducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  // tag
  const changeTag = useCallback((e) => {
    dispatch({ type: SET_TAG, tag: e.state.tag || ALL });
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", changeTag);

    return () => window.removeEventListener("popstate", changeTag);
  }, [changeTag]);

  // theme
  const handleMatchMedia = useCallback(
    (e) =>
      !JSON.parse(localStorage.getItem(THEME)) &&
      dispatch({ type: SELECT_OS_THEME, theme: e.matches ? DARK : LIGHT }),
    []
  );

  useEffect(() => {
    const osTheme = window.matchMedia(COLOR_SCHEME).matches ? DARK : LIGHT;
    const localStorageTheme = JSON.parse(localStorage.getItem(THEME)) || null;
    dispatch({ type: SELECT_OS_THEME, theme: localStorageTheme || osTheme });

    window
      .matchMedia(COLOR_SCHEME)
      .addEventListener("change", handleMatchMedia);

    return () =>
      window
        .matchMedia(COLOR_SCHEME)
        .removeEventListener("change", handleMatchMedia);
  }, [handleMatchMedia]);

  useEffect(() => {
    if (state.theme === DARK) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }
  }, [state.theme]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useTheme = () => {
  const {
    state: { theme },
  } = useContext(StoreContext);
  return theme;
};

export const useTag = () => {
  const {
    state: { tag },
  } = useContext(StoreContext);
  return tag;
};

export const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
};

export default StoreProvider;
