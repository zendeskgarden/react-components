/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { useTheme } from 'styled-components';
import { describe, expect, it } from 'vitest';

import PALETTE from '../theming/elements/palette';
import DEFAULT_THEME from '../theming/elements/theme';
import { getColor } from '../theming/utils/getColor';
import type { IStyledBaseProps } from '../types/views';
import { DARK_THEME, render, RTL_DARK_THEME, RTL_THEME } from './render';

const StyledTest = styled.div<IStyledBaseProps>`
  direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
`;

const Test = () => {
  const theme = useTheme();

  return <StyledTest>{JSON.stringify(theme)}</StyledTest>;
};

describe('render', () => {
  it('provides a default theming context', () => {
    const { container } = render(<Test />);

    expect(container.textContent).toEqual(JSON.stringify(DEFAULT_THEME));
    expect(container.firstChild).toHaveStyle({ color: PALETTE.grey[900], direction: 'ltr' });
  });

  it('accepts a modified theme', () => {
    const { container, rerender } = render(<Test />, { theme: DARK_THEME });

    expect(container.firstChild).toHaveStyle({ color: PALETTE.grey[300] });
    rerender(<Test />, { theme: RTL_THEME });
    expect(container.firstChild).toHaveStyle({ direction: 'rtl' });
    rerender(<Test />, { theme: RTL_DARK_THEME });
    expect(container.firstChild).toHaveStyle({ color: PALETTE.grey[300], direction: 'rtl' });
  });
});
