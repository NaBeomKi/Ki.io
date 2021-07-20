import { Link } from "gatsby";
import tw from "twin.macro";

export const HeaderWrapper = tw.div`
    fixed h-20 left-0 top-0 right-0 shadow-md bg-white z-50
`;

export const HeaderContainer = tw.header`
    container mx-auto h-full flex items-center justify-between px-4 md:px-8
`;

export const HeaderListsContainer = tw.ul`
    flex
`;

export const HeaderList = tw.li`
    mr-2 last:mr-0 flex items-center
`;

export const NavLink = tw(Link)`
    opacity-60 transition-opacity duration-300 hover:opacity-100 focus:opacity-100
`;

export const LogoImg = tw.img`
    w-8
`;
