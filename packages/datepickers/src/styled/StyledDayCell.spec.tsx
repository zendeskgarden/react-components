/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledDayCell } from './StyledDayCell';
import { StyledCalendarTable } from './StyledCalendarTable';

describe('StyledDayCell', () => {
  it('shows a pointer cursor by default', () => {
    const { container } = render(<StyledDayCell />);

    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  it('shows a default cursor when aria-disabled', () => {
    const { container } = render(<StyledDayCell />);

    expect(container.firstChild).toHaveStyleRule('cursor', 'default', {
      modifier: "&[aria-disabled='true']"
    });
  });

  it('shows a default cursor within a read-only grid', () => {
    const { container } = render(<StyledDayCell />);

    expect(container.firstChild).toHaveStyleRule('cursor', 'default', {
      modifier: `${StyledCalendarTable}[aria-readonly='true'] &`
    });
  });

  it('suppresses its own native focus outline, since the visible ring is drawn on the day-number glyph', () => {
    const { container } = render(<StyledDayCell />);

    expect(container.firstChild).toHaveStyleRule('outline', 'none', { modifier: '&:focus' });
  });
});
