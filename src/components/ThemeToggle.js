import React, { memo } from "react";
import styled from "styled-components";
import { ACTIVE, DARK, LIGHT, SET_THEME } from "../constants";
import { useTheme, useDispatch } from "../store/StoreContext";
import { FaIcon } from "./index";

const CheckBox = styled.input`
  display: none;
`;

const ToggleWrapper = styled.label`
  display: flex;
  justify-content: ${(props) => (props.isDark ? "flex-start" : "flex-end")};
  align-items: center;
  position: relative;
  width: 5.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: #bceeff;
  border-radius: 9999px;
  border: 2px solid #2c2c54;
  cursor: pointer;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  margin: 0 0.1rem;
  padding: 0.5rem;
  background: #2c2c54;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: position 2s ease-in-out;
  color: #f9ca24;

  &.active {
    left: auto;
    right: 0;
  }
`;

const ToggleText = styled.span`
  font-size: 0.825rem;
  color: #2c2c54;
  text-transform: capitalize;
`;

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
