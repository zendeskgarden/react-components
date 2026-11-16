/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';
import { getTabGap } from './StyledTabListContainer';

interface IStyledTabOverflowSpacerProps {
  $isVertical?: boolean;
  $size: number;
}

/*
 * Empty, shrinkable stand-in for the overflowed tabs' size. While overflowing,
 * the tab list hugs its visible tabs; without the spacer, a container sized by
 * its content (for example with a consumer max-height) would shrink with it
 * and never grow back when the constraint grows, so tabs could not leave the
 * overflow menu. The negative margin cancels the flex gap.
 */
export const StyledTabOverflowSpacer = styled.div<WithTheme<IStyledTabOverflowSpacerProps>>`
  flex: 0 1 ${({ $size }) => $size}px;
  min-width: 0;
  min-height: 0;
  ${({ theme, $isVertical }) =>
    `${$isVertical ? 'margin-block-start' : 'margin-inline-start'}: -${getTabGap(theme, !!$isVertical)}px;`}

  ${componentStyles};
`;
