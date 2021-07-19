import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderListsContainer,
  HeaderList,
  NavLink,
  LogoImg,
  A,
} from "../elements";
import { FaIcon } from "./FaIcon";

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <nav>
          <HeaderListsContainer>
            <HeaderList>
              <h1>
                <NavLink to="/">
                  <LogoImg src={data.logo.publicURL} alt="Home" />
                </NavLink>
              </h1>
            </HeaderList>
          </HeaderListsContainer>
        </nav>
        <div>
          <HeaderListsContainer>
            <HeaderList>
              <A
                href="https://github.com/beomki69"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcon type="fab" name="github" size="2" />
              </A>
            </HeaderList>
          </HeaderListsContainer>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
