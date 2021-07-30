import tw, { styled } from "twin.macro";
import { Link } from "gatsby";

export const TocWrapper = tw.div`
  hidden lg:block absolute left-full top-8 h-full ml-8 text-sm text-opacity-70 transition-opacity	duration-300 hover:text-opacity-100 focus:text-opacity-100
`;

export const TocContainer = styled.nav`
  ${tw`sticky top-28 w-60 py-2.5 px-4 rounded-br-lg border-l-2 border-solid border-blue-400 transition-shadow duration-300 hover:shadow-lg focus:shadow-lg`}

  & > ul {
    padding-left: 0;
  }
`;

export const TocListContainer = tw.ul`
  pl-2.5
`;

export const TocList = tw.li`
  mb-1.5
`;

export const Anchor = tw(Link)`
    block mb-1.5 leading-tight opacity-60 transition-opacity duration-300 hover:opacity-100 focus:opacity-100
`;
