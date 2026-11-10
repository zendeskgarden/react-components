/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import type { IGardenTheme } from '../../theming/types';
import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledTab } from './StyledTab';
import { getTabSize } from './StyledTabListContainer';

interface IStyledTabOverflowTriggerProps {
  $isVertical?: boolean;
}

const iconColor = (theme: IGardenTheme, state: 'default' | 'hover' | 'selected') => {
  const offsets = { default: 0, hover: 100, selected: 200 } as const;

  return getColor({
    theme,
    variable: 'foreground.subtle',
    light: { offset: offsets[state] },
    dark: { offset: -offsets[state] }
  });
};

/* Wraps the overflow menu trigger and the menu. */
export const StyledTabOverflow = styled.div<WithTheme>`
  display: flex;
  flex-shrink: 0;

  ${componentStyles};
`;

/* The 28px circle of the horizontal trigger; it carries the focus ring. */
export const StyledTabOverflowCircle = styled.span<WithTheme>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadii.full};
  width: ${({ theme }) => theme.space.base * 7}px;
  height: ${({ theme }) => theme.space.base * 7}px;

  & > svg {
    width: ${({ theme }) => theme.iconSizes.md};
    height: ${({ theme }) => theme.iconSizes.md};
  }

  ${componentStyles};
`;

/*
 * The overflow trigger is styled as a tab. Horizontal tabs get an icon-only
 * trigger as wide and high as a tab, with the focus ring on the circle.
 * Vertical tabs get a text trigger styled as a vertical tab.
 */
export const StyledTabOverflowTrigger = styled(StyledTab)<
  WithTheme<IStyledTabOverflowTriggerProps>
>`
  ${({ theme, $isVertical }) =>
    !$isVertical &&
    css`
      justify-content: center;
      width: ${getTabSize(theme, false)}px;
      color: ${iconColor(theme, 'default')};

      /* The focus ring sits on the circle, not on the tab's ::before. */
      &:focus-visible::before {
        content: none;
      }

      &:hover:not([aria-disabled='true']):not([data-selected]) {
        color: ${iconColor(theme, 'hover')};
      }

      &[aria-expanded='true'],
      &[data-selected] {
        color: ${iconColor(theme, 'selected')};
      }

      ${focusStyles({
        theme,
        selector: `&:focus-visible > ${StyledTabOverflowCircle}`,
        inset: true,
        shadowWidth: 'md',
        spacerWidth: 'xs'
      })}

      @media (forced-colors: active) {
        &:focus-visible > ${StyledTabOverflowCircle} {
          outline: ${theme.shadowWidths.md} solid Highlight;
        }
      }
    `}

  ${componentStyles};
`;
