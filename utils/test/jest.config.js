module.exports = {
  rootDir: '../../',
  setupTestFrameworkScriptFile: '<rootDir>/utils/test/jest.setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|json)$': 'identity-obj-proxy',
    '@zendesk/garden-css': 'identity-obj-proxy',
    '^utils': '<rootDir>/utils/test/jest.utils.js'
  },
  modulePathIgnorePatterns: ['packages/.[a-z]*/dist'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(garden-react)/)']
};
