import React, { useRef, useEffect } from "react";
import { CommentsWrapper } from "../elements";

const src = "https://utteranc.es/client.js";

export const Comments = ({ repo }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const comment = document.createElement("script");

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      comment.setAttribute(key, value);
    });

    containerRef.current.appendChild(comment);
  }, [repo]);

  return <CommentsWrapper ref={containerRef} />;
};

Comments.displayName = "comment";
