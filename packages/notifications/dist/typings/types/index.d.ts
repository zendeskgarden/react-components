/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { IButtonProps } from '@zendeskgarden/react-buttons';
export declare const PLACEMENT: readonly ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"];
export declare const TYPE: readonly ["success", "warning", "error", "info"];
export type Placement = (typeof PLACEMENT)[number];
export type Type = (typeof TYPE)[number];
export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
    /** Applies alert type styles */
    type: Type;
}
export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
    /** Applies notification type styles */
    type?: Type;
}
export interface IWellProps extends HTMLAttributes<HTMLDivElement> {
    /** Applies a background color */
    isRecessed?: boolean;
    /** Applies a drop shadow */
    isFloating?: boolean;
}
export interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
    /** Applies regular (non-bold) font weight */
    isRegular?: boolean;
}
export interface IToastProviderProps {
    /**
     * Limits the number of visible toasts
     */
    limit?: number;
    /**
     * Passes placement-based customization props to the toast's parent element
     */
    placementProps?: Partial<Record<Placement, HTMLAttributes<HTMLDivElement>>>;
    /**
     * Sets the `z-index` of the toast
     */
    zIndex?: number;
}
export interface IGlobalAlertProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Applies global alert type styles
     */
    type: Type;
}
export interface IGlobalAlertButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Pick<IButtonProps, 'isBasic'> {
}
export interface IGlobalAlertTitleProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Applies regular (non-bold) font weight
     */
    isRegular?: boolean;
}
