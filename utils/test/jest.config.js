/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rootDir: '../../',
  setupTestFrameworkScriptFile: '<rootDir>/utils/test/jest.setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|json)$': 'identity-obj-proxy',
    '@zendeskgarden/css': 'identity-obj-proxy',
    '^utils': '<rootDir>/utils/test/jest.utils.js',
    'styled-components': '<rootDir>/node_modules/styled-components'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(garden-react)/)'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/demo/coverage',
  globals: {
    PACKAGE_VERSION: 'version'
  }
};
