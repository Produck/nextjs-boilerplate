const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.modules.push(path.join(__dirname, "src"));
    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]__[hash:base64:5]"
  }
});
