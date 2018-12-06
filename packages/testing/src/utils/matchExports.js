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
 * matchExports
 * @param {*} options
 */
function matchExports({
  globPath = '**/!(index|*.spec).js',
  cwd,
  keys,
  fileMapper = defaultFileMapper
} = {}) {
  return new Promise((resolve, reject) => {
    glob(globPath, { cwd }, (error, files) => {
      if (error) {
        reject(error);
      }

      const mappedFiles = fileMapper(files);

      expect(keys).toEqual(mappedFiles);
      resolve();
    });
  });
}

export default matchExports;
