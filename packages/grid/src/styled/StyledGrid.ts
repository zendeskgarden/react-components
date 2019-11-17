/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { GRID_GUTTERS } from '../utils/useGridContext';

const COMPONENT_ID = 'grid.grid';

export interface IStyledGridProps extends ThemeProps<DefaultTheme> {
  gutters?: GRID_GUTTERS;
}

const sizeStyles = (props: IStyledGridProps) => {
  const padding = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    padding-right: ${padding};
    padding-left: ${padding};
  `;
};

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

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGrid.defaultProps = {
  gutters: 'md',
  theme: DEFAULT_THEME
};
