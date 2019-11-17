/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { GRID_GUTTERS } from '../utils/useGridContext';

const COMPONENT_ID = 'grid.col';

const colorStyles = (props: IStyledColProps) => {
  const backgroundColor = getColor('dangerHue', 300, props.theme, 0.35);

  return css`
    background-clip: content-box;
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = (props: IStyledColProps) => {
  const margin = props.offset && `${math(`${props.offset} / ${props.columns} * 100`)}%`;
  const padding = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;
  let flexBasis;
  let width;
  let maxWidth;

  if (props.basis) {
    if (props.basis === 'auto') {
      flexBasis = 'auto';
      width = 'auto';
      maxWidth = '100%';
    } else {
      flexBasis = `${math(`${props.basis} / ${props.columns} * 100`)}%`;
      width = '100%';
      maxWidth = flexBasis;
    }
  } else {
    flexBasis = 0;
    width = '100%';
    maxWidth = '100%';
  }

  return css`
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    flex-basis: ${flexBasis};
    flex-grow: ${!props.basis && '1'};
    flex-shrink: ${props.basis && '0'};
    /* stylelint-disable-next-line property-no-unknown */
    margin-${props.theme.rtl ? 'right' : 'left'}: ${margin};
    padding-right: ${padding};
    padding-left: ${padding};
    width: ${width};
    max-width: ${maxWidth};
  `;
};

export interface IStyledColProps extends ThemeProps<DefaultTheme> {
  columns?: number | string;
  gutters?: GRID_GUTTERS;
  basis?: number | string;
  xs?: number | string | boolean;
  sm?: number | string | boolean;
  md?: number | string | boolean;
  lg?: number | string | boolean;
  xl?: number | string | boolean;
  offset?: number | string;
  offsetXs?: number | string;
  offsetSm?: number | string;
  offsetMd?: number | string;
  offsetLg?: number | string;
  offsetXl?: number | string;
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  order?: any;
  isDebug?: boolean;
}

export const StyledCol = styled.div.attrs<IStyledColProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledColProps>`
  box-sizing: inherit;
  position: relative;

  ${props => sizeStyles(props)};
  ${props => props.isDebug && colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
