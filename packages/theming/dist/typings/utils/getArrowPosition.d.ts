/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Placement } from '@floating-ui/react-dom';
import { ArrowPosition, IGardenTheme } from '../types';
export declare const POSITION_MAP: Record<Placement, ArrowPosition>;
export declare const RTL_POSITION_MAP: Record<string, ArrowPosition>;
/**
 * Convert Floating-UI placement to a valid `arrowStyles` position.
 *
 * @param {Object} theme Context `theme` object used to determine if layout is right-to-left.
 * @param {string} placement A Floating-UI placement.
 *
 * @returns An `arrowStyles` position.
 */
export declare const getArrowPosition: (theme: IGardenTheme, placement: Placement) => ArrowPosition;
