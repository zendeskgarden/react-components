/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import reactPlugin from '@zendeskgarden/eslint-config/plugins/react.js';
import typescriptPlugin from '@zendeskgarden/eslint-config/plugins/typescript.js';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['.legacy', 'dist', 'packages']),

  ...config,
  reactPlugin,
  noticePlugin,

  /* Config overrides */
  {
    languageOptions: {
      parserOptions: {
        requireConfigFile: false
      }
    },
    rules: {
      'sort-imports': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },

  /* TypeScript files */
  {
    files: ['**/*.{ts,tsx}'],
    ...typescriptPlugin,
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
]);
