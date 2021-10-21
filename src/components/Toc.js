import React, { memo, useCallback } from "react";
import {
  TocWrapper,
  TocContainer,
  TocListContainer,
  TocList,
  Anchor,
} from "../elements";

export const Toc = memo(({ toc }) => {
  const onAnchorClick = useCallback(
    (url) => (e) => {
      e.preventDefault();
      // Remove # from URL
      // Not working querySelector: querySelector method uses CSS3 selectors for querying the DOM and CSS3 doesn't support ID selectors that start with a digit
      // https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document/37271406
      document.getElementById(url.slice(1)).scrollIntoView({
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
});
