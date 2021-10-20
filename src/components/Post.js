import React, { memo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PostWrapper, PostContainer, PostHeader, H1, Span } from "../elements";
import { Comments, FeatureImg, Toc, Pagination, User } from "./index";

export const Post = memo(
  ({ children, title, date, featureImage, toc, previous, next }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            comments {
              utterancesRepo
            }
          }
        }
      }
    `);

    const {
      site: {
        siteMetadata: {
          comments: { utterancesRepo },
        },
      },
    } = data;

    return (
      <PostWrapper>
        {toc.items && <Toc toc={toc} />}
        <PostHeader>
          <H1>{title}</H1>
          <Span>{date}</Span>
        </PostHeader>
        {featureImage && <FeatureImg featureImage={featureImage} alt={title} />}
        <PostContainer>{children}</PostContainer>
        <User />
        <Pagination previous={previous} next={next} />
        <Comments repo={utterancesRepo} />
      </PostWrapper>
    );
  }
);
