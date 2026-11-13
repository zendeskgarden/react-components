/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';
import { StyledTabOverflow } from './StyledTabOverflow';

interface IStyledTabListProps {
  $isVertical?: boolean;
  /** The size of the visible tabs, measured by `TabList` while overflowing */
  $extent?: number;
}

const colorStyles = ({ theme }: WithTheme) => {
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });

  return css`
    color: ${foregroundColor};
  `;
};

/*
 * 1. List element reset.
 * 2. Room for the focus ring of the first and last visible tab, which sits
 *    outside the label. The padding makes room, the margin keeps the layout.
 * 3. Only the overflow trigger: the indicator is also a sibling of the list
 *    and must stay at the tab's edge.
 */
const sizeStyles = ({ theme, $isVertical, $extent }: WithTheme<IStyledTabListProps>) => {
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  const gap = $isVertical ? theme.space.xs : theme.space.md;
  const ringWidth = theme.shadowWidths.sm;

  return css`
    margin: 0; /* [1] */
    padding: 0; /* [1] */
    gap: ${gap};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    ${
      !$isVertical &&
      css`
        margin-inline: -${ringWidth}; /* [2] */
        padding-inline: ${ringWidth}; /* [2] */
        ${$extent !== undefined && `inline-size: calc(${$extent}px + 2 * ${ringWidth});`}

        & + ${StyledTabOverflow} {
          margin-inline-start: -${ringWidth}; /* [3] */
        }
      `
    }

    ${$isVertical && $extent !== undefined && `block-size: ${$extent}px;`}
  `;
};

/* Overflowed tabs stay laid out (for measurement) but are clipped and hidden. */
export const StyledTabList = styled.div<WithTheme<IStyledTabListProps>>`
  display: flex;
  flex: ${({ $extent }) => ($extent === undefined ? '0 1 auto' : 'none')};
  flex-direction: ${({ $isVertical }) => ($isVertical ? 'column' : 'row')};
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  white-space: nowrap;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
