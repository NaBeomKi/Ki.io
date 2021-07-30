import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const FeatureImg = ({ featureImage, alt = "image" }) => {
  const image = getImage(featureImage);
  return (
    <div>
      <GatsbyImage image={image} alt={alt} />
    </div>
  );
};
