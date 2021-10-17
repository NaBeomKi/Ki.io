import React, { useCallback } from "react";
import {
  TocWrapper,
  TocContainer,
  TocListContainer,
  TocList,
  Anchor,
} from "../elements";

export const Toc = ({ toc }) => {
  const onAnchorClick = useCallback(
    (url) => (e) => {
      e.preventDefault();
      document.querySelector(url).scrollIntoView({
        behavior: "smooth",
      });
    },
    []
  );

  const getListContainer = useCallback(
    (list) => {
      if (list.items) {
        return (
          <TocListContainer>
            {list.items.map((item) => {
              return (
                <TocList key={item.url}>
                  <Anchor
                    to={item.url}
                    key={item.url}
                    onClick={onAnchorClick(item.url)}
                  >
                    {item.title}
                  </Anchor>
                  {getListContainer(item)}
                </TocList>
              );
            })}
          </TocListContainer>
        );
      }
    },
    [onAnchorClick]
  );

  return (
    <TocWrapper>
      <TocContainer>{getListContainer(toc)}</TocContainer>
    </TocWrapper>
  );
};
