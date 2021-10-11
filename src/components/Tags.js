import React, { memo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TagsWrapper, TagsNaviWrapper, TagWrapper } from "../elements";

export const Tags = memo(({ tags, selectTag, currentTag }) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <TagWrapper
          key={tag}
          onClick={selectTag(tag)}
          active={currentTag === tag}
        >
          {tag}
        </TagWrapper>
      ))}
    </TagsWrapper>
  );
});

export const AllTags = memo(({ selectTag, currentTag }) => {
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
    <TagsNaviWrapper>
      <TagWrapper
        onClick={selectTag("all")}
        active={currentTag === "all"}
      >{`all (${totalCount})`}</TagWrapper>
      {group &&
        group.map((tag, index) => (
          <TagWrapper
            key={tag + index}
            onClick={selectTag(tag.fieldValue)}
            active={currentTag === tag.fieldValue}
          >{`${tag.fieldValue} (${tag.totalCount})`}</TagWrapper>
        ))}
    </TagsNaviWrapper>
  );
});
