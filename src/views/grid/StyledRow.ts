/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import mediaQuery from '../../theming/utils/mediaQuery';
import { AlignItems, IGridProps, IGridRowProps, JustifyContent, Wrap } from '../../types/elements';
import type { WithTheme } from '../../types/views';

interface IStyledRowProps {
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
  $wrapAll?: IGridRowProps['wrap'];
  $wrapXs?: Wrap;
  $wrapSm?: Wrap;
  $wrapMd?: Wrap;
  $wrapLg?: Wrap;
  $wrapXl?: Wrap;
}

const colorStyles = ({ theme }: WithTheme<IStyledRowProps>) => {
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

type BreakpointKey = Extract<Parameters<typeof mediaQuery>[1], string>;

const mediaStyles = (
  breakpoint: BreakpointKey,
  theme: WithTheme['theme'],
  alignItems?: AlignItems,
  justifyContent?: JustifyContent,
  wrap?: Wrap
) => {
  return css`
    ${mediaQuery('up', breakpoint, theme)} {
      ${flexStyles(alignItems, justifyContent, wrap)};
    }
  `;
};

const sizeStyles = ({ theme, $gutters }: WithTheme<IStyledRowProps>) => {
  const margin = $gutters ? math(`${theme.space[$gutters!]} / 2`) : 0;

  return css`
    margin-right: -${margin};
    margin-left: -${margin};
  `;
};

export const StyledRow = styled.div<WithTheme<IStyledRowProps>>`
  display: flex;
  box-sizing: border-box;

  /* the $wrapAll fallback cannot live in attrs: styled-components >= 6.3.12
     preserves explicitly passed undefined props */
  ${props => flexStyles(props.$alignItems, props.$justifyContent, props.$wrapAll ?? 'wrap')}

  ${sizeStyles};

  ${props => props.$debug && colorStyles(props)};

  ${props =>
    mediaStyles('xs', props.theme, props.$alignItemsXs, props.$justifyContentXs, props.$wrapXs)};

  ${props =>
    mediaStyles('sm', props.theme, props.$alignItemsSm, props.$justifyContentSm, props.$wrapSm)};

  ${props =>
    mediaStyles('md', props.theme, props.$alignItemsMd, props.$justifyContentMd, props.$wrapMd)};

  ${props =>
    mediaStyles('lg', props.theme, props.$alignItemsLg, props.$justifyContentLg, props.$wrapLg)};

  ${props =>
    mediaStyles('xl', props.theme, props.$alignItemsXl, props.$justifyContentXl, props.$wrapXl)};

  ${componentStyles};
`;
