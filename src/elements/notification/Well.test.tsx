/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Well } from './Well';

describe('Well', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Well ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders with the correct styling for RTL writing systems', () => {
    const { container } = render(<Well />, { theme: RTL_THEME });

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders with the correct styling for LTR writing systems', () => {
    const { container } = render(<Well />);

    expect(container.firstChild).not.toHaveStyleRule('direction');
  });

  it('renders non-recessed styling', () => {
    const { container } = render(<Well />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.white);
  });

  it.each([
    ['light', undefined, PALETTE.grey[100]],
    ['dark', DARK_THEME, PALETTE.grey[1200]]
  ])('renders %s mode recessed styling', (_mode, theme, color) => {
    const { container } = render(<Well isRecessed />, { theme });

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each([
    ['light', undefined, PALETTE.white],
    ['dark', DARK_THEME, PALETTE.grey[1100]]
  ])('renders %s mode default background color', (_mode, theme, color) => {
    const { container } = render(<Well />, { theme });

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each([
    ['light', DEFAULT_THEME, undefined],
    ['dark', DARK_THEME, DARK_THEME]
  ] as const)('renders %s mode floating styling', (_mode, themeUnderTest, theme) => {
    const { container } = render(<Well isFloating />, { theme });

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      getColor({ theme: themeUnderTest, variable: 'background.raised' })
    );
    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });
});
