/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { FieldsetHTMLAttributes, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactElement, SelectHTMLAttributes, SVGAttributes, TextareaHTMLAttributes } from 'react';
export declare const VALIDATION: readonly ["success", "warning", "error"];
export declare const FILE_VALIDATION: readonly ["success", "error"];
export declare const FILE_TYPE: readonly ["pdf", "zip", "image", "document", "spreadsheet", "presentation", "generic"];
export type Validation = (typeof VALIDATION)[number];
export type FileValidation = (typeof FILE_VALIDATION)[number];
export type FileType = (typeof FILE_TYPE)[number];
export interface IFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    /** Applies compact styling */
    isCompact?: boolean;
}
export interface IInputGroupProps extends Pick<IFieldsetProps, 'isCompact'>, HTMLAttributes<HTMLDivElement> {
}
export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    /** Applies regular (non-bold) font weight */
    isRegular?: boolean;
    /** Hides the label visually without hiding it from screen readers */
    hidden?: LabelHTMLAttributes<HTMLLabelElement>['hidden'];
}
export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
    /** Applies validation state styling */
    validation?: Validation;
    /** Defines the aria-label for the validation icon */
    validationLabel?: string;
}
export interface IMessageIconProps {
    /** Applies validation state styling */
    validation?: Validation;
}
export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Applies compact styling */
    isCompact?: IFieldsetProps['isCompact'];
}
export interface IToggleProps extends IRadioProps {
}
export interface ICheckboxProps extends IRadioProps {
    /**
     * Sets the checkbox state to
     * [indeterminate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
     */
    indeterminate?: boolean;
}
export interface IInputProps extends IRadioProps {
    /** Removes borders and padding */
    isBare?: boolean;
    /** Applies inset `box-shadow` styling on focus */
    focusInset?: boolean;
    /** Applies validation state styling */
    validation?: Validation;
}
export interface IMediaInputProps extends IInputProps {
    /** Accepts a "start" icon to display */
    start?: ReactElement;
    /** Accepts an "end" icon to display */
    end?: ReactElement;
    /** Applies props to the wrapping [FauxInput](#fauxinput) element */
    wrapperProps?: any;
    /** Applies a ref to the wrapping [FauxInput](#fauxinput) element */
    wrapperRef?: any;
}
export interface IFauxInputProps extends Pick<IInputProps, 'isCompact' | 'isBare' | 'focusInset' | 'validation'>, HTMLAttributes<HTMLDivElement> {
    /** Indicates that the element is not interactive */
    disabled?: IInputProps['disabled'];
    /** Applies read-only styling */
    readOnly?: IInputProps['readOnly'];
    /** Applies focus stying */
    isFocused?: boolean;
    /** Applies hover stying */
    isHovered?: boolean;
    /** @ignore Internal use only */
    mediaLayout?: boolean;
}
export interface IFauxInputIconProps extends Pick<IFauxInputProps, 'isHovered' | 'isFocused'>, SVGAttributes<SVGElement> {
    /** Applies disabled styling */
    isDisabled?: IFauxInputProps['disabled'];
    /** Rotates icon 180 degrees */
    isRotated?: boolean;
}
export interface ITextareaProps extends Pick<IInputProps, 'isCompact' | 'isBare' | 'focusInset' | 'validation'>, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Enables manual vertical resize */
    isResizable?: boolean;
    /** Defines the minimum height in rows */
    minRows?: number;
    /** Defines the maximum height in rows */
    maxRows?: number;
}
export interface ISelectProps extends Pick<IInputProps, 'isCompact' | 'isBare' | 'focusInset' | 'validation'>, SelectHTMLAttributes<HTMLSelectElement> {
}
export interface IFileUploadProps extends Pick<IInputProps, 'disabled' | 'isCompact'>, HTMLAttributes<HTMLDivElement> {
    /** Indicates that the element is not interactive */
    disabled?: IInputProps['disabled'];
    /** Applies drag styling */
    isDragging?: boolean;
}
export interface IFileProps extends Pick<IInputProps, 'isCompact' | 'focusInset'>, HTMLAttributes<HTMLDivElement> {
    /** Determines the icon to display */
    type?: FileType;
    /** Applies validation state styling */
    validation?: FileValidation;
}
export interface IRangeProps extends InputHTMLAttributes<HTMLInputElement> {
    /** @ignore */
    hasLowerTrack?: boolean;
}
export interface ITilesProps extends HTMLAttributes<HTMLDivElement> {
    /** Sets the selected value in a controlled tiles component */
    value?: IRadioProps['value'];
    /** Handles selection change event */
    onChange?: IRadioProps['onChange'];
    /** Sets the name used to reference the value of the control */
    name: NonNullable<IRadioProps['name']>;
    /** Centers tile content */
    isCentered?: boolean;
}
export interface ITilesTileProps extends HTMLAttributes<HTMLLabelElement> {
    /** Sets the value of the tile */
    value?: IRadioProps['value'];
    /** Indicates that the element is not interactive */
    disabled?: IRadioProps['disabled'];
}
