import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { App, Post } from "../components";
import { ContentWrapper } from "../elements";

const PostPage = ({ pageContext, data }) => {
  const {
    mdx: {
      body,
      tableOfContents,
      frontmatter: { date, title, featureImage },
    },
  } = data;
  const { next, previous } = pageContext;

  return (
    <App title={title} imgUrl={featureImage?.publicURL}>
      <div>
        <ContentWrapper>
          <Post
            title={title}
            date={date}
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

export default PostPage;

export const pageQuery = graphql`
  query postPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        featureImage {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
