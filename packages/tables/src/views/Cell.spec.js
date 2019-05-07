/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import Cell from './Cell';

describe('Cell', () => {
  it('renders default styling', () => {
    const { container } = render(<Cell />);

    expect(container.firstChild).toHaveClass('c-table__row__cell');
  });

  it('renders minimum styling if provided', () => {
    const { container } = render(<Cell minimum />);

    expect(container.firstChild).toHaveClass('c-table__row__cell--min');
  });

  it('renders truncation styling if provided', () => {
    const { container } = render(<Cell truncate />);

    expect(container.firstChild).toHaveClass('c-table__row__cell--truncate');
  });

  it('renders menu styling if provided', () => {
    const { container } = render(<Cell menu />);

    expect(container.firstChild).toHaveClass('c-table__row__cell--overflow');
  });
});
