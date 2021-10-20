import {
  ALL,
  SELECT_OS_THEME,
  SELECT_TAG,
  SET_TAG,
  SET_THEME,
  TAG,
  THEME,
} from "../constants";

export const initState = {
  tag: ALL,
  theme: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem(THEME, JSON.stringify(action.theme));
      return { ...state, theme: action.theme };
    case SELECT_OS_THEME:
      return { ...state, theme: action.theme };
    case SELECT_TAG:
      window.history.pushState(
        { tag: action.tag },
        ``,
        `/?${TAG}=${action.tag}`
      );
      return { ...state, tag: action.tag };
    case SET_TAG:
      return { ...state, tag: action.tag };
    default:
      return { ...state };
  }
};

export default reducer;
