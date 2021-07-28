import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  UserWrapper,
  UserProfile,
  UserImgWrapper,
  Username,
  UserBio,
  UserLinks,
  A,
} from "../elements";
import { FeatureImg, FaIcon } from "./index";

export const User = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      site {
        siteMetadata {
          email
          description
          author
          github
        }
      }
    }
  `);

  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
    site: {
      siteMetadata: { email, description, author, github },
    },
  } = data;

  return (
    <UserWrapper>
      <UserProfile>
        <UserImgWrapper>
          <FeatureImg featureImage={gatsbyImageData} />
        </UserImgWrapper>
        <div>
          <Username>{author}</Username>
          <UserBio>{description}</UserBio>
        </div>
      </UserProfile>
      <UserLinks>
        <A href={github} target="_blank" rel="noopener noreferrer">
          <FaIcon type="fab" name="github" size="2" />
        </A>
        <A href={`mailto:${email}`}>
          <FaIcon name="envelope" size="2" />
        </A>
      </UserLinks>
    </UserWrapper>
  );
};
