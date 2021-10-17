import React, { createContext, useContext } from "react";
import useTag from "../hooks/useTag";

const TagContext = createContext();

const TagProvider = ({ children }) => {
  const [tag, selectTag] = useTag();

  return (
    <TagContext.Provider value={{ tag, selectTag }}>
      {children}
    </TagContext.Provider>
  );
};

export const useCurrentTag = () => {
  const { tag } = useContext(TagContext);
  return tag;
};

export const useSelectTag = () => {
  const { selectTag } = useContext(TagContext);
  return selectTag;
};

export default TagProvider;
