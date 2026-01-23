/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { IGridProps } from '../types';

const COMPONENT_ID = 'grid.grid';

const colorStyles = ({ theme, $debug }: IStyledGridProps) => {
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

const sizeStyles = ({ theme, $gutters }: IStyledGridProps) => {
  const padding = $gutters ? math(`${theme.space[$gutters!]} / 2`) : 0;

  return css`
    padding-right: ${padding};
    padding-left: ${padding};
  `;
};

interface IStyledGridProps extends ThemeProps<DefaultTheme> {
  $debug?: IGridProps['debug'];
  $gutters?: IGridProps['gutters'];
}

export const StyledGrid = styled.div.attrs<IStyledGridProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $gutters: props.$gutters ?? 'md'
}))<IStyledGridProps>`
  direction: ${props => props.theme.rtl && 'rtl'};
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
