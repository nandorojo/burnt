const withInfoPlist = require("@expo/config-plugins").withInfoPlist;

module.exports = (config) =>
  withInfoPlist(config, (config) => {
    config.modResults = {
      ...config.modResults,
      "ios.deploymentTarget": "13.0",
    };

    return config;
  });
