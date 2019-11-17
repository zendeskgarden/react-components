/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { GRID_GUTTERS } from '../utils/useGridContext';

const COMPONENT_ID = 'grid.row';

const sizeStyles = (props: IStyledRowProps) => {
  const margin = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    margin-right: -${margin};
    margin-left: -${margin};
  `;
};

export interface IStyledRowProps extends ThemeProps<DefaultTheme> {
  alignContent?: 'start' | 'center' | 'end' | 'around' | 'between' | 'stretch';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
  gutters?: GRID_GUTTERS;
}

export const StyledRow = styled.div.attrs<IStyledRowProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRowProps>`
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
