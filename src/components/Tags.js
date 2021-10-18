import React, { memo, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TagsWrapper, TagsNaviWrapper, TagWrapper } from "../elements";
import { ALL, SELECT_TAG } from "../constants";
import { useTag, useDispatch } from "../store/StoreContext";

export const Tags = memo(({ tags }) => {
  const currentTag = useTag();
  const dispatch = useDispatch();

  const onTagClick = useCallback(
    (tagName) => (e) => {
      dispatch({ type: SELECT_TAG, tag: tagName });
    },
    []
  );

  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <TagWrapper
          key={tag}
          onClick={onTagClick(tag)}
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

  const currentTag = useTag();
  const dispatch = useDispatch();

  const onTagClick = useCallback(
    (tagName) => (e) => {
      dispatch({ type: SELECT_TAG, tag: tagName });
    },
    []
  );

  return (
    <TagsNaviWrapper>
      <TagWrapper
        onClick={onTagClick(ALL)}
        active={currentTag === ALL}
      >{`${ALL} (${totalCount})`}</TagWrapper>
      {group &&
        group.map((tag, index) => (
          <TagWrapper
            key={tag + index}
            onClick={onTagClick(tag.fieldValue)}
            active={currentTag === tag.fieldValue}
          >{`${tag.fieldValue} (${tag.totalCount})`}</TagWrapper>
        ))}
    </TagsNaviWrapper>
  );
});
