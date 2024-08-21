/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, keyframes } from 'styled-components';
import { stripUnit } from 'polished';
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

const positionStyles = (position: ArrowPosition, size: number, inset: number) => {
  /** Overlap the arrow with the base element's border.
   * This value + rounding have been found to work well regardless of monitor pixel density and browser.
   */
  const defaultInset = 0.3;
  const margin = size / -2;
  const placement = Math.round((margin + inset + defaultInset) * 100) / 100;

  const marginPx = `${margin}px`;
  const placementPx = `${placement}px`;
  const sizePx = `${size}px`;

  let positionCss;
  let transform;

  if (position.startsWith('top')) {
    transform = 'rotate(-135deg)';
    positionCss = css`
      top: ${placementPx};
      right: ${position === 'top-right' && sizePx};
      left: ${position === 'top' ? '50%' : position === 'top-left' && sizePx};
      margin-left: ${position === 'top' && marginPx};
    `;
  } else if (position.startsWith('right')) {
    transform = 'rotate(-45deg)';
    positionCss = css`
      top: ${position === 'right' ? '50%' : position === 'right-top' && sizePx};
      right: ${placementPx};
      bottom: ${position === 'right-bottom' && sizePx};
      margin-top: ${position === 'right' && marginPx};
    `;
  } else if (position.startsWith('bottom')) {
    transform = 'rotate(45deg)';
    positionCss = css`
      right: ${position === 'bottom-right' && sizePx};
      bottom: ${placementPx};
      left: ${position === 'bottom' ? '50%' : position === 'bottom-left' && sizePx};
      margin-left: ${position === 'bottom' && marginPx};
    `;
  } else if (position.startsWith('left')) {
    transform = 'rotate(135deg)';
    positionCss = css`
      top: ${position === 'left' ? '50%' : position === 'left-top' && sizePx};
      bottom: ${size};
      left: ${placementPx};
      margin-top: ${position === 'left' && marginPx};
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
  const inset = stripUnit(options.inset || '0') as number;
  const size = stripUnit(options.size || '6') as number;

  /**
   * Adjusts the size to account for the overlap between the arrow and the base element.
   * This value + rounding have been found to work well regardless of monitor pixel density and browser.
   */
  const sizeOffset = 2;

  const squareSize = (size * 2) / Math.sqrt(2) + sizeOffset;
  const squareSizeRounded = Math.round(squareSize * 100) / 100;
  const squareSizePx = `${squareSizeRounded}px`;

  const afterOffset = 0;
  const beforeOffset = afterOffset + 2;

  /**
   * 1. Set base positioning for an element with an arrow.
   * 2. Apply shared properties to ::before and ::after.
   * 3. Display border with inherited border-color
   * 4. Clip the outer square forming the arrow border into a triangle so that the
   *    border merges with the container's.
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
      background-color: inherit;
      width: ${squareSizePx};
      height: ${squareSizePx};
      content: '';
      box-sizing: inherit;
    }

    &::before {
      border-color: inherit; /* [3] */
      clip-path: polygon(100% ${beforeOffset}px, ${beforeOffset}px 100%, 100% 100%); /* [4] */
    }

    &::after {
      border-color: transparent;
      background-clip: content-box;
      clip-path: polygon(100% ${afterOffset}px, ${afterOffset}px 100%, 100% 100%); /* [5] */
    }

    ${positionStyles(position, squareSizeRounded, inset)};
    ${options.animationModifier && animationStyles(position, options.animationModifier)};
  `;
}
