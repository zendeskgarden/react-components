/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rootDir: '../../',
  modulePathIgnorePatterns: ['./node_modules'],
  transformIgnorePatterns: ['\\/node_modules\\/(?!@zendeskgarden)'],
  resolver: `${__dirname}/jest.resolver.js`,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    PACKAGE_VERSION: 'version'
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/utils/test/jest.setup.js',
  moduleNameMapper: {
    '\\.(css|json)$': 'identity-obj-proxy',
    '@zendeskgarden/css': 'identity-obj-proxy',
    '^utils': '<rootDir>/utils/test/jest.utils.js'
  },
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/demo/coverage'
};
