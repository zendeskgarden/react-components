/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IDatePickerProps } from '../types';
/**
 * The following mappings use the Date offests:
 * 0 - Sunday
 * 1 - Monday
 * 6 - Saturday
 */
/** This type matches definition required by date-fns utilities */
export type DateFnsIndex = IDatePickerProps['weekStartsOn'];
/**
 * Return start day of week based on locale
 */
export declare function getStartOfWeek(locale?: string): 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
