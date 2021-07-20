import React from "react";
import { graphql } from "gatsby";

const postPage = ({ pageContext, data }) => {
  return <div>post</div>;
};

export default postPage;

export const pageQuery = graphql`
  query postPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 200, truncate: true)
      tableOfContents
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        tags
        featureImage {
          publicURL
        }
      }
    }
  }
`;
