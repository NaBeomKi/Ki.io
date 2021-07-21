import tw, { styled } from "twin.macro";

export const PostWrapper = tw.div`relative`;

export const PostHeader = tw.section`
    mb-5
`;

export const PostContainer = styled.section`
  ${tw`mt-10`}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: 6rem;
    ${tw`mb-8 text-gray-900 font-bold`}
    & > a {
      ${tw`flex items-center h-full`}
    }
  }

  h1 {
    ${tw`text-5xl`}
  }

  h2 {
    ${tw`text-4xl`}
  }

  h3 {
    ${tw`text-3xl`}
  }

  h4 {
    ${tw`text-2xl`}
  }

  h5 {
    ${tw`text-xl`}
  }

  h6 {
    ${tw`text-lg`}
  }

  p {
    ${tw`mb-4 text-base`}
  }

  img {
    ${tw`max-w-full mt-4`}
  }

  a {
    ${tw`text-blue-400 underline`}
  }

  strong {
    ${tw`font-bold`}
  }

  em {
    ${tw`italic`}
  }

  del {
    ${tw`line-through`}
  }

  blockquote {
    ${tw`mb-4 p-4 border-l-4 border-solid border-blue-300 bg-gray-200`}
    & > p {
      ${tw`last:m-0 text-xl leading-9`}
    }
  }

  ul,
  ol {
    ${tw`my-4 ml-8`}
  }

  ul {
    ${tw`list-disc`}
  }

  ol {
    ${tw`list-decimal`}
  }

  li {
    ${tw`my-1`}
  }

  code {
    ${tw`p-1 rounded font-mono text-base leading-8 text-white bg-gray-600`}
  }

  hr {
    ${tw`w-4/5 h-px my-8 mx-auto bg-gray-300 border-0`}
  }

  table {
    ${tw`w-full border-collapse`}
    border-spacing: 0.25rem;
  }

  th {
    ${tw`font-bold`}
  }

  table,
  th,
  td {
    ${tw`font-bold border border-solid border-black`}
  }

  th,
  td {
    ${tw`p-2 text-left`}
  }
`;
