/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const micromatch = require('micromatch');

module.exports = {
  '*.{js,ts,tsx}': [
    'stylelint',
    'eslint',
    'jest --config=utils/test/jest.config.js --findRelatedTests',
    'prettier --write',
    'git add'
  ],
  '*.md': files =>
    micromatch
      .not(files, '*CHANGELOG.md')
      .map(file => `markdownlint ${file}; prettier --write ${file}; git add ${file};`),
  '**/package.json': ['prettier-package-json --write', 'git add']
};
