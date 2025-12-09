/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IHSVColor } from '../../types';
interface IColorWellProps {
    hue: number;
    saturation: number;
    lightness: number;
    onChange?: (hsv: IHSVColor, event: MouseEvent) => void;
}
export declare const ColorWell: React.FC<IColorWellProps>;
export {};
