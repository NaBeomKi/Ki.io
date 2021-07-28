import React from "react";
import { graphql } from "gatsby";
import { App, ContentCard, AllTags, User } from "../components";
import { ContentWrapper } from "../elements";

const IndexPage = ({ pageContext, data }) => {
  const {
    allMdx: { edges },
  } = data;

  const { tag } = pageContext;

  const pageTitle = tag[0].toUpperCase() + tag.slice(1);

  return (
    <App title={pageTitle}>
      <div>
        <ContentWrapper>
          <User />
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

export const tagPageQuery = graphql`
  query tagPageQuery($tag: [String]) {
    allMdx(
      filter: { frontmatter: { tags: { in: $tag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      edges {
        node {
          slug
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
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
