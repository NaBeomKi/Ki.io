import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FeatureImgWrapper } from "../elements";

export const FeatureImg = ({ featureImage }) => {
  const image = getImage(featureImage);
  return (
    <FeatureImgWrapper>
      <GatsbyImage image={image} alt="test" />
    </FeatureImgWrapper>
  );
};
