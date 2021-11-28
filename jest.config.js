const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\.module\.css$": 'identity-obj-proxy',
  },
  clearMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
