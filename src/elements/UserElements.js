import tw, { styled } from "twin.macro";

export const UserWrapper = tw.section`
    my-12
`;

export const UserProfile = tw.div`
    flex flex-col md:flex-row md:items-center
`;

export const UserImgWrapper = tw.div`
    w-20 md:w-32 h-20 md:h-32 md:mr-8 mb-4 md:mb-0 rounded-full overflow-hidden
`;

export const Username = tw.h1`
    mb-2 text-xl font-bold
`;

export const UserBio = tw.p`
    text-gray-400
`;

export const UserLinks = styled.div`
  ${tw`mt-8 pt-4 border-t border-solid border-gray-300`}

  & > a {
    ${tw`mr-4 last:mr-0`}
  }
`;
