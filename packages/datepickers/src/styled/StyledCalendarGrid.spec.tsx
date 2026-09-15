/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { SELECTOR_FOCUS_VISIBLE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import { StyledCalendarGrid } from './StyledCalendarGrid';

describe('StyledCalendarGrid', () => {
  it('renders at the default size when not compact', () => {
    const { container } = render(<StyledCalendarGrid />);

    expect(container.firstChild).toHaveStyleRule('grid-template-columns', 'repeat(7, 40px)');
    expect(container.firstChild).toHaveStyleRule('padding', '20px');
  });

  it('shrinks columns and padding when compact', () => {
    const { container } = render(<StyledCalendarGrid $isCompact />);

    expect(container.firstChild).toHaveStyleRule('grid-template-columns', 'repeat(7, 32px)');
    expect(container.firstChild).toHaveStyleRule('padding', '16px');
  });

  it('scrolls overflowing content instead of clipping it', () => {
    const { container } = render(<StyledCalendarGrid />);

    expect(container.firstChild).toHaveStyleRule('overflow', 'auto');
  });

  it('shows a visible focus indicator when it becomes keyboard-focusable', () => {
    const { container } = render(<StyledCalendarGrid />);

    expect(container.firstChild).toHaveStyleRule('outline', 'none', { modifier: '&:focus' });
    expect(container.firstChild).toHaveStyleRule('outline', '2px solid transparent', {
      modifier: SELECTOR_FOCUS_VISIBLE
    });
    expect(container.firstChild).toHaveStyleRule('outline-offset', '1px', {
      modifier: SELECTOR_FOCUS_VISIBLE
    });
  });
});
