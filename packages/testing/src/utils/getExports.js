/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import glob from 'glob';

/**
 * defaultFileMapper
 * @param {*} files
 */
function defaultFileMapper(files) {
  return files
    .map(entry =>
      entry
        .replace(/\.js$/u, '')
        .split('/')
        .pop()
    )
    .sort();
}

/**
 * getExports
 * @param {*} options
 */
function getExports({
  globPath = '**/!(index|*.spec).js',
  cwd,
  options = {},
  fileMapper = defaultFileMapper
} = {}) {
  return new Promise((resolve, reject) => {
    glob(globPath, { ...options, cwd }, (error, files) => {
      if (error) {
        reject(error);
      }

      resolve(fileMapper(files));
    });
  });
}

export default getExports;
