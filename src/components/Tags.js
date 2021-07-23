import React from "react";
import { TagsWrapper } from "../elements";
import { Button } from "./index";

export const Tags = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <Button key={tag} className="tag" href={`/tags/${tag}`}>
          {tag}
        </Button>
      ))}
    </TagsWrapper>
  );
};
