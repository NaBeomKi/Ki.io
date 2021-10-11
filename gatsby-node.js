exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            slug
            frontmatter {
              title
            }
          }
          previous {
            slug
            frontmatter {
              title
            }
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const BASE_PATH = `./src/templates`;

  // Create pages for each mdx file.
  result.data.allMdx.edges.forEach(({ node, next, previous }) => {
    const { id, slug } = node;
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`${BASE_PATH}/postPage.js`),
      context: {
        id,
        // previous and next are reversed because the sort order is the reverse of the date
        next: previous,
        previous: next,
      },
    });
  });
};
