/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import TabList from './TabList';

describe('TabList', () => {
  it('renders default styling', () => {
    const { container } = render(<TabList />);

    expect(container.firstChild).toHaveClass('c-tab__list');
  });
});
