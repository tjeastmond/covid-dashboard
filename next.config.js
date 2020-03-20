const { resolve } = require('path');

module.exports = {
  poweredByHeader: false,
  webpack: config => {
    config.resolve.alias['Components'] = resolve(__dirname, 'src/Components');
    config.resolve.alias['Services'] = resolve(__dirname, 'src/Services');
    return config;
  }
};
