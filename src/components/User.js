import React, { memo } from "react";
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

export const User = memo(() => {
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
          introduction
          author
          social {
            twitter
            github
            facebook
            linkedin
            instagram
          }
        }
      }
    }
  `);

  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
    site: {
      siteMetadata: { email, introduction, author, social },
    },
  } = data;

  return (
    <UserWrapper>
      <UserProfile>
        <UserImgWrapper>
          <FeatureImg featureImage={gatsbyImageData} alt="profile image" />
        </UserImgWrapper>
        <div>
          <Username>{author}</Username>
          <UserBio>{introduction}</UserBio>
        </div>
      </UserProfile>
      <UserLinks>
        {Object.entries(social).map(
          ([siteName, siteUrl]) =>
            siteUrl && (
              <A
                key={siteName}
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcon type="fab" name={siteName} size="2" />
              </A>
            )
        )}
        {email && (
          <A href={`mailto:${email}`}>
            <FaIcon name="envelope" size="2" />
          </A>
        )}
      </UserLinks>
    </UserWrapper>
  );
});
