import React from "react";
import { graphql } from "gatsby";
import { App, ContentCard, AllTags } from "../components";
import { ContentWrapper } from "../elements";

const IndexPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  return (
    <App title="Home">
      <div>
        <ContentWrapper>
          <AllTags />
          {edges.map((edge) => {
            const {
              node: {
                slug,
                excerpt,
                frontmatter: { date, tags, title, featureImage },
              },
            } = edge;
            return (
              <ContentCard
                key={slug}
                title={title}
                date={date}
                tags={tags}
                featureImage={featureImage}
                slug={slug}
                excerpt={excerpt}
              />
            );
          })}
        </ContentWrapper>
      </div>
    </App>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query AllPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          slug
          excerpt(pruneLength: 140)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
            featureImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
