/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import glob from 'glob';
import * as rootIndex from './';
import * as gardenPlacements from './utils/gardenPlacements';

describe('Index', () => {
  it('exports all components and utilities', done => {
    glob('**/[A-Z]!(*.spec).js', { cwd: __dirname }, (er, files) => {
      const mappedFiles = files
        .map(entry =>
          entry
            .replace(/\.js$/u, '')
            .split('/')
            .pop()
        )
        .concat(Object.keys(gardenPlacements))
        .sort();

      expect(Object.keys(rootIndex).sort()).toEqual(mappedFiles);
      done();
    });
  });
});
