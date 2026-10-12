/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { CursorPagination } from './CursorPagination';

describe('Next', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { getByRole } = render(
      <CursorPagination>
        <CursorPagination.Next ref={ref} />
      </CursorPagination>
    );

    expect(getByRole('button')).toBe(ref.current);
  });

  it('sets the Garden attributes after the props', () => {
    const { getByRole } = render(
      <CursorPagination>
        <CursorPagination.Next data-garden-id="custom" data-garden-version="0" />
      </CursorPagination>
    );

    expect(getByRole('button')).toHaveAttribute('data-garden-id', 'cursor_pagination.cursor');
    expect(getByRole('button')).not.toHaveAttribute('data-garden-version', '0');
  });
});
