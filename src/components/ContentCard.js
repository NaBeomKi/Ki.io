import React from "react";
import { Link } from "gatsby";
import { CardWrapper, CardInfoWrapper, H2, P, Span } from "../elements";
import { FeatureImg, Tags } from "./index";

export const ContentCard = ({
  slug,
  excerpt,
  date,
  tags,
  title,
  featureImage,
}) => {
  return (
    <CardWrapper>
      <Link to={`/posts/${slug}`}>
        <FeatureImg featureImage={featureImage} />
      </Link>
      <CardInfoWrapper>
        <Link to={`/posts/${slug}`}>
          <H2>{title}</H2>
        </Link>
        <P>{excerpt}</P>
        {tags && <Tags tags={tags} />}
        <Span>{date}</Span>
      </CardInfoWrapper>
    </CardWrapper>
  );
};
