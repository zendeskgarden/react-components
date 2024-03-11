/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math, rgba } from 'polished';
import {
  retrieveComponentStyles,
  getColorV8,
  focusStyles,
  DEFAULT_THEME,
  SELECTOR_FOCUS_VISIBLE
} from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem';
import { StyledNavItemIcon } from './StyledNavItemIcon';
import { getNavWidth } from './StyledNav';

const COMPONENT_ID = 'chrome.nav_item';

/**
 * 1. Use outline for focus styling to work with transparent backgrounds
 */
const colorStyles = (props: IStyledNavItemProps) => {
  const { theme, hue, isLight, isDark, isCurrent } = props;
  const DARK = theme.palette.black as string;
  const LIGHT = theme.palette.white as string;

  let currentColor;
  let hoverColor;

  if (isCurrent) {
    if (isLight) {
      currentColor = rgba(DARK, 0.4);
    } else if (isDark) {
      currentColor = rgba(LIGHT, 0.4);
    } else {
      currentColor = getColorV8(hue, 500, theme);
    }
  } else {
    hoverColor = rgba(isLight ? LIGHT : DARK, 0.1);
  }

  const activeColor = rgba(isLight ? DARK : LIGHT, 0.1);
  const focusColor = isLight ? DARK : LIGHT;

  return css`
    opacity: ${isCurrent ? 1 : 0.6};
    outline-color: transparent;
    background-color: ${currentColor};

    &:hover {
      opacity: 1;
      background-color: ${hoverColor};
    }

    ${focusStyles({
      theme,
      condition: false /* [1] */,
      styles: { opacity: 1, outlineColor: focusColor }
    })}

    &:active {
      background-color: ${activeColor};
    }
  `;
};

interface IStyledNavItemProps extends ThemeProps<DefaultTheme> {
  isCurrent?: boolean;
  isExpanded?: boolean;
  isDark?: boolean;
  isLight?: boolean;
  hue: string;
}

/**
 * 1. Anchor reset
 * 2. Button reset
 * 3. Override `focusStyles` outline (in `colorStyles`)
 * 4. Use of negative offset to create an inset outline
 */
export const StyledNavItem = styled(StyledBaseNavItem as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'button'
})<IStyledNavItemProps>`
  justify-content: ${props => props.isExpanded && 'start'};
  order: 1;
  margin: 0; /* [2] */
  cursor: ${props => (props.isCurrent ? 'default' : 'pointer')};
  text-align: ${props => props.isExpanded && 'inherit'};

  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  ${colorStyles};

  &:focus-visible:hover,
  &:focus-visible:active,
  ${SELECTOR_FOCUS_VISIBLE} {
    outline: ${props => math(`${props.theme.borderWidths.md} - 1`)} solid; /* [3] */
    outline-offset: -${props => props.theme.borderWidths.md}; /* [4] */
  }

  ${props =>
    props.isExpanded &&
    `
    ${StyledNavItemIcon} {
      margin: 0 ${math(`(${getNavWidth(props)} - ${props.theme.iconSizes.lg}) / 4`)};
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
