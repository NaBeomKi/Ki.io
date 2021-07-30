import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FeatureImgWrapper } from "../elements";

export const FeatureImg = ({ featureImage, alt = "image" }) => {
  const image = getImage(featureImage);
  return (
    <FeatureImgWrapper>
      <GatsbyImage image={image} alt={alt} />
    </FeatureImgWrapper>
  );
};
