/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { TYPE_ALIGN_SELF, TYPE_NUMBER, TYPE_SPACE } from '../utils/types';

const COMPONENT_ID = 'grid.col';

const colorStyles = (props: IStyledColProps) => {
  const backgroundColor = getColor('primaryHue', 600, props.theme, 0.1);

  return css`
    background-clip: content-box;
    background-color: ${backgroundColor};
  `;
};

const flexStyles = (
  basis: TYPE_NUMBER | boolean | undefined,
  alignSelf: TYPE_ALIGN_SELF | undefined,
  offset: TYPE_NUMBER | undefined,
  order: TYPE_NUMBER | undefined,
  props: IStyledColProps
) => {
  const margin = offset && `${math(`${offset} / ${props.columns} * 100`)}%`;
  let flexBasis;
  let maxWidth;
  let width;

  if (typeof basis === 'boolean') {
    flexBasis = 0;
    maxWidth = '100%';
    width = '100%';
  } else if (basis === 'auto') {
    flexBasis = 'auto';
    maxWidth = '100%';
    width = 'auto';
  } else {
    flexBasis = `${math(`${basis} / ${props.columns} * 100`)}%`;
    maxWidth = flexBasis;
    width = '100%';
  }

  let flexOrder;

  if (order === 'first') {
    flexOrder = -1;
  } else if (order === 'last') {
    flexOrder = math(`${props.columns} + 1`);
  } else {
    flexOrder = order;
  }

  return css`
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    flex-basis: ${flexBasis};
    flex-grow: ${!basis && '1'};
    flex-shrink: ${basis && '0'};
    align-self: ${alignSelf === 'start' || alignSelf === 'end' ? `flex-${alignSelf}` : alignSelf};
    order: ${flexOrder};
    /* stylelint-disable-next-line property-no-unknown */
    margin-${props.theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    max-width: ${maxWidth};
  `;
};

const mediaStyles = (
  minWidth: string,
  basis: TYPE_NUMBER | boolean,
  alignSelf: TYPE_ALIGN_SELF | undefined,
  offset: TYPE_NUMBER | undefined,
  order: TYPE_NUMBER | undefined,
  props: IStyledColProps
) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${flexStyles(basis, alignSelf, offset, order, props)};
    }
  `;
};

const sizeStyles = (props: IStyledColProps) => {
  const padding = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    padding-right: ${padding};
    padding-left: ${padding};
  `;
};

export interface IStyledColProps extends ThemeProps<DefaultTheme> {
  columns?: TYPE_NUMBER;
  gutters?: TYPE_SPACE;
  basis?: TYPE_NUMBER;
  xs?: TYPE_NUMBER | boolean;
  sm?: TYPE_NUMBER | boolean;
  md?: TYPE_NUMBER | boolean;
  lg?: TYPE_NUMBER | boolean;
  xl?: TYPE_NUMBER | boolean;
  alignSelf?: TYPE_ALIGN_SELF;
  alignSelfXs?: TYPE_ALIGN_SELF;
  alignSelfSm?: TYPE_ALIGN_SELF;
  alignSelfMd?: TYPE_ALIGN_SELF;
  alignSelfLg?: TYPE_ALIGN_SELF;
  alignSelfXl?: TYPE_ALIGN_SELF;
  offset?: TYPE_NUMBER;
  offsetXs?: TYPE_NUMBER;
  offsetSm?: TYPE_NUMBER;
  offsetMd?: TYPE_NUMBER;
  offsetLg?: TYPE_NUMBER;
  offsetXl?: TYPE_NUMBER;
  order?: TYPE_NUMBER;
  orderXs?: TYPE_NUMBER;
  orderSm?: TYPE_NUMBER;
  orderMd?: TYPE_NUMBER;
  orderLg?: TYPE_NUMBER;
  orderXl?: TYPE_NUMBER;
  isDebug?: boolean;
}

export const StyledCol = styled.div.attrs<IStyledColProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledColProps>`
  box-sizing: inherit;
  position: relative;

  ${props => flexStyles(props.basis || false, props.alignSelf, props.offset, props.order, props)};
  ${props => sizeStyles(props)};
  ${props => props.isDebug && colorStyles(props)};

  ${props =>
    props.xs &&
    mediaStyles(
      props.theme.breakpoints.xs,
      props.xs,
      props.alignSelfXs,
      props.offsetXs,
      props.orderXs,
      props
    )};

  ${props =>
    props.sm &&
    mediaStyles(
      props.theme.breakpoints.sm,
      props.sm,
      props.alignSelfSm,
      props.offsetSm,
      props.orderSm,
      props
    )};

  ${props =>
    props.md &&
    mediaStyles(
      props.theme.breakpoints.md,
      props.md,
      props.alignSelfMd,
      props.offsetMd,
      props.orderMd,
      props
    )};

  ${props =>
    props.lg &&
    mediaStyles(
      props.theme.breakpoints.lg,
      props.lg,
      props.alignSelfLg,
      props.offsetLg,
      props.orderLg,
      props
    )};

  ${props =>
    props.xl &&
    mediaStyles(
      props.theme.breakpoints.xl,
      props.xl,
      props.alignSelfXl,
      props.offsetXl,
      props.orderXl,
      props
    )};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCol.defaultProps = {
  theme: DEFAULT_THEME
};
