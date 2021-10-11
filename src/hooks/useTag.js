import { useCallback, useEffect, useState } from "react";

const useTag = () => {
  const [tag, setTag] = useState("all");

  const selectTag = useCallback(
    (tagName) => () => {
      setTag(tagName);
      window.history.pushState({}, ``, `/?tag=${tagName}`);
    },
    []
  );

  const changeTag = useCallback(() => {
    const tagName =
      new URLSearchParams(window.location.search).get("tag") || "all";
    setTag(tagName);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", changeTag);

    return () => window.removeEventListener("popstate", changeTag);
  }, [changeTag]);

  return [tag, selectTag];
};

export default useTag;
