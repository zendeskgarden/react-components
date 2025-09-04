/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { AlignSelf, Breakpoint, GridNumber, IColProps, IGridProps, TextAlign } from '../types';

const COMPONENT_ID = 'grid.col';

interface IStyledColProps extends ThemeProps<DefaultTheme> {
  $columns?: IGridProps['columns'];
  $gutters?: IGridProps['gutters'];
  $sizeAll?: IColProps['size'];
  $debug?: IGridProps['debug'];
  $xs?: IColProps['xs'];
  $sm?: IColProps['sm'];
  $md?: IColProps['md'];
  $lg?: IColProps['lg'];
  $xl?: IColProps['xl'];
  $alignSelf?: IColProps['alignSelf'];
  $alignSelfXs?: IColProps['alignSelfXs'];
  $alignSelfSm?: IColProps['alignSelfSm'];
  $alignSelfMd?: IColProps['alignSelfMd'];
  $alignSelfLg?: IColProps['alignSelfLg'];
  $alignSelfXl?: IColProps['alignSelfXl'];
  $textAlign?: IColProps['textAlign'];
  $textAlignXs?: IColProps['textAlignXs'];
  $textAlignSm?: IColProps['textAlignSm'];
  $textAlignMd?: IColProps['textAlignMd'];
  $textAlignLg?: IColProps['textAlignLg'];
  $textAlignXl?: IColProps['textAlignXl'];
  $offset?: IColProps['offset'];
  $offsetXs?: IColProps['offsetXs'];
  $offsetSm?: IColProps['offsetSm'];
  $offsetMd?: IColProps['offsetMd'];
  $offsetLg?: IColProps['offsetLg'];
  $offsetXl?: IColProps['offsetXl'];
  $order?: IColProps['order'];
  $orderXs?: IColProps['orderXs'];
  $orderSm?: IColProps['orderSm'];
  $orderMd?: IColProps['orderMd'];
  $orderLg?: IColProps['orderLg'];
  $orderXl?: IColProps['orderXl'];
}

const colorStyles = ({ theme }: IStyledColProps) => {
  const backgroundColor = getColor({
    theme,
    variable: 'background.primaryEmphasis',
    dark: { transparency: theme.opacity[200] },
    light: { transparency: theme.opacity[100] }
  });

  return css`
    background-clip: content-box;
    background-color: ${backgroundColor};
  `;
};

const flexStyles = (
  size: Breakpoint | undefined,
  alignSelf: AlignSelf | undefined,
  textAlign: TextAlign | undefined,
  offset: GridNumber | undefined,
  order: GridNumber | undefined,
  props: IStyledColProps
) => {
  const margin = offset && `${math(`${offset} / ${props.$columns} * 100`)}%`;
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
    flexBasis = `${math(`${size} / ${props.$columns} * 100`)}%`;
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
    flexOrder = math(`${props.$columns} + 1`);
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
    margin-${props.theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    max-width: ${maxWidth};
    text-align: ${horizontalAlign};
  `;
};

const mediaStyles = (
  minWidth: string,
  size: Breakpoint | undefined,
  alignSelf: AlignSelf | undefined,
  textAlign: TextAlign | undefined,
  offset: GridNumber | undefined,
  order: GridNumber | undefined,
  props: IStyledColProps
) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${flexStyles(size, alignSelf, textAlign, offset, order, props)};
    }
  `;
};

const sizeStyles = ({ theme, $gutters }: IStyledColProps) => {
  const padding = $gutters ? math(`${theme.space[$gutters!]} / 2`) : 0;

  return css`
    padding-right: ${padding};
    padding-left: ${padding};
  `;
};

export const StyledCol = styled.div.attrs<IStyledColProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $columns: props.$columns ?? 12
}))<IStyledColProps>`
  box-sizing: border-box;
  width: 100%;

  ${props =>
    flexStyles(
      !props.$sizeAll && (props.$xs || props.$sm || props.$md || props.$lg || props.$xl)
        ? undefined
        : props.$sizeAll || false,
      props.$alignSelf,
      props.$textAlign,
      props.$offset,
      props.$order,
      props
    )};

  ${sizeStyles};

  ${props => props.$debug && colorStyles(props)};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xs,
      props.$xs,
      props.$alignSelfXs,
      props.$textAlignXs,
      props.$offsetXs,
      props.$orderXs,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.sm,
      props.$sm,
      props.$alignSelfSm,
      props.$textAlignSm,
      props.$offsetSm,
      props.$orderSm,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.md,
      props.$md,
      props.$alignSelfMd,
      props.$textAlignMd,
      props.$offsetMd,
      props.$orderMd,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.lg,
      props.$lg,
      props.$alignSelfLg,
      props.$textAlignLg,
      props.$offsetLg,
      props.$orderLg,
      props
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xl,
      props.$xl,
      props.$alignSelfXl,
      props.$textAlignXl,
      props.$offsetXl,
      props.$orderXl,
      props
    )};

  ${componentStyles};
`;
