/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '..', '..'),
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
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            preserveAllComments: true
          }
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
