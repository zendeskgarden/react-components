/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback, useMemo } from 'react';
import { useId } from '@zendeskgarden/container-utilities';

export interface IUseDatePickerRangeReturnValue {
  calendarId: string;
  headingId: string;
  getInputProps: (props?: Record<string, unknown>) => Record<string, unknown>;
}

/**
 * Unlike DatePicker's combobox input, DatePickerRange's calendar is always
 * visible rather than a togglable popover - so aria-expanded is always
 * "true" and there's no aria-haspopup, since nothing pops up.
 *
 * Called from two different places for two different id scopes, matching
 * how DatePicker's own useDatePicker is used: once at the DatePickerRange
 * root for the single, shared calendarId/getInputProps (used by both Start
 * and End), and once per Month instance for that month's own unique
 * headingId - each call's other return values are simply unused there.
 */
export function useDatePickerRange(): IUseDatePickerRangeReturnValue {
  const prefix = useId();
  const calendarId = `${prefix}--calendar`;
  const headingId = `${prefix}--heading`;

  const getInputProps = useCallback(
    (props: Record<string, unknown> = {}) => ({
      role: 'combobox',
      'aria-autocomplete': 'none',
      'aria-expanded': 'true',
      'aria-controls': calendarId,
      ...props
    }),
    [calendarId]
  );

  return useMemo(
    () => ({ calendarId, headingId, getInputProps }),
    [calendarId, headingId, getInputProps]
  );
}
