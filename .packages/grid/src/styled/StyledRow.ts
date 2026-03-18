/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { AlignItems, IGridProps, IRowProps, JustifyContent, Wrap } from '../types';

const COMPONENT_ID = 'grid.row';

interface IStyledRowProps extends ThemeProps<DefaultTheme> {
  $gutters?: IGridProps['gutters'];
  $debug?: IGridProps['debug'];
  $alignItems?: AlignItems;
  $alignItemsXs?: AlignItems;
  $alignItemsSm?: AlignItems;
  $alignItemsMd?: AlignItems;
  $alignItemsLg?: AlignItems;
  $alignItemsXl?: AlignItems;
  $justifyContent?: JustifyContent;
  $justifyContentXs?: JustifyContent;
  $justifyContentSm?: JustifyContent;
  $justifyContentMd?: JustifyContent;
  $justifyContentLg?: JustifyContent;
  $justifyContentXl?: JustifyContent;
  $wrapAll?: IRowProps['wrap'];
  $wrapXs?: Wrap;
  $wrapSm?: Wrap;
  $wrapMd?: Wrap;
  $wrapLg?: Wrap;
  $wrapXl?: Wrap;
}

const colorStyles = ({ theme }: IStyledRowProps) => {
  const borderColor = getColor({
    theme,
    hue: 'mint',
    shade: 700,
    transparency: theme.opacity[600]
  });
  const borderWidth = theme.borderWidths.sm;

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

const sizeStyles = ({ theme, $gutters }: IStyledRowProps) => {
  const margin = $gutters ? math(`${theme.space[$gutters!]} / 2`) : 0;

  return css`
    margin-right: -${margin};
    margin-left: -${margin};
  `;
};

export const StyledRow = styled.div.attrs<IStyledRowProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $wrapAll: props.$wrapAll ?? 'wrap'
}))<IStyledRowProps>`
  display: flex;
  box-sizing: border-box;

  ${props => flexStyles(props.$alignItems, props.$justifyContent, props.$wrapAll)}

  ${sizeStyles};

  ${props => props.$debug && colorStyles(props)};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xs,
      props.$alignItemsXs,
      props.$justifyContentXs,
      props.$wrapXs
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.sm,
      props.$alignItemsSm,
      props.$justifyContentSm,
      props.$wrapSm
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.md,
      props.$alignItemsMd,
      props.$justifyContentMd,
      props.$wrapMd
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.lg,
      props.$alignItemsLg,
      props.$justifyContentLg,
      props.$wrapLg
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xl,
      props.$alignItemsXl,
      props.$justifyContentXl,
      props.$wrapXl
    )};

  ${componentStyles};
`;
