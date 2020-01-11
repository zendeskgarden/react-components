/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import readableColor from 'polished/lib/color/readableColor';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getBackgroundColor } from './StyledSubNav';

const COMPONENT_ID = 'chrome.subnav_item';

const colorStyles = (props: IStyledSubNavItemProps) => {
  const black = props.theme.palette.black as string;
  const white = props.theme.palette.white as string;
  const backgroundColor = readableColor(getBackgroundColor(props)!, white, black);
  const hoverBackgroundColor = backgroundColor === black ? white : black;

  return css`
    opacity: ${props.isCurrent ? '1' : '0.6'};
    background-color: ${props.isCurrent && rgba(backgroundColor, 0.1)};

    &:hover {
      opacity: 1;
      background-color: ${!props.isCurrent && rgba(hoverBackgroundColor, 0.1)};
    }

    &[data-garden-focus-visible] {
      opacity: 1;
      box-shadow: ${props.theme.shadows.md(rgba(backgroundColor, 0.2))};
    }

    &:not([data-garden-header='true']):active {
      background-color: ${rgba(backgroundColor, 0.03)};
    }
  `;
};

export interface IStyledSubNavItemProps extends ThemeProps<DefaultTheme> {
  isCurrent?: boolean;
}

export const getSubNavItemHeight = (props: IStyledSubNavItemProps) => {
  return `${props.theme.space.base * 7.5}px`;
};

/**
 * 1. Anchor reset
 * 2. Button reset
 */
export const StyledSubNavItem = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavItemProps>`
  display: flex;
  align-items: center;
  /* prettier-ignore */
  transition: box-shadow 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    opacity 0.1s ease-in-out;
  margin-top: ${props => props.theme.space.base * 2}px;
  border: none; /* [2] */
  border-radius: ${props => props.theme.borderRadii.md};
  box-sizing: border-box;
  background: transparent; /* [2] */
  cursor: ${props => (props.isCurrent ? 'default' : 'pointer')}; /* [2] */
  padding: ${props => `0 ${props.theme.space.base * 2}px`};
  width: 100%; /* [2] */
  min-height: ${getSubNavItemHeight};
  text-align: inherit; /* [2] */
  font-size: inherit; /* [2] */

  &,
  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
    color: inherit; /* [1] */
  }

  &:focus {
    outline: none; /* [1] */
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSubNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
