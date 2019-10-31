/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const { readdirSync, readFileSync, existsSync } = require('fs');
const path = require('path');

const packageFolders = readdirSync(path.resolve(__dirname, 'packages'));
const validPackageNames = packageFolders.filter(name => !name.startsWith('.'));

const files = [];

for (const packageName of validPackageNames) {
  const PACKAGE_JSON_PATH = path.resolve(__dirname, 'packages', packageName, 'package.json');

  if (!existsSync(PACKAGE_JSON_PATH)) {
    continue;
  }

  const packageJsonText = readFileSync(PACKAGE_JSON_PATH);
  const packageJson = JSON.parse(packageJsonText);
  const maxSize = packageJson['zendeskgarden:max_size'];

  files.push({
    path: path.resolve(__dirname, 'packages', packageName, 'dist', 'umd', 'bundle.min.js'),
    maxSize: maxSize || '1 B'
  });
}

module.exports = {
  files
};
