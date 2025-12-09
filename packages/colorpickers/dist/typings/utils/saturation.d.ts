/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IHSVColor } from '../types';
export declare function limit(value: number, max: number, min?: number): number;
export declare function getNextHsv(e: MouseEvent, hue: number, container: HTMLDivElement, rtl: boolean): IHSVColor;
export declare const getThumbPosition: (x: number, y: number, rtl: boolean, container: React.RefObject<HTMLDivElement>) => {
    topFromMouse: number;
    leftFromMouse: number;
};
