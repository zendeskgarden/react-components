/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { matchExports } from '@zendeskgarden/react-testing';
import * as rootIndex from './';

describe('Index', () => {
  it('exports all components and utilities', () => {
    return matchExports({
      globPath: '[A-Z]!(*.spec).js',
      cwd: __dirname,
      keys: Object.keys(rootIndex).sort()
    });
  });
});
