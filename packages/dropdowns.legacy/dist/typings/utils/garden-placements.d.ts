/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ArrowPosition } from '@zendeskgarden/react-theming';
import { GardenPlacement, PopperPlacement } from '../types';
/**
 * Convert Garden RTL aware placement to Popper.JS valid placement
 */
export declare function getPopperPlacement(gardenPlacement: GardenPlacement): PopperPlacement;
/**
 * Convert Garden RTL aware placement to RTL equivalent Popper.JS placement
 * @param {String} gardenPlacement
 */
export declare function getRtlPopperPlacement(gardenPlacement: GardenPlacement): PopperPlacement;
/**
 * Convert Popper.JS placement to corresponding arrow position
 * @param {String} popperPlacement
 */
export declare function getArrowPosition(popperPlacement?: PopperPlacement): ArrowPosition;
/**
 * Convert Popper.JS placement to corresponding menu position
 * @param {String} popperPlacement
 */
export declare function getMenuPosition(popperPlacement?: PopperPlacement): "top" | "bottom" | "right" | "left";
