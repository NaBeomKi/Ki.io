import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TagsWrapper, AllTagsWrapper, AllTagsBtn } from "../elements";
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

export const AllTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
        totalCount
      }
    }
  `);

  const {
    allMdx: { group, totalCount },
  } = data;

  return (
    <AllTagsWrapper>
      <AllTagsBtn to="/">{`All Posts (${totalCount})`}</AllTagsBtn>
      {group &&
        group.map((tag, index) => (
          <AllTagsBtn
            key={tag + index}
            to={`/tags/${tag.fieldValue}`}
          >{`${tag.fieldValue} (${tag.totalCount})`}</AllTagsBtn>
        ))}
    </AllTagsWrapper>
  );
};
