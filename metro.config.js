const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    extraNodeModules: {
      'stream': require.resolve('readable-stream'),
      // Add other necessary polyfills here
    },
  },
};
