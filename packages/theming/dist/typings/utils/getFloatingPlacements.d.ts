/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Placement as FloatingPlacement } from '@floating-ui/react-dom';
import { IGardenTheme, Placement } from '../types';
export declare const PLACEMENT_MAP: Record<string, FloatingPlacement>;
export declare const RTL_PLACEMENT_MAP: Record<string, FloatingPlacement>;
/**
 * Convert Garden placements to valid placements for Floating-UI.
 *
 * @param {Object} theme Context `theme` object used to determine if layout is right-to-left.
 * @param {string} placement A Garden placement.
 * @param {Array} fallbackPlacements Optional list of Garden fallback placements.
 *
 * @returns A Floating-UI (placement, fallbackPlacements) tuple.
 */
export declare const getFloatingPlacements: (theme: IGardenTheme, placement: Placement, fallbackPlacements?: Placement[]) => [FloatingPlacement, FloatingPlacement[]];
