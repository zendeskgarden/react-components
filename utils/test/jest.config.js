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
  setupFilesAfterEnv: [
    '<rootDir>/utils/test/jest.setup.js',
    '@testing-library/react/cleanup-after-each'
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '@zendeskgarden/css(?!-variables)': 'identity-obj-proxy',
    '@zendeskgarden/react-testing': '<rootDir>/packages/testing/src/index.js',
    'garden-test-utils': '<rootDir>/utils/test/garden-test-utils.js',
    '\\.(svg)$': '<rootDir>/utils/test/svg-mock.js'
  },
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx}',
    '!<rootDir>/packages/*/src/index.js',
    '!<rootDir>/packages/.template',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/demo/coverage',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/.template']
};
