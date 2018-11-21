const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.modules.push(path.join(__dirname, "src"));
    return config;
  }
};
