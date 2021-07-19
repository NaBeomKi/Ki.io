module.exports = {
  siteMetadata: {
    siteUrl: "https://beomki69.github.io/",
    title: "Ki's blog",
    description: "Ki's Tech blog",
    image: "/indexTumb.png",
    author: "Ki",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            `Mulish:n4,i4,n7,i7`,
            `Noto Sans KR:n4,n7`,
            `Fira Code`,
            `Ubuntu Mono`,
          ],
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-fontawesome-css`,
  ],
};
