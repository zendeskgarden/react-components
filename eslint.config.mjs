/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import prettierConfig from 'eslint-config-prettier';
import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import reactPlugin from '@zendeskgarden/eslint-config/plugins/react.js';
import typescriptPlugin from '@zendeskgarden/eslint-config/plugins/typescript.js';
import jestPlugin from '@zendeskgarden/eslint-config/plugins/jest.js';
import gardenLocalPlugin from 'eslint-plugin-garden-local';

const typescriptRules = {
  ...typescriptPlugin.rules,
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  'logical-assignment-operators': 'off',
  'prefer-object-has-own': 'off',
  'react/prop-types': 'off'
};

export default [
  ...config,
  noticePlugin,
  reactPlugin,
  prettierConfig,
  {
    ignores: ['**/dist']
  },
  {
    rules: {
      'sort-imports': 'off',
      'react/no-array-index-key': 'off',
      'react/no-set-state': 'error'
    }
  },
  {
    files: ['*.mjs'],
    rules: {
      'n/no-unsupported-features/node-builtins': ['error', { version: '>=18.0.0' }]
    }
  },
  {
    files: ['*.ts', '*.tsx'],
    ...typescriptPlugin,
    rules: typescriptRules
  },
  {
    files: ['*.spec.*'],
    ...typescriptPlugin,
    ...jestPlugin,
    rules: {
      ...typescriptRules,
      ...jestPlugin.rules,
      'no-console': 'off',
      'react/button-has-type': 'off'
    }
  },
  {
    files: ['packages/**/*.{js,ts,tsx}'],
    ignores: ['*.spec.*', 'packages/*/demo/**/*'],
    ...typescriptPlugin,
    plugins: { 'garden-local': gardenLocalPlugin },
    rules: {
      ...typescriptRules,
      'garden-local/require-default-theme': 'error'
    }
  }
];
