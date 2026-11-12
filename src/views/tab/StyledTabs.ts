/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import mediaQuery from '../../theming/utils/mediaQuery';
import type { WithTheme } from '../../types/views';
import { StyledTabListContainer } from './StyledTabListContainer';
import { StyledTabPanel } from './StyledTabPanel';

interface IStyledTabsProps {
  $isVertical?: boolean;
}

/*
 * Vertical tabs sit beside their panels. Below the `sm` breakpoint they stack
 * above the panels in a single column, and the tab list spans the full width
 * so every tab stays reachable.
 */
const sizeStyles = ({ theme, $isVertical }: WithTheme<IStyledTabsProps>) => {
  if (!$isVertical) {
    return undefined;
  }

  return css`
    gap: ${theme.space.lg};
    align-items: flex-start;

    /* The list keeps the width of its tabs; long panel content wraps instead
     * of shrinking the list and clipping the labels. */
    & > ${StyledTabListContainer} {
      flex-shrink: 0;
    }

    & > ${StyledTabPanel} {
      flex: 1 1 0;
      min-width: 0;
    }

    ${mediaQuery('down', 'xs', theme)} {
      flex-direction: column;
      gap: ${theme.space.md};
      align-items: stretch;

      & > ${StyledTabListContainer} {
        flex: none;
        inline-size: auto;
        max-inline-size: none;
      }
    }
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
