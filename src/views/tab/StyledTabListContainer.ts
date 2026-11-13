/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import type { IGardenTheme } from '../../theming/types';
import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

interface IStyledTabListContainerProps {
  $isVertical?: boolean;
}

/* The design tab height: 40px horizontal, 32px vertical. */
export const getTabSize = (theme: IGardenTheme, isVertical: boolean) =>
  theme.space.base * (isVertical ? 8 : 10);

export const getTabGap = (theme: IGardenTheme, isVertical: boolean) =>
  parseFloat(isVertical ? theme.space.xs : theme.space.md);

/* Holds the tab list, the overflow trigger, the spacer and the indicator. */
export const StyledTabListContainer = styled.div<WithTheme<IStyledTabListContainerProps>>`
  display: flex;
  position: relative;
  flex-direction: ${({ $isVertical }) => ($isVertical ? 'column' : 'row')};
  align-items: ${({ $isVertical }) => ($isVertical ? 'stretch' : 'flex-start')};
  gap: ${({ theme, $isVertical }) => getTabGap(theme, !!$isVertical)}px;
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  color-scheme: only ${({ theme }) => theme.colors.base};

  ${({ theme, $isVertical }) =>
    !$isVertical &&
    css`
      /* The rule sits under the tabs and the trigger, so the indicator paints on top of it. */
      box-shadow: inset 0 -${theme.borderWidths.sm} 0
        ${getColor({ theme, variable: 'border.default' })};
      height: ${getTabSize(theme, false)}px;
    `}

  ${componentStyles};
`;
