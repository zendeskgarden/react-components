/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { TabList } from '../';

describe('TabList', () => {
  it('is able to render without parent Tabs component', () => {
    expect(() => render(<TabList>Content</TabList>)).not.toThrow();
  });
});
