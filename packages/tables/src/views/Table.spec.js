/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Table from './Table';

describe('Table', () => {
  it('renders default styling', () => {
    const { container } = render(<Table />);

    expect(container.firstChild).toHaveClass('c-table');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<Table />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders sizing correctly if provided', () => {
    const classes = {
      small: 'sm',
      large: 'lg'
    };

    ['small', 'large'].forEach(size => {
      const { container } = render(<Table size={size} />);

      expect(container.firstChild).toHaveClass(`c-table--${classes[size]}`);
    });
  });
});
