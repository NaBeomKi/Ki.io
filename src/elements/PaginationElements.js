import tw, { styled } from "twin.macro";

export const PaginationWrapper = styled.div`
  ${tw`md:flex md:justify-between md:items-center my-8 md:my-0`}

  & > div {
    ${tw`mb-4 last:mb-0 md:mb-0`}

    & > a {
      ${tw`flex items-center`}

      &.prev {
        ${tw`justify-start`}

        & > div {
          ${tw`ml-2 text-left`}
        }
      }

      &.next {
        ${tw`justify-end`}

        & > div {
          ${tw`mr-2 text-right`}
        }
      }
    }
  }
`;
