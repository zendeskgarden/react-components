/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';
import { AlignItems, IGridProps, IRowProps, JustifyContent, Wrap } from '../types';

const COMPONENT_ID = 'grid.row';

const colorStyles = (props: IStyledRowProps) => {
  const borderColor = getColorV8(props.theme.palette.mint, 600, props.theme, 0.5);
  const borderWidth = props.theme.borderWidths.sm;

  return css`
    /* prettier-ignore */
    box-shadow:
      inset 0 ${borderWidth} 0 0 ${borderColor},
      inset 0 -${borderWidth} 0 0 ${borderColor};
  `;
};

const flexStyles = (alignItems?: AlignItems, justifyContent?: JustifyContent, wrap?: Wrap) => {
  let flexAlignItems;
  let flexJustifyContent;

  if (alignItems === 'start' || alignItems === 'end') {
    flexAlignItems = `flex-${alignItems}`;
  } else {
    flexAlignItems = alignItems;
  }

  if (justifyContent === 'start' || justifyContent === 'end') {
    flexJustifyContent = `flex-${justifyContent}`;
  } else if (justifyContent === 'between' || justifyContent === 'around') {
    flexJustifyContent = `space-${justifyContent}`;
  } else {
    flexJustifyContent = justifyContent;
  }

  return css`
    flex-wrap: ${wrap};
    align-items: ${flexAlignItems};
    justify-content: ${flexJustifyContent};
  `;
};

const mediaStyles = (
  minWidth: string,
  alignItems?: AlignItems,
  justifyContent?: JustifyContent,
  wrap?: Wrap
) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${flexStyles(alignItems, justifyContent, wrap)};
    }
  `;
};

const sizeStyles = (props: IStyledRowProps) => {
  const margin = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    margin-right: -${margin};
    margin-left: -${margin};
  `;
};

interface IStyledRowProps extends Omit<IRowProps, 'wrap'>, ThemeProps<DefaultTheme> {
  gutters?: IGridProps['gutters'];
  wrapAll?: IRowProps['wrap'];
  debug?: IGridProps['debug'];
}

export const StyledRow = styled.div.attrs<IStyledRowProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRowProps>`
  display: flex;
  box-sizing: border-box;

  ${props => flexStyles(props.alignItems, props.justifyContent, props.wrapAll)}
  ${props => sizeStyles(props)};
  ${props => props.debug && colorStyles(props)};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xs,
      props.alignItemsXs,
      props.justifyContentXs,
      props.wrapXs
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.sm,
      props.alignItemsSm,
      props.justifyContentSm,
      props.wrapSm
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.md,
      props.alignItemsMd,
      props.justifyContentMd,
      props.wrapMd
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.lg,
      props.alignItemsLg,
      props.justifyContentLg,
      props.wrapLg
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xl,
      props.alignItemsXl,
      props.justifyContentXl,
      props.wrapXl
    )};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  wrapAll: 'wrap',
  theme: DEFAULT_THEME
};
