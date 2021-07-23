import React from "react";
import { PostWrapper, PostContainer, PostHeader, H1, Span } from "../elements";
import { FeatureImg, Tags, Toc, Pagination } from "./index";

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
      <Pagination previous={previous} next={next} />
    </PostWrapper>
  );
};
