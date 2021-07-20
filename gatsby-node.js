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
          }
          previous {
            slug
          }
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
        next,
        previous,
      },
    });
  });
};
