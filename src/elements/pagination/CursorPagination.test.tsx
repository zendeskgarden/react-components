/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { CursorPagination } from './CursorPagination';

describe('CursorPagination', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLElement>();
    const { container } = render(<CursorPagination ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<CursorPagination />);

    expect(container.firstChild!.nodeName).toBe('NAV');
  });

  it('sets the Garden attributes after the props', () => {
    const { container } = render(
      <CursorPagination data-garden-id="custom" data-garden-version="0" />
    );

    expect(container.firstChild).toHaveAttribute('data-garden-id', 'cursor_pagination');
    expect(container.firstChild).not.toHaveAttribute('data-garden-version', '0');
  });

  describe('icon margins', () => {
    const margin = DEFAULT_THEME.space.base;

    it.each([
      ['First', 'right', 'left'],
      ['Previous', 'right', 'left'],
      ['Next', 'left', 'right'],
      ['Last', 'left', 'right']
    ] as const)('places the %s icon margin on the %s, or the %s in RTL', (name, ltr, rtl) => {
      const Cursor = CursorPagination[name];
      const { container, unmount } = render(
        <CursorPagination>
          <Cursor />
        </CursorPagination>
      );

      expect(container.querySelector('svg')).toHaveStyle(`margin-${ltr}: ${margin}px`);

      unmount();

      const { container: rtlContainer } = render(
        <CursorPagination>
          <Cursor />
        </CursorPagination>,
        { theme: RTL_THEME }
      );

      expect(rtlContainer.querySelector('svg')).toHaveStyle(`margin-${rtl}: ${margin}px`);
    });
  });
});
