/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import TabPanel from './TabPanel';

describe('TabPanel', () => {
  it('renders default styling', () => {
    const { container } = render(<TabPanel />);

    expect(container.firstChild).toHaveClass('c-tab__panel');
  });
});
