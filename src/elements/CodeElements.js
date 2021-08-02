import tw, { styled } from "twin.macro";

export const CodeWrapper = tw.div`
    relative my-4 font-code leading-tight
`;

export const Pre = styled.pre`
  ${tw`px-3 py-5 overflow-x-auto rounded`}

  &[class*="language-"]::before {
    ${tw`absolute right-2 top-0 py-0.5 px-2 bg-black rounded-b text-right uppercase text-white text-xs tracking-wide`}
  }

  &[class~="language-javascript"]::before,
  &[class~="language-js"]::before {
    content: "js";
    background: #f7df1e;
    color: black;
  }

  &[class~="language-html"]::before {
    content: "html";
    background: #e44d26;
    color: white;
  }

  &[class~="language-css"]::before {
    content: "css";
    background: #2872b6;
    color: white;
  }

  &[class~="language-python"]::before {
    content: "python";
    background: #357bb4;
    color: white;
  }

  &[class~="language-shell"]::before {
    content: "shell";
    background: #3e474a;
    color: white;
  }

  &[class~="language-bash"]::before {
    content: "bash";
    background: #3e474a;
    color: white;
  }

  &[class~="language-yml"]::before {
    content: "yml";
    background: #3e474a;
    color: white;
  }
`;

export const LineNo = tw.span`
  inline-block w-9 pr-4 select-none opacity-50 text-right
`;
