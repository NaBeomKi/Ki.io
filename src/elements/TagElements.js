import tw, { styled } from "twin.macro";
import { Link } from "gatsby";

export const TagsWrapper = styled.div`
  ${tw`flex mb-2`}

  & > .tag {
    ${tw`mr-2 last:mr-0`}
  }
`;

export const AllTagsWrapper = tw.div`
  flex items-center p-2 bg-gray-400 rounded overflow-x-auto
`;

export const AllTagsBtn = tw(Link)`
  mr-2 last:mr-0 p-2 bg-gray-300 rounded capitalize text-blue-400 whitespace-nowrap hover:text-white hover:bg-blue-400
`;
