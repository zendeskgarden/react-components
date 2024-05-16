/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, DefaultTheme, keyframes } from 'styled-components';
import DEFAULT_THEME from '../elements/theme';
import { getColor } from './getColor';
import { MenuPosition } from '../types';

type MenuOptions = {
  theme?: DefaultTheme;
  hidden?: boolean;
  margin?: string;
  zIndex?: number;
  animationModifier?: string;
  childSelector?: string;
};

const animationStyles = (position: MenuPosition, options: MenuOptions) => {
  const theme = options.theme || DEFAULT_THEME;
  let translateValue = `${theme.space.base * 5}px`;
  let transformFunction;

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
    &${options.animationModifier} ${options.childSelector || '> *'} {
      animation: 0.2s cubic-bezier(0.15, 0.85, 0.35, 1.2) ${animationName};
    }
  `;
};

const colorStyles = (theme: DefaultTheme) => {
  const backgroundColor = getColor({ theme, variable: 'background.raised' });
  const borderColor = getColor({ theme, variable: 'border.default' });
  const boxShadowColor = getColor({
    theme,
    hue: 'neutralHue',
    shade: 1200,
    dark: { transparency: theme.opacity[800] },
    light: { transparency: theme.opacity[200] }
  });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });

  return css`
    border-color: ${borderColor};
    box-shadow: ${theme.shadows.lg(
      `${theme.space.base * 5}px`,
      `${theme.space.base * 7.5}px`,
      boxShadowColor
    )};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const hiddenStyles = (options: MenuOptions) => {
  const transition = 'opacity 0.2s ease-in-out, 0.2s visibility 0s linear';

  return css`
    transition: ${options.animationModifier && transition};
    visibility: hidden;
    opacity: 0;
  `;
};

/**
 * CSS for a `wrapper > menu` at the given position. The wrapper provides
 * absolute positioning (e.g. via Floating-UI). The menu provides basic styling
 * and optional animation.
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
 * @param {string} [options.childSelector=`> *`] A CSS selector that identifies the
 *  child menu component.
 * @param {string} [options.animationModifier] A CSS class or attribute selector
 *  which, when applied, animates the menu's appearance.
 */
export default function menuStyles(position: MenuPosition, options: MenuOptions = {}) {
  const theme = options.theme || DEFAULT_THEME;
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
   * 2. Positioned relative to controlling item.
   * 3. Browser list element reset.
   * 4. Prevent controlling item cursor inheritance.
   * 5. Prevent controlling item whitespace inheritance.
   */
  return css`
    position: absolute;
    z-index: ${options.zIndex || 0};
    ${marginProperty}: ${options.margin};
    line-height: 0;
    font-size: 0.01px; /* [1] */

    & ${options.childSelector || '> *'} {
      display: inline-block;
      position: relative; /* [2] */
      margin: 0; /* [3] */
      box-sizing: border-box;
      border: ${theme.borders.sm};
      border-radius: ${theme.borderRadii.md};
      cursor: default; /* [4] */
      padding: 0; /* [3] */
      text-align: ${theme.rtl ? 'right' : 'left'};
      white-space: normal; /* [5] */
      font-size: ${theme.fontSizes.md};
      font-weight: ${theme.fontWeights.regular};
      direction: ${theme.rtl && 'rtl'};

      ${colorStyles(theme)};

      /* stylelint-disable-next-line selector-max-compound-selectors */
      :focus {
        outline: none;
      }
    }

    ${options.animationModifier && animationStyles(position, options)};
    ${options.hidden && hiddenStyles(options)};
  `;
}
