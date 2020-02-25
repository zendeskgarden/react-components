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

export type MENU_POPPER_OPTIONS = {
  hidden?: boolean;
  margin?: string;
  zIndex?: number;
  animationModifier?: string;
};

const animationStyles = (position: MENU_POSITION, options: MENU_OPTIONS) => {
  const theme = options.theme || DEFAULT_THEME;
  let transformFunction;
  let translateValue = `${theme.space.base * 5}px`;

  if (position === 'top') {
    transformFunction = 'translateY';
  } else if (position === 'right') {
    transformFunction = 'translateX';
    translateValue = `-${translateValue}`;
  } else if (position === 'bottom') {
    transformFunction = 'translateY';
    translateValue = `-${translateValue}`;
  } else {
    transformFunction = 'translateX';
  }

  const animationName = keyframes`
    0% {
      /* stylelint-disable-next-line function-name-case */
      transform: ${transformFunction}(${translateValue});
    }
  `;

  return css`
    &${options.animationModifier} {
      animation: 0.2s cubic-bezier(0.15, 0.85, 0.35, 1.2) ${animationName};
    }
  `;
};

/**
 * CSS for a menu at the given position.
 *
 * @param {string} position One of:
 *  - `'top'`
 *  - `'right'`
 *  - `'bottom'`
 *  - `'left'`
 * @param {Object} [options.theme=`DEFAULT_THEME`] Context theme object.
 * @param {string} [options.animationModifier] A CSS class or attribute selector
 *  which, when applied, animates the menu's appearance.
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

/**
 * CSS for a Popper menu wrapper.
 *
 * @param {string} position One of:
 *  - `'top'`
 *  - `'right'`
 *  - `'bottom'`
 *  - `'left'`
 * @param {Object} [options.theme=`DEFAULT_THEME`] Context theme object.
 * @param {boolean} [options.hidden] Determine whether the menu is hidden.
 * @param {string} [options.margin] Amount of margin between menu and trigger.
 * @param {number} [options.zIndex] The menu wrapper's z-index.
 * @param {string} [options.animationModifier] A CSS class or attribute selector
 *  which, when applied, animates the menu when hidden.
 */
export function menuPopperStyles(position: MENU_POSITION, options: MENU_POPPER_OPTIONS = {}) {
  const transition = 'opacity 0.2s ease-in-out, 0.2s visibility 0s linear';
  let marginProperty;

  if (position === 'top') {
    marginProperty = 'margin-bottom';
  } else if (position === 'right') {
    marginProperty = 'margin-left';
  } else if (position === 'bottom') {
    marginProperty = 'margin-top';
  } else {
    marginProperty = 'margin-right';
  }

  /**
   * 1. Popper requires a non-zero font-size to calculate initial placement.
   */
  return css`
    transition: ${options.animationModifier && transition};
    visibility: ${options.hidden && 'hidden'};
    opacity: ${options.hidden && '0'};
    z-index: ${options.zIndex};
    ${marginProperty}: ${options.margin};
    font-size: 0.01px; /* [1] */
  `;
}
