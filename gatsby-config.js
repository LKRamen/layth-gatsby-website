/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify")

module.exports = {
    adapter: adapter({
      excludeDatastoreFromEngineFunction: false,
    }),
  }
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}
