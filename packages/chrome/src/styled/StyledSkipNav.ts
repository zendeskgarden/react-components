/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { getHeaderHeight } from './header/StyledHeader';

const COMPONENT_ID = 'chrome.skipnav';

const animationStyles = () => {
  const animationName = keyframes`
    0% {
      transform: translateY(-50%);
    }
  `;

  return css`
    transition: opacity 0.2s ease-out, clip 0s linear 0.2s;
    opacity: 0;
    clip: rect(0, 0, 0, 0);

    &:focus {
      transition: opacity 0.2s ease-in-out;
      animation: 0.2s cubic-bezier(0.15, 0.85, 0.35, 1) ${animationName};
      opacity: 1;
      clip: auto;
    }
  `;
};

const colorStyles = (theme: DefaultTheme) => {
  const color = theme.colors.foreground;
  const backgroundColor = getColor('primaryHue', 100, theme);

  return css`
    background-color: ${backgroundColor};
    color: ${color};

    &:hover,
    &:focus {
      color: ${color};
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const height = getHeaderHeight(props);

  return css`
    width: 100%;
    height: ${height};
    font-size: ${props.theme.fontSizes.md};
  `;
};

interface IStyledSkipNavProps {
  zIndex?: number;
}

/**
 * 1. <a> element reset
 */
export const StyledSkipNav = styled.a.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSkipNavProps>`
  ${animationStyles()};

  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  direction: ${props => props.theme.rtl && 'rtl'};
  z-index: ${props => props.zIndex};
  text-decoration: none; /* [1] */
  white-space: nowrap;

  ${props => sizeStyles(props)};

  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
  }

  &:focus {
    outline: none;
  }

  ${props => colorStyles(props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSkipNav.defaultProps = {
  theme: DEFAULT_THEME
};
