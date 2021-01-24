/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { rgba, math } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem';
import { StyledNavItemIcon } from './StyledNavItemIcon';
import { getNavWidth } from './StyledNav';

const COMPONENT_ID = 'chrome.nav_item';

const colorStyles = (props: IStyledNavItemProps) => {
  const BLACK = props.theme.palette.black as string;
  const WHITE = props.theme.palette.white as string;
  let currentColor;
  let hoverColor;

  if (props.isCurrent) {
    if (props.isLight) {
      currentColor = rgba(BLACK, 0.3);
    } else if (props.isDark) {
      currentColor = rgba(WHITE, 0.3);
    } else {
      currentColor = getColor(props.hue, 500, props.theme);
    }
  } else {
    hoverColor = rgba(props.isLight ? WHITE : BLACK, 0.1);
  }

  const activeColor = rgba(props.isLight ? BLACK : WHITE, 0.1);
  const focusColor = rgba(props.isLight ? BLACK : WHITE, 0.2);

  return css`
    opacity: ${props.isCurrent ? 1 : 0.6};
    background-color: ${currentColor};

    &:hover {
      opacity: 1;
      background-color: ${hoverColor};
    }

    &[data-garden-focus-visible] {
      opacity: 1;
      box-shadow: inset ${props.theme.shadows.md(focusColor)};
    }

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

  &:focus {
    outline: none; /* [1] */
  }

  ${props => colorStyles(props)};

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
