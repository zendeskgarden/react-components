/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { getNavWidth } from '../utils';
import { StyledBaseNavItem } from './StyledBaseNavItem';
import { StyledNavItemIcon } from './StyledNavItemIcon';

const COMPONENT_ID = 'chrome.nav_button';

interface IStyledNavItemProps {
  $isExpanded?: boolean;
  $hue: string;
}

/*
 * 1. Anchor reset
 */
const colorStyles = ({ theme, $hue }: IStyledNavItemProps & ThemeProps<DefaultTheme>) => {
  const activeBackgroundColor = getColor({
    theme,
    dark: { hue: 'white' },
    light: { hue: 'black' },
    transparency: theme.opacity[100]
  });
  const currentBackgroundColor =
    $hue === 'chromeHue'
      ? getColor({ theme, hue: $hue, shade: 700 })
      : getColor({
          theme,
          dark: { hue: 'white' },
          light: { hue: 'black' },
          transparency: theme.opacity[500]
        });
  const focusOutlineColor = getColor({ theme, dark: { hue: 'white' }, light: { hue: 'black' } });
  const focusOutlineOffset = `-${theme.borderWidths.md}`;
  const hoverBackgroundColor = getColor({
    theme,
    dark: { hue: 'black' },
    light: { hue: 'white' },
    transparency: theme.opacity[100]
  });

  return css`
    opacity: ${theme.opacity[700]};
    outline-color: transparent;
    background-color: transparent;
    color: inherit; /* [1] */

    &:hover {
      opacity: 1;
      background-color: ${hoverBackgroundColor};
    }

    &:hover,
    &:focus {
      color: inherit; /* [1] */
    }

    ${focusStyles({
      theme,
      condition: false, // use outline styling to work with transparent backgrounds
      styles: {
        opacity: 1,
        outlineColor: focusOutlineColor,
        outlineOffset: focusOutlineOffset
      }
    })}

    &:active {
      background-color: ${activeBackgroundColor};
    }

    &[aria-current='true'] {
      opacity: 1;
      background-color: ${currentBackgroundColor};
    }
  `;
};

/*
 * 1. Button reset
 * 2. Overrides flex default `min-width: auto`
 */
const sizeStyles = ({ theme, $isExpanded }: IStyledNavItemProps & ThemeProps<DefaultTheme>) => {
  const iconMargin = $isExpanded
    ? `0 ${math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`)}`
    : undefined;

  return css`
    margin: 0; /* [1] */
    border: none; /* [1] */
    box-sizing: border-box;
    min-width: 0; /* [2] */
    font-size: inherit; /* [1] */

    ${StyledNavItemIcon} {
      margin: ${iconMargin};
    }
  `;
};

/*
 * 1. Anchor reset
 */
export const StyledNavButton = styled(StyledBaseNavItem as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'button'
})<IStyledNavItemProps>`
  flex: 1;
  justify-content: ${props => props.$isExpanded && 'start'};
  cursor: pointer;
  text-align: ${props => props.$isExpanded && 'inherit'};
  text-decoration: none; /* [1] */

  ${sizeStyles};

  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
  }

  &[aria-current='true'] {
    cursor: default;
  }

  ${colorStyles};

  ${componentStyles};
`;
