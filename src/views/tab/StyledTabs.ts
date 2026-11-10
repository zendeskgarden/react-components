/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

interface IStyledTabsProps {
  $isVertical?: boolean;
}

/*
 * 1. Room for the focus ring of the first and last horizontal tab, which sit
 *    outside the label. The padding makes room, the margin keeps the layout.
 */
const sizeStyles = ({ theme, $isVertical }: WithTheme<IStyledTabsProps>) => {
  const ringWidth = theme.shadowWidths.sm;

  return css`
    margin-inline: ${$isVertical ? undefined : `-${ringWidth}`}; /* [1] */
    padding-inline: ${$isVertical ? undefined : ringWidth}; /* [1] */
    gap: ${$isVertical ? theme.space.lg : undefined};
  `;
};

/**
 * Accepts all `<div>` props
 */
export const StyledTabs = styled.div<WithTheme<IStyledTabsProps>>`
  display: ${props => (props.$isVertical ? 'flex' : 'block')};
  overflow: hidden;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${sizeStyles};

  ${componentStyles};
`;
