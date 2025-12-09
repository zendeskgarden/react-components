/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Placement } from '@floating-ui/react-dom';
import { MenuPosition } from '../types';
/**
 * Convert Floating-UI placement to a valid `menuStyles` position.
 *
 * @param {string} placement A Floating-UI placement.
 *
 * @returns A `menuStyles` position.
 */
export declare const getMenuPosition: (placement: Placement) => MenuPosition;
