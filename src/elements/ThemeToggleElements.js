import tw, { styled } from "twin.macro";

export const CheckBox = tw.input`
  hidden
`;

export const ToggleWrapper = styled.label`
  ${tw`flex items-center relative w-20 h-10 p-2 bg-blue-200 rounded-full border-2 border-solid border-blue-900 cursor-pointer`}
  justify-content: ${(props) => (props.isDark ? "flex-start" : "flex-end")};
`;

export const Icon = styled.span`
  ${tw`absolute left-0 mx-0.5 p-2 bg-blue-900 rounded-full text-yellow-400`}

  &.active {
    ${tw`left-auto right-0`}
  }
`;

export const ToggleText = tw.span`
  text-sm text-blue-900 capitalize
`;
