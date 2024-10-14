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
    ignores: ['**/dist', 'packages/*/demo/stories/*.spec.tsx']
  },
  {
    rules: {
      'sort-imports': 'off',
      'react/no-set-state': 'error'
    }
  },
  {
    files: ['packages/*/src/**/*.{ts,tsx}'],
    ignores: ['packages/.template/**/*.{ts,tsx}'],
    ...typescriptPlugin,
    rules: {
      ...typescriptRules
    }
  },
  {
    files: ['packages/*/src/**/*.spec.{ts,tsx}'],
    ignores: ['packages/.template/**/*.spec.{ts,tsx}'],
    ...typescriptPlugin,
    ...jestPlugin,
    rules: {
      ...typescriptRules,
      ...jestPlugin.rules,
      'no-console': 'off',
      'react/button-has-type': 'off'
    }
  }
];
