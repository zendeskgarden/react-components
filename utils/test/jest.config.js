module.exports = {
  rootDir: '../../',
  setupTestFrameworkScriptFile: '<rootDir>/utils/test/jest.setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|json)$': 'identity-obj-proxy',
    '@zendesk/garden-css': 'identity-obj-proxy',
    '^utils': '<rootDir>/utils/test/jest.utils.js',
    'styled-components': '<rootDir>/node_modules/styled-components'
  },
  modulePathIgnorePatterns: ['packages/.[a-z]*/dist'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(garden-react)/)'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/demo/coverage'
};
