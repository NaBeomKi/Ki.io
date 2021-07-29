import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PostWrapper, PostContainer, PostHeader, H1, Span } from "../elements";
import { Comments, FeatureImg, Tags, Toc, Pagination, User } from "./index";

export const Post = ({
  children,
  title,
  date,
  tags,
  featureImage,
  toc,
  previous,
  next,
}) => {
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
        {tags && <Tags tags={tags} />}
        <Span>{date}</Span>
      </PostHeader>
      <FeatureImg featureImage={featureImage} />
      <PostContainer>{children}</PostContainer>
      <User />
      <Pagination previous={previous} next={next} />
      <Comments repo={utterancesRepo} />
    </PostWrapper>
  );
};
