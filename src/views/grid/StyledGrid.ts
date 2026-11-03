/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { IGridProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';

const colorStyles = ({ theme, $debug }: WithTheme<IStyledGridProps>) => {
  const borderColor =
    $debug &&
    getColor({
      theme,
      hue: 'crimson',
      shade: 700,
      transparency: theme.opacity[600]
    });
  const borderWidth = $debug && math(`${theme.borderWidths.sm} * 2`);

  return css`
    color-scheme: only ${theme.colors.base};
    /* prettier-ignore */
    box-shadow: ${
      $debug &&
      `
      -${borderWidth} 0 0 0 ${borderColor},
      ${borderWidth} 0 0 0 ${borderColor}
    `
    };
  `;
};

const sizeStyles = ({ theme, $gutters }: WithTheme<IStyledGridProps>) => {
  /* attrs cannot provide this fallback: styled-components >= 6.3.12 preserves
   * explicitly passed undefined props, so `$gutters` may still be undefined here */
  const gutters = $gutters ?? 'md';
  const padding = gutters ? math(`${theme.space[gutters]} / 2`) : 0;

  return css`
    padding-right: ${padding};
    padding-left: ${padding};
  `;
};

interface IStyledGridProps {
  $debug?: IGridProps['debug'];
  $gutters?: IGridProps['gutters'];
}

export const StyledGrid = styled.div<WithTheme<IStyledGridProps>>`
  direction: ${props => props.theme.rtl && 'rtl'};
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
