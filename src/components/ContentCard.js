import React from "react";
import { Link } from "gatsby";
import { CardWrapper, CardInfoWrapper, H2, P, Span } from "../elements";
import { FeatureImg, Button } from "./index";
import { ButtonsContainer } from "../elements";

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
        {tags && (
          <ButtonsContainer>
            {tags.map((tag) => (
              <Button key={tag} href={`/tags/${tag}`}>
                {tag}
              </Button>
            ))}
          </ButtonsContainer>
        )}
        <Span>{date}</Span>
      </CardInfoWrapper>
    </CardWrapper>
  );
};
