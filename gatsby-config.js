const contentDir = `${__dirname}/src/content`

module.exports = {
  siteMetadata: {
    title: `Jyugam`,
    description: `Jyugam`,
    author: `maf`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${contentDir}/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `intros`,
        path: `${contentDir}/intros`,
      },
    },
  ],
}
