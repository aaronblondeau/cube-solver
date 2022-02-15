// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const { startDevServer } = require("@cypress/vite-dev-server");

// eslint-disable-next-line no-undef
module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    return startDevServer({
      options,
      viteConfig: {
        // eslint-disable-next-line no-undef
        configFile: path.resolve(__dirname, "..", "..", "vite.config.ts"),
      },
    });
  });

  return config;
};
