import tw, { styled } from "twin.macro";

export const TagsWrapper = styled.div`
  ${tw`flex mb-2`}

  & > .tag {
    ${tw`mr-2 last:mr-0`}
  }
`;
