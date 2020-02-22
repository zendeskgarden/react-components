/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, DefaultTheme, keyframes } from 'styled-components';
import { getColor, DEFAULT_THEME } from '..';

export type MENU_POSITION = 'top' | 'right' | 'bottom' | 'left';

export type MENU_OPTIONS = {
  theme?: DefaultTheme;
  animationModifier?: string;
};

const animationStyles = (position: MENU_POSITION, options: MENU_OPTIONS) => {
  const theme = options.theme || DEFAULT_THEME;
  let property;

  if (position === 'top') {
    property = 'bottom';
  } else if (position === 'right') {
    property = 'left';
  } else if (position === 'bottom') {
    property = 'top';
  } else {
    property = 'right';
  }

  const animationName = keyframes`
    0% {
      ${property}: ${theme.space.base * -5}px;
    }

    100% {
      ${property}: 0;
    }
  `;

  return css`
    &${options.animationModifier} {
      animation: 0.2s cubic-bezier(0.15, 0.85, 0.35, 1.2) ${animationName};
    }
  `;
};

/**
 * CSS for a menu.
 */
export default function menuStyles(position: MENU_POSITION, options: MENU_OPTIONS = {}) {
  const theme = options.theme || DEFAULT_THEME;

  /**
   * 1. Positioned relative to controlling item.
   * 2. Browser list element reset.
   * 3. Prevent controlling item cursor inheritance.
   * 4. Prevent controlling item whitespace inheritance.
   */
  return css`
    display: inline-block;
    position: relative; /* [1] */
    margin: 0; /* [2] */
    box-sizing: border-box;
    border: ${theme.borders.sm} ${getColor('neutralHue', 300, theme)};
    border-radius: ${theme.borderRadii.md};
    box-shadow: ${theme.shadows.lg(
      `${theme.space.base * 5}px`,
      `${theme.space.base * 7.5}px`,
      getColor('chromeHue', 600, theme, 0.15)!
    )};
    background-color: ${theme.colors.background};
    cursor: default; /* [3] */
    padding: 0; /* [2] */
    text-align: ${theme.rtl ? 'right' : 'left'};
    white-space: normal; /* [4] */
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.regular};
    direction: ${theme.rtl && 'rtl'};

    :focus {
      outline: none;
    }

    ${options.animationModifier && animationStyles(position, options)};
  `;
}
