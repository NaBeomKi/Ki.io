import { useEffect, useState } from "react";
import { ALL } from "../constants";

const useTag = () => {
  const [tag, setTag] = useState(ALL);

  const selectTag = (tagName) => () => {
    setTag(tagName);
    window.history.pushState({}, ``, `/?tag=${tagName}`);
  };

  const changeTag = () => {
    const tagName =
      new URLSearchParams(window.location.search).get("tag") || ALL;
    setTag(tagName);
  };

  useEffect(() => {
    window.addEventListener("popstate", changeTag);

    return () => window.removeEventListener("popstate", changeTag);
  }, [changeTag]);

  return [tag, selectTag];
};

export default useTag;
