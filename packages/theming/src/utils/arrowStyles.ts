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
  const placement = math(`${margin} + ${inset}`);
  let transform;
  let positionCss;

  if (position.startsWith('top')) {
    transform = 'rotate(-135deg)';
    positionCss = css`
      top: ${placement};
      right: ${position === 'top-right' && size};
      left: ${position === 'top' ? '50%' : position === 'top-left' && size};
      margin-left: ${position === 'top' && margin};
    `;
  } else if (position.startsWith('right')) {
    transform = 'rotate(-45deg)';
    positionCss = css`
      top: ${position === 'right' ? '50%' : position === 'right-top' && size};
      right: ${placement};
      bottom: ${position === 'right-bottom' && size};
      margin-top: ${position === 'right' && margin};
    `;
  } else if (position.startsWith('bottom')) {
    transform = 'rotate(45deg)';
    positionCss = css`
      right: ${position === 'bottom-right' && size};
      bottom: ${placement};
      left: ${position === 'bottom' ? '50%' : position === 'bottom-left' && size};
      margin-left: ${position === 'bottom' && margin};
    `;
  } else if (position.startsWith('left')) {
    transform = 'rotate(135deg)';
    positionCss = css`
      top: ${position === 'left' ? '50%' : position === 'left-top' && size};
      bottom: ${size};
      left: ${placement};
      margin-top: ${position === 'left' && margin};
    `;
  }

  /**
   * 1. Rotate the clipping mask depending on arrow position.
   * 2. Arrow positioning on the base element.
   */
  return css`
    &::before,
    &::after {
      transform: ${transform}; /* [1] */
      ${positionCss}; /* [2] */
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
  const inset = options.inset || '0';
  const size = options.size === undefined ? 6 : (stripUnit(options.size) as number);
  const squareSize = `${Math.round((size * 2) / Math.sqrt(2))}px`;
  const afterOffset = 0;
  const beforeOffset = afterOffset + 2;

  /**
   * 1. Set base positioning for an element with an arrow.
   * 2. Apply shared properties to ::before and ::after.
   * 3. Display border with inherited border-color
   * 4. Clip the outer square forming the arrow border into a triangle so that the
   *    border merge with the container's.
   * 5. Clip the inner square forming the arrow body into a triangle so that it
   *    doesn't interfere with container content.
   */
  return css`
    position: relative; /* [1] */

    &::before,
    &::after {
      /* [2] */
      position: absolute;
      border-width: inherit;
      border-style: inherit;
      width: ${squareSize};
      height: ${squareSize};
      content: '';
      box-sizing: inherit;
    }

    &::before {
      border-color: inherit; /* [3] */
      background-color: transparent;
      clip-path: polygon(100% ${beforeOffset}px, ${beforeOffset}px 100%, 100% 100%); /* [4] */
    }

    &::after {
      border-color: transparent;
      background-clip: content-box;
      background-color: inherit;
      clip-path: polygon(100% ${afterOffset}px, ${afterOffset}px 100%, 100% 100%); /* [5] */
    }

    ${positionStyles(position, squareSize, inset)};
    ${options.animationModifier && animationStyles(position, options.animationModifier)};
  `;
}
