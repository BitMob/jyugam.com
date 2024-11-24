exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(/works/)/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            titleEn
            date
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
  }

  result.data.allMarkdownRemark.nodes.forEach(({ id, frontmatter }) => {
    const path = require("path");

    const titleEn = frontmatter.titleEn;
    const slug = titleEn.toLowerCase().replace(/ /gi, "-").replace(/'/gi, "");

    createPage({
      path: `work/${slug}`,
      component: path.resolve(`src/templates/work.js`),
      context: { id },
    });
  });
};
