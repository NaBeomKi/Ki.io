import React, { memo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeToggle } from "./index";
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
import { useDispatch } from "../store/StoreContext";
import { ALL, SET_TAG } from "../constants";

export const Header = memo(() => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `);
  const dispatch = useDispatch();

  const onClickHome = () => {
    dispatch({ type: SET_TAG, tag: ALL });
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <nav>
          <HeaderListsContainer>
            <HeaderList>
              <NavLink to="/" onClick={onClickHome}>
                <LogoImg src={data.logo.publicURL} alt="Home" />
              </NavLink>
            </HeaderList>
          </HeaderListsContainer>
        </nav>
        <div>
          <HeaderListsContainer>
            <HeaderList>
              <A
                href={data.site.siteMetadata.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcon type="fab" name="github" size="2" />
              </A>
            </HeaderList>
            <HeaderList>
              <ThemeToggle />
            </HeaderList>
          </HeaderListsContainer>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
});
