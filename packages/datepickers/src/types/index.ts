/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, ReactElement } from 'react';
import { PLACEMENT as BASE_PLACEMENT } from '@zendeskgarden/react-theming';

export const WEEK_STARTS_ON = [0, 1, 2, 3, 4, 5, 6] as const;

export const PLACEMENT = ['auto', ...BASE_PLACEMENT] as const;

export type GardenPlacement = (typeof PLACEMENT)[number];

export interface IDatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Appends the calendar to the element provided */
  appendToNode?: Element | DocumentFragment;
  /**
   * Sets the selected date
   */
  value?: Date;
  /**
   * Handles date change
   *
   * @param {Date} date The selected date
   */
  onChange?: (date: Date) => void;
  /**
   * Called when the input value settles — on blur after typing, or when a date
   * is selected from the calendar — reporting whether the current value is valid
   *
   * @param {Object} result The settled value
   * @param {Date} [result.date] The parsed or selected date, if valid
   * @param {string} result.inputValue The input's current displayed value
   * @param {boolean} result.valid Whether the current value is valid
   */
  onValueSettled?: (result: { date?: Date; inputValue: string; valid: boolean }) => void;
  /**
   * Customizes the input element's date formatting
   *
   *  @param {Date} date The selected date
   *  @returns {string} a formatted date string
   */
  formatDate?: (date: Date) => string;
  /**
   * Applies locale-based formatting.
   * Accepts all valid `Intl` [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
   */
  locale?: string;
  /**
   * Overrides the locale default start day of week
   */
  weekStartsOn?: (typeof WEEK_STARTS_ON)[number];
  /**
   * Disables dates before this value on the calendar
   */
  minValue?: Date;
  /**
   * Disables dates after this value on the calendar
   */
  maxValue?: Date;
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
  /**
   * Overrides default date parsing
   *
   * @param {string} inputValue A localized input value
   * @returns {Date} the parsed date
   */
  customParseDate?: (inputValue: string) => Date;
  /**
   * Defines the ref key used to position the calendar
   */
  refKey?: string;
  /**
   * Adjusts the position of the calendar
   **/
  placement?: GardenPlacement;
  /**
   * Animates the calendar
   */
  isAnimated?: boolean;
  /**
   * Sets the `z-index` of the calendar
   */
  zIndex?: number;
  /**
   * Provides a customized/translated label for the calendar trigger button
   */
  openCalendarLabel?: string;
  /** @ignore ReactNode override */
  children: ReactElement;
}

export interface IDatePickerRangeProps extends Pick<
  IDatePickerProps,
  'locale' | 'weekStartsOn' | 'minValue' | 'maxValue' | 'formatDate' | 'isCompact'
> {
  /**
   * Sets the start date
   */
  startValue?: Date;
  /**
   * Sets the end date
   */
  endValue?: Date;
  /**
   * Handles start and end date changes
   *
   * @param {Object} values The selected dates
   * @param {Date} [values.startValue] Optional start date
   * @param {Date} [values.endValue] Optional end date
   */
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  /**
   * Overrides the default date parsing
   *
   * @param {string} inputValue A date string
   * @returns {Date} the parsed date
   */
  customParseDate?: (inputValue?: string) => Date;
}
