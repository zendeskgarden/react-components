/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ALIGN_SELF, BREAKPOINT, GRID_NUMBER, SPACE, TEXT_ALIGN } from '../utils/types';

const COMPONENT_ID = 'grid.col';

const colorStyles = (props: IStyledColProps) => {
  const backgroundColor = getColor('primaryHue', 600, props.theme, 0.1);

  return css`
    background-clip: content-box;
    background-color: ${backgroundColor};
  `;
};

const flexStyles = (
  size: BREAKPOINT | undefined,
  alignSelf: ALIGN_SELF | undefined,
  textAlign: TEXT_ALIGN | undefined,
  offset: GRID_NUMBER | undefined,
  order: GRID_NUMBER | undefined,
  props: IStyledColProps
) => {
  const margin = offset && `${math(`${offset} / ${props.columns} * 100`)}%`;
  let flexBasis;
  let flexGrow;
  let maxWidth;
  let width;

  if (typeof size === 'boolean') {
    flexBasis = 0;
    flexGrow = 1;
    maxWidth = '100%';
  } else if (size === 'auto') {
    flexBasis = 'auto';
    flexGrow = 0;
    maxWidth = '100%';
    width = 'auto';
  } else if (size !== undefined) {
    flexBasis = `${math(`${size} / ${props.columns} * 100`)}%`;
    flexGrow = 0;
    maxWidth = flexBasis;
  }

  let horizontalAlign;

  if (textAlign === 'start') {
    horizontalAlign = props.theme.rtl ? 'right' : 'left';
  } else if (textAlign === 'end') {
    horizontalAlign = props.theme.rtl ? 'left' : 'right';
  } else {
    horizontalAlign = textAlign;
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
    flex-grow: ${flexGrow};
    flex-shrink: ${size && 0};
    align-self: ${alignSelf === 'start' || alignSelf === 'end' ? `flex-${alignSelf}` : alignSelf};
    order: ${flexOrder};
    /* stylelint-disable-next-line property-no-unknown */
    margin-${props.theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    max-width: ${maxWidth};
    text-align: ${horizontalAlign};
  `;
};

const mediaStyles = (
  minWidth: string,
  size: BREAKPOINT | undefined,
  alignSelf: ALIGN_SELF | undefined,
  textAlign: TEXT_ALIGN | undefined,
  offset: GRID_NUMBER | undefined,
  order: GRID_NUMBER | undefined,
  props: IStyledColProps
) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${flexStyles(size, alignSelf, textAlign, offset, order, props)};
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
  columns?: GRID_NUMBER;
  gutters?: SPACE;
  sizeAll?: GRID_NUMBER;
  xs?: BREAKPOINT;
  sm?: BREAKPOINT;
  md?: BREAKPOINT;
  lg?: BREAKPOINT;
  xl?: BREAKPOINT;
  alignSelf?: ALIGN_SELF;
  alignSelfXs?: ALIGN_SELF;
  alignSelfSm?: ALIGN_SELF;
  alignSelfMd?: ALIGN_SELF;
  alignSelfLg?: ALIGN_SELF;
  alignSelfXl?: ALIGN_SELF;
  textAlign?: TEXT_ALIGN;
  textAlignXs?: TEXT_ALIGN;
  textAlignSm?: TEXT_ALIGN;
  textAlignMd?: TEXT_ALIGN;
  textAlignLg?: TEXT_ALIGN;
  textAlignXl?: TEXT_ALIGN;
  offset?: GRID_NUMBER;
  offsetXs?: GRID_NUMBER;
  offsetSm?: GRID_NUMBER;
  offsetMd?: GRID_NUMBER;
  offsetLg?: GRID_NUMBER;
  offsetXl?: GRID_NUMBER;
  order?: GRID_NUMBER;
  orderXs?: GRID_NUMBER;
  orderSm?: GRID_NUMBER;
  orderMd?: GRID_NUMBER;
  orderLg?: GRID_NUMBER;
  orderXl?: GRID_NUMBER;
  debug?: boolean;
}

export const StyledCol = styled.div.attrs<IStyledColProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledColProps>`
  box-sizing: border-box;
  width: 100%;

  ${props =>
    flexStyles(
      !props.sizeAll && (props.xs || props.sm || props.md || props.lg || props.xl)
        ? undefined
        : props.sizeAll || false,
      props.alignSelf,
      props.textAlign,
      props.offset,
      props.order,
      props
    )};
  ${props => sizeStyles(props)};
  ${props => props.debug && colorStyles(props)};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xs,
      props.xs,
      props.alignSelfXs,
      props.textAlignXs,
      props.offsetXs,
      props.orderXs,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.sm,
      props.sm,
      props.alignSelfSm,
      props.textAlignSm,
      props.offsetSm,
      props.orderSm,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.md,
      props.md,
      props.alignSelfMd,
      props.textAlignMd,
      props.offsetMd,
      props.orderMd,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.lg,
      props.lg,
      props.alignSelfLg,
      props.textAlignLg,
      props.offsetLg,
      props.orderLg,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xl,
      props.xl,
      props.alignSelfXl,
      props.textAlignXl,
      props.offsetXl,
      props.orderXl,
      props
    )};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCol.defaultProps = {
  columns: 12,
  theme: DEFAULT_THEME
};
