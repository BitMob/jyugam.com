exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(works)/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              titleEn
              date
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = require("path")
    const { frontmatter } = node
    const titleEn = frontmatter.titleEn
    const slug = titleEn.toLowerCase().replace(/ /gi, "-").replace(/'/gi, "")

    createPage({
      path: `work/${slug}`,
      component: path.resolve(`src/templates/work.js`),
      context: {
        id: node.id,
      },
    })
  })
}
