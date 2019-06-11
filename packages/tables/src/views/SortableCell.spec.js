/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import SortableCell from './SortableCell';

describe('SortableCell', () => {
  it('applies default styling', () => {
    const { getByTestId } = render(<SortableCell data-test-id="button" />);

    expect(getByTestId('button')).toHaveClass('c-table__row__cell__sortable');
  });

  it('applies focused styling if provided', () => {
    const { getByTestId } = render(<SortableCell focused data-test-id="button" />);

    expect(getByTestId('button')).toHaveClass('is-focused');
  });

  it('applies active styling if provided', () => {
    const { getByTestId } = render(<SortableCell active data-test-id="button" />);

    expect(getByTestId('button')).toHaveClass('is-active');
  });

  describe('sorting', () => {
    it('applies ascending props when applied', () => {
      const { getByTestId } = render(<SortableCell sort="asc" data-test-id="button" />);

      expect(getByTestId('button')).toHaveClass('is-ascending');
    });

    it('applies descending props when applied', () => {
      const { getByTestId } = render(<SortableCell sort="desc" data-test-id="button" />);

      expect(getByTestId('button')).toHaveClass('is-descending');
    });
  });
});
