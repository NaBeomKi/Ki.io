import tw from "twin.macro";

export const NotFoundWrapper = tw.main`
    h-screen flex justify-center items-center font-bold text-center text-white bg-gradient-to-r from-green-400 to-blue-500
`;

export const NotFoundTitle = tw.h1`
    mb-4 pb-4 border-b-2 border-solid border-white text-8xl 
`;

export const NotFoundText = tw.p`
    text-4xl
`;
