/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IColor, IHSVColor } from '../../types';
type ColorPickerActionTypes = {
    type: 'SATURATION_CHANGE';
    payload: IHSVColor;
} | {
    type: 'HUE_CHANGE';
    payload: string;
} | {
    type: 'ALPHA_SLIDER_CHANGE';
    payload: string;
} | {
    type: 'HEX_CHANGE';
    payload: string;
} | {
    type: 'RED_CHANGE';
    payload: string;
} | {
    type: 'GREEN_CHANGE';
    payload: string;
} | {
    type: 'BLUE_CHANGE';
    payload: string;
} | {
    type: 'ALPHA_CHANGE';
    payload: string;
} | {
    type: 'RESET_COLOR';
    payload: IColor;
};
interface IColorPickerState {
    color: IColor;
    hexInput: string;
    redInput: string;
    blueInput: string;
    greenInput: string;
    alphaInput: string;
}
export declare function convertStringToColor(colorString: string): IColor | undefined;
export declare const areColorsEqual: (a: IColor | string | undefined, b: IColor | string | undefined) => boolean;
export declare function getInitialState(color?: string | IColor): IColorPickerState;
export declare const reducer: (state: IColorPickerState, action: ColorPickerActionTypes) => IColorPickerState;
export {};
