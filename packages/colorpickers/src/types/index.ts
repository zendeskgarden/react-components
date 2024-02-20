/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';
import { ITooltipModalProps } from '@zendeskgarden/react-modals';

export interface IColor {
  hex: string;
  hue: number;
  saturation: number;
  lightness: number;
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export interface IHSVColor {
  h: number;
  s: number;
  v: number;
}

export interface IHSLColor {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export interface IRGBColor {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}

export interface IColorpickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'> {
  /** Sets the color for an uncontrolled color picker */
  defaultColor?: string | IColor;
  /** Sets the color for a controlled color picker */
  color?: string | IColor;
  /** Hides alpha transparency fields */
  isOpaque?: boolean;
  /**
   * Handles color picker changes
   *
   * @param {Object} color A color picker state
   */
  onChange?: (color: IColor) => void;
  /** Replaces label text within the color picker */
  labels?: {
    hueSlider?: string;
    alphaSlider?: string;
    hex?: string;
    red?: string;
    green?: string;
    blue?: string;
    alpha?: string;
  };
  /** @ignore */
  autofocus?: boolean;
}

export interface IColorpickerDialogProps extends IColorpickerProps {
  /**
   * Handles close actions. Can be triggered from the backdrop.
   *
   * @param {Object} color A color picker state
   */
  onClose?: (color: IColor) => void;
  /** Adjusts the placement of the color dialog */
  placement?: ITooltipModalProps['placement'];
  /** Disables the color dialog button */
  disabled?: boolean;
  /**
   * Sets the `z-index` of the color dialog
   */
  zIndex?: ITooltipModalProps['zIndex'];
  /**
   * Adds an arrow to the color dialog
   */
  hasArrow?: ITooltipModalProps['hasArrow'];
  /**
   * Animates the color dialog
   */
  isAnimated?: ITooltipModalProps['isAnimated'];
  /**
   * Opens the dialog in a controlled color picker dialog
   */
  isOpen?: boolean;
  /**
   * Applies inset `box-shadow` styling on focus
   */
  focusInset?: boolean;
  /**
   * Passes HTML attributes to the color dialog button element
   */
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  /**
   * Handles dialog changes
   *
   * @param {Object} changes The changed dialog state
   */
  onDialogChange?: (changes: { isOpen: boolean }) => void;
}

export interface ILabeledColor {
  value: string;
  label: string;
}

export interface IColorSwatchProps extends Omit<HTMLAttributes<HTMLTableElement>, 'onSelect'> {
  /** Sets the name used to reference the value of the control */
  name: string;
  /** Sets the two-dimension array of labeled HEX and RGB/A string colors */
  colors: { value: string; label: string }[][];
  /** Determines if the color swatch is backed by radio (default) or checkbox inputs */
  isCheckboxGroup?: boolean;
  /** Sets the selected row index in a controlled color swatch */
  selectedRowIndex?: number | null;
  /** Sets the selected column index in a controlled color swatch */
  selectedColIndex?: number | null;
  /** Sets the default selected row index in an uncontrolled color swatch */
  defaultSelectedRowIndex?: number;
  /** Sets the default selected column index in an uncontrolled color swatch */
  defaultSelectedColIndex?: number;
  /** Handles color swatch select event */
  onSelect?: (rowIndex: number | null, colIndex: number | null) => void;
}

export interface IColorSwatchDialogProps extends IColorSwatchProps {
  /** Adjusts the placement of the color dialog */
  placement?: ITooltipModalProps['placement'];
  /** Disables the color dialog button */
  disabled?: boolean;
  /** Sets the `z-index` of the color dialog */
  zIndex?: ITooltipModalProps['zIndex'];
  /** Adds an arrow to the color dialog */
  hasArrow?: ITooltipModalProps['hasArrow'];
  /** Animates the color dialog */
  isAnimated?: ITooltipModalProps['isAnimated'];
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Passes HTML attributes to the color dialog button element */
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  /** Opens the dialog in a controlled color swatch dialog */
  isOpen?: boolean;
  /**
   * Handles dialog changes
   *
   * @param {Object} changes The changed dialog state
   */
  onDialogChange?: (changes: { isOpen: boolean }) => void;
}
