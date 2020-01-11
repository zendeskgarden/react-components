/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import math from 'polished/lib/math/math';
import readableColor from 'polished/lib/color/readableColor';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem';
import { StyledNavItemIcon } from './StyledNavItemIcon';
import { getNavWidth, getBackgroundColor } from './StyledNav';

const COMPONENT_ID = 'chrome.nav_item';

const colorStyles = (props: IStyledNavItemProps) => {
  const black = props.theme.palette.black as string;
  const white = props.theme.palette.white as string;
  const backgroundColor = readableColor(getBackgroundColor(props)!, black, white);
  const hoverBackgroundColor = backgroundColor === black ? white : black;

  return css`
    opacity: ${props.isCurrent ? 1 : 0.6};
    background-color: ${props.isCurrent &&
      (props.hue ? rgba(backgroundColor, 0.3) : getColor('chromeHue', 400, props.theme))};

    &:hover {
      opacity: 1;
      background-color: ${!props.isCurrent && rgba(hoverBackgroundColor, 0.1)};
    }

    &[data-garden-focus-visible] {
      opacity: 1;
      box-shadow: inset ${props.theme.shadows.md(rgba(backgroundColor, 0.2))};
    }

    &:active {
      background-color: ${rgba(backgroundColor, 0.1)};
    }
  `;
};

interface IStyledNavItemProps extends ThemeProps<DefaultTheme> {
  isCurrent?: boolean;
  isExpanded?: boolean;
  hue?: string;
}

/**
 * 1. Anchor reset
 */
export const StyledNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'button'
})<IStyledNavItemProps>`
  justify-content: ${props => props.isExpanded && 'start'};
  order: 1;
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
