import tw from "twin.macro";
import { Link } from "gatsby";

export const ButtonsContainer = tw.div`
    flex mb-2
`;

export const ButtonWrapper = tw(Link)`
    mr-2 last:mr-0 py-2 px-3.5 bg-gray-200 hover:bg-gray-100 text-blue-400 rounded-2xl transition-colors 
`;
