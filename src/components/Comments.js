import React, { useRef, useEffect, useCallback, memo } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { CommentsWrapper } from "../elements";

const src = "https://utteranc.es/client.js";

export const Comments = memo(({ repo }) => {
  const containerRef = useRef(null);
  const theme = useTheme();

  const createComment = useCallback(() => {
    const comment = document.createElement("script");

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: `github-${theme}`,
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      comment.setAttribute(key, value);
    });

    containerRef.current.appendChild(comment);
  }, [repo, theme]);

  const postThemeMessage = useCallback(
    ($target) => {
      const message = {
        type: "set-theme",
        theme: `github-${theme}`,
      };
      $target.contentWindow.postMessage(message, src);
    },
    [theme]
  );

  useEffect(() => {
    const $comment = containerRef.current.querySelector(
      "iframe.utterances-frame"
    );
    $comment ? postThemeMessage($comment) : createComment();
  }, [createComment, postThemeMessage]);

  return <CommentsWrapper ref={containerRef} />;
});

Comments.displayName = "comment";
