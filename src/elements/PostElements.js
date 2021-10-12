import tw, { styled } from "twin.macro";

export const PostWrapper = tw.div`
  relative
`;

export const PostHeader = tw.section`
    mb-6
`;

export const PostContainer = styled.section`
  ${tw`mt-10 text-base`}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: 6rem;
    ${tw`my-8 font-bold`}
    & > a {
      ${tw`flex items-center h-full text-current`}
      & > svg {
        ${tw`fill-current`}
      }
    }
  }

  h1 {
    ${tw`text-4xl`}
  }

  h2 {
    ${tw`text-3xl`}
  }

  h3 {
    ${tw`text-2xl`}
  }

  h4 {
    ${tw`text-xl`}
  }

  h5 {
    ${tw`text-lg`}
  }

  p {
    ${tw`mb-4 align-middle`}
  }

  img {
    ${tw`block max-w-full my-4 mx-auto `}
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
    ${tw`mb-3 p-3 border-l-4 border-solid border-blue-300 bg-gray-200 text-black`}

    & > p {
      ${tw`last:m-0 text-lg`}
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
    ${tw`py-0.5 px-1 rounded font-mono text-sm text-white bg-gray-600`}
  }

  hr {
    ${tw`w-4/5 h-px my-8 mx-auto bg-gray-300 border-0`}
  }

  table {
    ${tw`w-full border-collapse`}
    border-spacing: 0.25rem;
  }

  th {
    ${tw`font-bold bg-blue-200 text-black`}
  }

  table,
  th,
  td {
    ${tw`font-bold border border-solid border-custom-text`}
  }

  th,
  td {
    ${tw`p-2`}
  }
`;
