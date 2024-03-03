module.exports = {
  siteMetadata: {
    title: `Planned Universe`,
    description: `Planned Universe: an initiative about plans of all dimensions, contexts, and worlds`,
    author: `@planneduniverse`,
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'Metadome',
    postsPerPage: 5,
    mainMenu: [],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `babel-preset-gatsby`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: 'language-',
          //     inlineCodeMarker: null,
          //     aliases: {},
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //   },
          // },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Planned Universe`,
        short_name: `planned-universe`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/content/images/hello-icon.png`,
      },
    },
    // {
    //   resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    //   options: {
    //     fields: [`title`, `tags`, `type`, `location`],
    //     resolvers: {
    //       // For any node of type MarkdownRemark, list how to resolve the fields` values
    //       MarkdownRemark: {
    //         title: (node) => node.frontmatter.title,
    //         tags: (node) => node.frontmatter.tags,
    //         location: (node) => node.frontmatter.location,
    //         type: (node) => node.frontmatter.type,
    //         path: (node) => node.frontmatter.path,
    //       },
    //     },
    //     // Optional filter to limit indexed nodes
    //     filter: (node, getNode) => node.frontmatter.tags !== 'exempt',
    //   },
    // },
  ],
  trailingSlash: 'ignore',
};
