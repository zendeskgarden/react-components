/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
  rootDir: '../../',
  roots: ['<rootDir>', path.resolve(__dirname, 'rootDir')],
  preset: 'ts-jest/presets/js-with-babel',
  modulePathIgnorePatterns: ['./node_modules'],
  transformIgnorePatterns: ['\\/node_modules\\/(?!@zendeskgarden)'],
  resolver: path.resolve(__dirname, 'jest.resolver.js'),
  globals: {
    PACKAGE_VERSION: 'version',
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.test.json')
    }
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  setupFilesAfterEnv: ['<rootDir>/utils/test/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '@zendeskgarden/css(?!-variables)': 'identity-obj-proxy',
    'garden-test-utils': '<rootDir>/utils/test/garden-test-utils.tsx',
    '\\.(svg)$': '<rootDir>/utils/test/svg-mock.js'
  },
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/*/src/index.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/.template',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/utils/storybook/coverage',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/.template']
};
