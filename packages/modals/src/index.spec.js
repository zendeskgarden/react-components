/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getExports } from 'garden-test-utils';
import * as rootIndex from './';

describe('Index', () => {
  it('exports all components and utilities', async () => {
    const exports = await getExports({
      globPath: '**/[A-Z]!(*.spec).js',
      cwd: __dirname,
      fileMapper: files => {
        return files
          .filter(file => !/ModalContext/u.test(file))
          .map(entry =>
            entry
              .replace(/\.js$/u, '')
              .split('/')
              .pop()
          )
          .sort();
      }
    });

    expect(Object.keys(rootIndex).sort()).toEqual(exports);
  });
});
