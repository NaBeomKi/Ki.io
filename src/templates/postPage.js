import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { App, Post } from "../components";

const postPage = ({ pageContext, data }) => {
  const {
    mdx: {
      body,
      frontmatter: { date, title, tags, featureImage },
    },
  } = data;
  return (
    <App>
      <Post title={title} date={date} tags={tags} featureImage={featureImage}>
        <MDXRenderer>{body}</MDXRenderer>
      </Post>
    </App>
  );
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
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
