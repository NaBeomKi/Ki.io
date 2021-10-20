import React, { memo } from "react";
import { ACTIVE, DARK, LIGHT, SET_THEME } from "../constants";
import { CheckBox, Icon, ToggleText, ToggleWrapper } from "../elements";
import { useTheme, useDispatch } from "../store/StoreContext";
import { FaIcon } from "./index";

export const ThemeToggle = memo(() => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const onDarkModeClick = (e) => {
    dispatch({ type: SET_THEME, theme: e.target.checked ? DARK : LIGHT });
  };

  return (
    <div>
      <CheckBox
        type="checkbox"
        id="dark-mode"
        checked={theme === DARK}
        onChange={onDarkModeClick}
      />
      <ToggleWrapper htmlFor="dark-mode" isDark={theme === DARK}>
        <Icon className={theme === DARK && ACTIVE}>
          <FaIcon name={theme === DARK ? "moon" : "sun"} size="1" />
        </Icon>
        <ToggleText>{theme === DARK ? DARK : LIGHT}</ToggleText>
      </ToggleWrapper>
    </div>
  );
});
