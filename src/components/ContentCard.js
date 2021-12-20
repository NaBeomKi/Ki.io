import React, { memo } from "react";
import { Link } from "gatsby";
import { CardWrapper, CardInfoWrapper, H2, P, Span } from "../elements";
import { FeatureImg, Tags } from "./index";

export const ContentCard = memo((props) => {
  const {
    slug,
    excerpt,
    frontmatter: { date, tags, title, featureImage },
  } = props;

  return (
    <CardWrapper>
      {featureImage && (
        <Link to={`/${slug}`}>
          <FeatureImg featureImage={featureImage} alt={title} />
        </Link>
      )}
      <CardInfoWrapper>
        <Link to={`/${slug}`}>
          <H2>{title}</H2>
        </Link>
        <P>{excerpt}</P>
        {tags && <Tags tags={tags} />}
        <Span>{date}</Span>
      </CardInfoWrapper>
    </CardWrapper>
  );
});
