/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import classNames from 'classnames';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';
import { GRID_GUTTERS } from '../utils/useGridContext';

const COMPONENT_ID = 'grid.row';

const colorStyles = (props: IStyledRowProps) => {
  const backgroundColor = getColor('primaryHue', 200, props.theme, 0.35);

  return css`
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = (props: IStyledRowProps) => {
  const margin = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    margin-right: -${margin};
    margin-left: -${margin};
  `;
};

export interface IStyledRowProps extends ThemeProps<DefaultTheme> {
  isCollapsed?: boolean;
  isDebug?: boolean;
  alignItems?: 'start' | 'center' | 'end';
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
  gutters?: GRID_GUTTERS;
}

export const StyledRow = styled.div.attrs<IStyledRowProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames({
    [GridStyles['no-gutters']]: props.isCollapsed,
    [GridStyles[`align-items-${props.alignItems}`]]: props.alignItems,
    [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent
  })
}))<IStyledRowProps>`
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;

  ${props => sizeStyles(props)};
  ${props => props.isDebug && colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
