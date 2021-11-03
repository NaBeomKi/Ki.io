import tw, { styled } from "twin.macro";

export const TagsNaviWrapper = tw.div`
  flex flex-wrap gap-2 p-2 bg-gray-300 rounded 
`;

export const TagsWrapper = tw.div`
  flex flex-wrap gap-2 mb-2
`;

export const TagWrapper = styled.button`
  ${tw`py-1.5 px-2 rounded-full border-2 border-blue-300 border-solid text-blue-400 text-sm capitalize whitespace-nowrap transition-colors hover:bg-white hover:border-blue-600 hover:text-blue-600 hover:font-bold focus:bg-white focus:border-blue-600 focus:text-blue-600 focus:font-bold`}
  ${(props) =>
    props.active
      ? tw`bg-white border-blue-600 text-blue-600 font-bold`
      : tw`bg-gray-100`}
`;
