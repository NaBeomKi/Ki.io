import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { App, ContentCard, TagsNavi, User } from "../components";
import { ContentWrapper } from "../elements";
import { useDispatch, useTag } from "../store/StoreContext";
import { ALL, SET_TAG, TAG } from "../constants";

const IndexPage = ({ location, data }) => {
  const {
    allMdx: { edges },
  } = data;

  const tag = useTag();
  const dispatch = useDispatch();

  useEffect(() => {
    const tagName = new URLSearchParams(location.search).get(TAG);
    dispatch({ type: SET_TAG, tag: tagName || ALL });
  }, []);

  return (
    <App title="Home">
      <div>
        <ContentWrapper>
          <User />
          <TagsNavi />
          {edges
            .filter(
              (edge) => edge.node.frontmatter.tags.includes(tag) || tag === ALL
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
