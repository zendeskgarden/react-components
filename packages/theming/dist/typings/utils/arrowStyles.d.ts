/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ArrowPosition } from '../types';
type ArrowOptions = {
    size?: string;
    inset?: string;
    shift?: string;
    animationModifier?: string;
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
 * @param {string} [options.shift='0'] Shifts arrow positioning along
 * the edge of the parent container.
 * @param {string} [options.animationModifier] A CSS class or attribute selector
 *  which, when applied, animates the arrow's appearance.
 *
 * @component
 */
export default function arrowStyles(position: ArrowPosition, options?: ArrowOptions): import("styled-components").RuleSet<object>;
export {};
