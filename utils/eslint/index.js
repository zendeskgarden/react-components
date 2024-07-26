/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'node:fs';
import requireDefaultTheme from './rules/require-default-theme.js';

const pkg = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default {
  meta: {
    name: pkg.name,
    version: pkg.version
  },
  rules: {
    'require-default-theme': requireDefaultTheme
  }
};
