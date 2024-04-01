/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IGridProps } from '../types';

const COMPONENT_ID = 'grid.grid';

const colorStyles = (props: IStyledGridProps) => {
  const borderColor = getColorV8(props.theme.palette.crimson, 400, props.theme, 0.5);
  const borderWidth = math(`${props.theme.borderWidths.sm} * 2`);

  return css`
    /* prettier-ignore */
    box-shadow:
      -${borderWidth} 0 0 0 ${borderColor},
      ${borderWidth} 0 0 0 ${borderColor};
  `;
};

const sizeStyles = (props: IStyledGridProps) => {
  const padding = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    padding-right: ${padding};
    padding-left: ${padding};
  `;
};

interface IStyledGridProps extends Omit<IGridProps, 'columns'>, ThemeProps<DefaultTheme> {}

export const StyledGrid = styled.div.attrs<IStyledGridProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledGridProps>`
  direction: ${props => props.theme.rtl && 'rtl'};
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;

  ${props => sizeStyles(props)};
  ${props => props.debug && colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGrid.defaultProps = {
  gutters: 'md',
  theme: DEFAULT_THEME
};
