import React, { memo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TagsWrapper, TagsNaviWrapper, TagWrapper } from "../elements";
import { ALL } from "../constants";
import { useCurrentTag, useSelectTag } from "../contexts/TagContext";

export const Tags = memo(({ tags }) => {
  const currentTag = useCurrentTag();
  const selectTag = useSelectTag();

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

export const TagsNavi = memo(() => {
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

  const currentTag = useCurrentTag();
  const selectTag = useSelectTag();

  return (
    <TagsNaviWrapper>
      <TagWrapper
        onClick={selectTag(ALL)}
        active={currentTag === ALL}
      >{`${ALL} (${totalCount})`}</TagWrapper>
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
