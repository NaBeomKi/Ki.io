import tw, { styled } from "twin.macro";

export const TagsNaviWrapper = tw.div`
  flex items-center p-2 bg-gray-200 rounded overflow-x-auto
`;

export const TagsWrapper = tw.div`
  flex mb-2
`;

export const TagWrapper = styled.button`
  ${tw`mr-2 last:mr-0 py-2 px-3.5 rounded-3xl border-2 border-blue-300 border-solid text-blue-400 text-sm capitalize whitespace-nowrap transition-colors hover:bg-white hover:border-blue-400`}
  ${(props) => (props.active ? tw`bg-white border-blue-400` : tw`bg-gray-100`)}
`;
