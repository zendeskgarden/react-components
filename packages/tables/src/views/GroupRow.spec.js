/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import GroupRow from './GroupRow';

describe('GroupRow', () => {
  it('applies default styling by default', () => {
    const { container } = render(<GroupRow />);

    expect(container.firstChild).toHaveClass('c-table__row');
    expect(container.firstChild).toHaveClass('c-table__row--group');
  });
});
