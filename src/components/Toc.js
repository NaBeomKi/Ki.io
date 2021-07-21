import React from "react";
import {
  TocWrapper,
  TocContainer,
  TocListContainer,
  TocList,
  Anchor,
} from "../elements";

export const Toc = ({ toc }) => {
  const getListContainer = (list) => {
    if (list.items) {
      return (
        <TocListContainer>
          {list.items.map((item) => {
            return (
              <TocList key={item.url}>
                <Anchor
                  to={item.url}
                  key={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.url).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
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
  };

  return (
    <TocWrapper>
      <TocContainer>{getListContainer(toc)}</TocContainer>
    </TocWrapper>
  );
};
