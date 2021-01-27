/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.subnav_item';

const colorStyles = (props: IStyledSubNavItemProps) => {
  const BLACK = props.theme.palette.black as string;
  const WHITE = props.theme.palette.white as string;
  let currentColor;
  let hoverColor;

  if (props.isCurrent) {
    if (props.isLight) {
      currentColor = rgba(BLACK, 0.1);
    } else {
      currentColor = rgba(WHITE, 0.1);
    }
  } else {
    hoverColor = rgba(props.isLight ? WHITE : BLACK, 0.1);
  }

  const activeColor = rgba(props.isLight ? BLACK : WHITE, 0.03);
  const focusColor = rgba(props.isLight ? BLACK : WHITE, 0.2);

  return css`
    opacity: ${props.isCurrent ? '1' : '0.6'};
    background-color: ${currentColor};

    &:hover {
      opacity: 1;
      background-color: ${hoverColor};
    }

    &[data-garden-focus-visible] {
      opacity: 1;
      box-shadow: ${props.theme.shadows.md(focusColor)};
    }

    &:not([data-garden-header='true']):active {
      background-color: ${activeColor};
    }
  `;
};

export interface IStyledSubNavItemProps extends ThemeProps<DefaultTheme> {
  isCurrent?: boolean;
  isDark?: boolean;
  isLight?: boolean;
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
  margin: ${props => props.theme.space.base * 2}px 0 0; /* [2] */
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
