/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import { StyledCalendarItem } from './StyledCalendarItem';
import { StyledDayCell } from './StyledDayCell';

describe('StyledCalendarItem', () => {
  it("is the positioning context for a cell's range highlight", () => {
    const { container } = render(<StyledCalendarItem />);

    expect(container.firstChild).toHaveStyleRule('position', 'relative');
  });

  it("paints a focused day's focus ring above its neighbors' hover and range tints", () => {
    const { container } = render(<StyledCalendarItem />);

    expect(container.firstChild).toHaveStyleRule('z-index', '1', {
      modifier: `${StyledDayCell}:focus-visible &`
    });
  });

  it('leaves unfocused items in the default stacking order', () => {
    const { container } = render(<StyledCalendarItem />);

    expect(container.firstChild).not.toHaveStyleRule('z-index', expect.anything());
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledCalendarItem />);

      expect(container.firstChild).toHaveAttribute('data-garden-id', 'datepickers.calendar_item');
    });

    it('applies a theme override for `datepickers.calendar_item`', () => {
      const { container } = render(
        <ThemeProvider
          theme={{
            ...DEFAULT_THEME,
            components: { 'datepickers.calendar_item': 'outline: 1px solid red;' }
          }}
        >
          <StyledCalendarItem />
        </ThemeProvider>
      );

      expect(container.firstChild).toHaveStyleRule('outline', '1px solid red');
    });
  });
});
