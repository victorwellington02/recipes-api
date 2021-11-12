module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "recipes-api",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckvuzdjfj003n01wc5zn73sc5/master",
    },
  },
],
};
