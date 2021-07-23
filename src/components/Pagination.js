import React from "react";
import { PaginationWrapper, Span, Strong } from "../elements";
import { Button, FaIcon } from "./index";

export const Pagination = ({ previous, next }) => {
  return (
    <PaginationWrapper>
      <div>
        {previous && (
          <Button className="prev" href={`/posts/${previous.slug}`}>
            <FaIcon type="far" name="arrow-alt-circle-left" size="2" />
            <div>
              <Span>Previous Post</Span>
              <div>
                <Strong>{previous.frontmatter.title}</Strong>
              </div>
            </div>
          </Button>
        )}
      </div>
      <div>
        {next && (
          <Button className="next" href={`/posts/${next.slug}`}>
            <div>
              <Span>Next Post</Span>{" "}
              <div>
                <Strong>{next.frontmatter.title}</Strong>
              </div>
            </div>
            <FaIcon type="far" name="arrow-alt-circle-right" size="2" />
          </Button>
        )}
      </div>
    </PaginationWrapper>
  );
};
