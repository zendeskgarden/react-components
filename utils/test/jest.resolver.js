/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const path = require('path');
const resolveFrom = require('resolve-from');
const ResolverFactory = require('enhanced-resolve').ResolverFactory;

const webpackResolver = ResolverFactory.createResolver({
  fileSystem: fs,
  useSyncFileSystemCalls: true,
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  mainFields: ['zendeskgarden:src', 'main']
});

module.exports = (modulePath, params) => {
  // Use resolveFrom if a relative import
  if (modulePath.startsWith('.') || modulePath.startsWith(path.sep)) {
    try {
      return resolveFrom(params.basedir, modulePath);
    } catch (e) {} // eslint-disable-line
  }

  // Otherwise use the webpack resolver
  let result = webpackResolver.resolveSync({}, params.basedir, modulePath);

  if (result) {
    /**
     * Dereference symlinks so we don't create a separate module
     */
    result = fs.realpathSync(result);
  }

  return result;
};
