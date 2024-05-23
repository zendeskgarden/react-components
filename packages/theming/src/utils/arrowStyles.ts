/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, keyframes } from 'styled-components';
import { math, stripUnit } from 'polished';
import { ArrowPosition } from '../types';

type ArrowOptions = {
  size?: string;
  inset?: string;
  animationModifier?: string;
};

const animationStyles = (position: ArrowPosition, modifier: string) => {
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

const positionStyles = (position: ArrowPosition, size: string, inset: string) => {
  const margin = math(`${size} / -2`);
  const placement = math(`${margin} + ${inset} - 1`);
  const offset = math(`${size} + 4`);
  let clipPath;
  let borderCss;
  let positionCss;

  if (position.startsWith('top')) {
    clipPath = 'polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)';
    borderCss = css`
      border-right: none;
      border-bottom: none;
    `;
    positionCss = css`
      top: ${placement};
      right: ${position === 'top-right' && offset};
      left: ${position === 'top' ? '50%' : position === 'top-left' && offset};
      margin-left: ${position === 'top' && margin};
    `;
  } else if (position.startsWith('right')) {
    clipPath = 'polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)';
    borderCss = css`
      border-bottom: none;
      border-left: none;
    `;
    positionCss = css`
      top: ${position === 'right' ? '50%' : position === 'right-top' && offset};
      right: ${placement};
      bottom: ${position === 'right-bottom' && offset};
      margin-top: ${position === 'right' && margin};
    `;
  } else if (position.startsWith('bottom')) {
    clipPath = 'polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)';
    borderCss = css`
      border-top: none;
      border-left: none;
    `;
    positionCss = css`
      right: ${position === 'bottom-right' && offset};
      bottom: ${placement};
      left: ${position === 'bottom' ? '50%' : position === 'bottom-left' && offset};
      margin-left: ${position === 'bottom' && margin};
    `;
  } else if (position.startsWith('left')) {
    clipPath = 'polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)';
    borderCss = css`
      border-top: none;
      border-right: none;
    `;
    positionCss = css`
      top: ${position === 'left' ? '50%' : position === 'left-top' && offset};
      bottom: ${offset};
      left: ${placement};
      margin-top: ${position === 'left' && margin};
    `;
  }

  /**
   * 1. Clip portion of the foreground square opposite the arrow tip so that it
   *    doesn't interfere with container content.
   * 2. Knock out border opposite the arrow tip.
   * 3. Arrow positioning on the base element.
   */
  return css`
    &::before {
      clip-path: ${clipPath}; /* [1] */
      ${borderCss}; /* [2] */
    }

    &::before,
    &::after {
      ${positionCss}; /* [3] */
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
export default function arrowStyles(position: ArrowPosition, options: ArrowOptions = {}) {
  const size = options.size === undefined ? 6 : (stripUnit(options.size) as number);
  const inset = options.inset || '0';
  const squareSize = `${Math.floor((size * 2) / Math.sqrt(2)) + 1}px`;

  /**
   * 1. Set base positioning for an element with an arrow.
   * 2. Border styling will be inherited from the parent element.
   * 3. Box shadow styling will be inherited from the parent element.
   * 4. Apply shared sizing properties to ::before and ::after.
   */
  return css`
    position: relative; /* [1] */

    &::before {
      /* [2] */
      border: inherit;
      background-clip: content-box;
    }

    &::after {
      /* [3] */
      z-index: -1;
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
