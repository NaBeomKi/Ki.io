import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { App, Post } from "../components";
import { ContentWrapper } from "../elements";

const postPage = ({ pageContext, data }) => {
  const {
    mdx: {
      body,
      tableOfContents,
      frontmatter: { date, title, tags, featureImage },
    },
  } = data;
  const { next, previous } = pageContext;

  return (
    <App title={title}>
      <div>
        <ContentWrapper>
          <Post
            title={title}
            date={date}
            tags={tags}
            featureImage={featureImage}
            toc={tableOfContents}
            previous={previous}
            next={next}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </Post>
        </ContentWrapper>
      </div>
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
