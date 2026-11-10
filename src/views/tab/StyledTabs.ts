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

const sizeStyles = ({ theme, $isVertical }: WithTheme<IStyledTabsProps>) => {
  return css`
    gap: ${$isVertical ? theme.space.lg : undefined};
  `;
};

/**
 * Accepts all `<div>` props
 */
export const StyledTabs = styled.div<WithTheme<IStyledTabsProps>>`
  display: ${props => (props.$isVertical ? 'flex' : 'block')};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${sizeStyles};

  ${componentStyles};
`;
