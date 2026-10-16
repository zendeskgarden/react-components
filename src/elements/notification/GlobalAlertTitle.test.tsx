/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { Type } from '../../types/elements';
import { GlobalAlert } from './GlobalAlert';
import { GlobalAlertTitle } from './GlobalAlertTitle';

describe('GlobalAlertTitle', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<GlobalAlertTitle ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders default styles', () => {
    const { getByText } = render(
      <GlobalAlert type="info">
        <GlobalAlertTitle>title</GlobalAlertTitle>
      </GlobalAlert>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-right', '8px');
  });

  it('renders in RTL mode', () => {
    const { getByText } = render(
      <GlobalAlert type="info">
        <GlobalAlertTitle>title</GlobalAlertTitle>
      </GlobalAlert>,
      { theme: RTL_THEME }
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-left', '8px');
  });

  it('renders "isRegular" styles', () => {
    const { getByText } = render(
      <GlobalAlert type="info">
        <GlobalAlertTitle isRegular>title</GlobalAlertTitle>
      </GlobalAlert>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '400');
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.white },
    { type: 'error', color: PALETTE.white },
    { type: 'warning', color: PALETTE.yellow[900] },
    { type: 'info', color: PALETTE.blue[900] }
  ])('renders $type color', ({ type, color }) => {
    const { getByText } = render(
      <GlobalAlert type={type}>
        <GlobalAlertTitle>title</GlobalAlertTitle>
      </GlobalAlert>
    );

    expect(getByText('title')).toHaveStyleRule('color', color);
  });
});
