import React, { memo } from "react";
import styled from "styled-components";
import { DARK } from "../constants";
import { useTheme, useChangeTheme } from "../contexts/ThemeContext";
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
`;

export const ThemeToggle = memo(() => {
  const theme = useTheme();
  const changeTheme = useChangeTheme();

  const onDarkModeClick = (e) => {
    changeTheme(e.target.checked);
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
        <Icon className={theme === DARK && "active"}>
          <FaIcon name={theme === DARK ? "moon" : "sun"} size="1" />
        </Icon>
        <ToggleText>{theme === DARK ? "Dark" : "Light"}</ToggleText>
      </ToggleWrapper>
    </div>
  );
});
