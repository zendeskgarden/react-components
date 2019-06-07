/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Item from './Item';

describe('Item', () => {
  it('renders default styling', () => {
    const { container } = render(<Item />);

    expect(container.firstChild).toHaveClass('c-breadcrumb__item');
  });

  it('renders current styling', () => {
    const { container } = render(<Item current />);

    expect(container.firstChild).toHaveClass('is-current');
  });
});
