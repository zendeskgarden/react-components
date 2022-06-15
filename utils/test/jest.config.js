/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const fs = require('fs');

module.exports = {
  rootDir: '../../',
  roots: ['<rootDir>', path.resolve(__dirname, 'rootDir')],
  cacheDirectory: '<rootDir>/.cache/jest',
  coverageDirectory: '<rootDir>/.cache/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/*/src/index.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/*/src/types/index.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/.template/**',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  testMatch: ['<rootDir>/packages/*/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/.template'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/utils/test/jest.setup.js'],
  modulePathIgnorePatterns: ['./node_modules'],
  transformIgnorePatterns: ['\\/node_modules\\/(?!@zendeskgarden)'],
  transform: {
    '^.+\\.(j|t)sx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        tsconfigRaw: fs.readFileSync(path.resolve(__dirname, 'tsconfig.test.json')),
        loaders: {
          '.spec.js': 'tsx'
        }
      }
    ]
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '@zendeskgarden/css(?!-variables)': 'identity-obj-proxy',
    'garden-test-utils': '<rootDir>/utils/test/garden-test-utils.tsx',
    '\\.(svg)$': '<rootDir>/utils/test/svg-mock.tsx'
  },
  globals: {
    PACKAGE_VERSION: 'version'
  }
};
