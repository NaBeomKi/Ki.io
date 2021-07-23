import tw, { styled } from "twin.macro";

export const PaginationWrapper = styled.div`
  ${tw`relative my-8 md:my-0`}

  & > a {
    ${tw`flex items-center md:absolute mb-4 md:mb-0 last:mb-0`}

    &.prev {
      ${tw`justify-start md:left-0 md:top-0`}

      & > div {
        ${tw`ml-2 text-left`}
      }
    }

    &.next {
      ${tw`justify-end md:right-0 md:top-0`}

      & > div {
        ${tw`mr-2 text-right`}
      }
    }
  }
`;
