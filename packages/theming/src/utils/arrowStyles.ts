/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, keyframes } from 'styled-components';
import { math } from 'polished';

export type ARROW_POSITION =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom';

export type ARROW_OPTIONS = {
  size?: string;
  inset?: string;
  animationModifier?: string;
};

// Workaround for https://github.com/styled-components/polished/issues/550
export const exponentialSymbols = {
  symbols: {
    sqrt: {
      func: {
        symbol: 'sqrt',
        f: (a: number) => Math.sqrt(a),
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'sqrt',
      regSymbol: 'sqrt\\b'
    }
  }
};

const animationStyles = (position: ARROW_POSITION, modifier: string) => {
  const property = position.split('-')[0];
  /**
   * 1. Prevent bleed-through on revised stacking context (i.e. parent transform)
   */
  const animationName = keyframes`
    0%, 66% {
      ${property}: 2px;
      border: transparent; /* [1] */
    }
  `;

  return css`
    &${modifier}::before, &${modifier}::after {
      animation: 0.3s ease-in-out ${animationName};
    }
  `;
};

const positionStyles = (position: ARROW_POSITION, size: string, inset: string) => {
  const margin = math(`${size} / -2`);
  const placement = math(`${margin} + ${inset}`);
  let clipPath;
  let positionCss;
  let propertyRadius: string;

  if (position.startsWith('top')) {
    propertyRadius = 'border-bottom-right-radius';
    clipPath = 'polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)';
    positionCss = css`
      top: ${placement};
      right: ${position === 'top-right' && size};
      left: ${position === 'top' ? '50%' : position === 'top-left' && size};
      margin-left: ${position === 'top' && margin};
    `;
  } else if (position.startsWith('right')) {
    propertyRadius = 'border-bottom-left-radius';
    clipPath = 'polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)';
    positionCss = css`
      top: ${position === 'right' ? '50%' : position === 'right-top' && size};
      right: ${placement};
      bottom: ${position === 'right-bottom' && size};
      margin-top: ${position === 'right' && margin};
    `;
  } else if (position.startsWith('bottom')) {
    propertyRadius = 'border-top-left-radius';
    clipPath = 'polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)';
    positionCss = css`
      right: ${position === 'bottom-right' && size};
      bottom: ${placement};
      left: ${position === 'bottom' ? '50%' : position === 'bottom-left' && size};
      margin-left: ${position === 'bottom' && margin};
    `;
  } else if (position.startsWith('left')) {
    propertyRadius = 'border-top-right-radius';
    clipPath = 'polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)';
    positionCss = css`
      top: ${position === 'left' ? '50%' : position === 'left-top' && size};
      bottom: ${size};
      left: ${placement};
      margin-top: ${position === 'left' && margin};
    `;
  }

  /**
   * 1. Round-off portion of the foreground square opposite the arrow tip
   *    (improved layout for IE which doesn't support 'clip-path').
   * 2. Clip portion of the foreground square opposite the arrow tip so that it
   *    doesn't interfere with container content.
   * 3. Arrow positioning on the base element.
   */
  return css`
    &::before {
      ${propertyRadius!}: 100%; /* [1] */
      clip-path: ${clipPath}; /* [2] */
    }

    &::before,
    &::after {
      ${positionCss}/* [3] */
    }
  `;
};

/**
 * CSS for an arrow at the given position and with the given size. The arrow is
 * positioned via `::before` and `::after` pseudo-elements and inherits the
 * base element's border, background, and box-shadow.
 *
 * IMPORTANT: the element that receives arrow styling must be wrapped in a
 * positioned box (i.e. `relative`, `absolute`, `fixed`) that has a `z-index`
 * greater than or equal to zero. Without this, the arrow cannot properly
 * display inherited border or box-shadow styling.
 *
 * @param {string} position One of:
 *  - `'top'`
 *  - `'top-left'`
 *  - `'top-right'`
 *  - `'right'`
 *  - `'right-top'`
 *  - `'right-bottom'`
 *  - `'bottom'`
 *  - `'bottom-left'`
 *  - `'bottom-right'`
 *  - `'left'`
 *  - `'left-top'`
 *  - `'left-bottom'`
 * @param {string} [options.size='6px'] Distance from the base (hypotenuse) to point
 *  (right angle) of the arrow expressed as a CSS dimension.
 * @param {string} [options.inset='0'] Tweak arrow positioning by adjusting with
 *  either a positive (push the arrow in) or negative (pull the arrow out) value.
 * @param {string} [options.animationModifier] A CSS class or attribute selector
 *  which, when applied, animates the arrow's appearance.
 *
 * @component
 */
export default function arrowStyles(position: ARROW_POSITION, options: ARROW_OPTIONS = {}) {
  const size = options.size || '6px';
  const inset = options.inset || '0';
  const squareSize = math(`${size} * 2 / sqrt(2)`, exponentialSymbols);

  /**
   * 1. Set base positioning for an element with an arrow.
   * 2. Allow any border inherited by `::after` to show through.
   * 3. Border styling and box-shadow will be automatically inherited from the
   *    parent element.
   * 4. Apply shared sizing properties to ::before and ::after.
   */
  return css`
    position: relative; /* [1] */

    &::before {
      /* [2] */
      border-width: inherit;
      border-style: inherit;
      border-color: transparent;
      background-clip: content-box;
    }

    &::after {
      /* [3] */
      z-index: -1;
      border: inherit;
      box-shadow: inherit;
    }

    &::before,
    &::after {
      /* [4] */
      position: absolute;
      transform: rotate(45deg);
      background-color: inherit;
      box-sizing: inherit;
      width: ${squareSize};
      height: ${squareSize};
      content: '';
    }

    ${positionStyles(position, squareSize, inset)};
    ${options.animationModifier && animationStyles(position, options.animationModifier)};
  `;
}
