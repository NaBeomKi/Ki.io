import React from "react";
import { graphql } from "gatsby";
import { App, ContentCard, TagsNavi, User } from "../components";
import { ContentWrapper } from "../elements";
import { useCurrentTag } from "../contexts/TagContext";

const IndexPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  const tag = useCurrentTag();

  return (
    <App title="Home">
      <div>
        <ContentWrapper>
          <User />
          <TagsNavi />
          {edges
            .filter(
              (edge) =>
                edge.node.frontmatter.tags.includes(tag) || tag === "all"
            )
            .map((edge) => {
              const { node } = edge;
              return <ContentCard key={node.slug} {...node} />;
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
          excerpt(pruneLength: 140, truncate: true)
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
