/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { CursorPagination } from '../CursorPagination';

describe('Previous', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { getByRole } = render(
      <CursorPagination>
        <CursorPagination.Previous ref={ref} />
      </CursorPagination>
    );

    expect(getByRole('button')).toBe(ref.current);
  });
});
