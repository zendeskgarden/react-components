/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import { CalendarButton } from '../../../components/CalendarButton';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

interface ITriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  toggleCalendarLabel?: string;
}

/**
 * A calendar-icon button that opens/focuses a consumer-composed
 * `DatePickerRange.Dialog`. Unused unless a `DatePickerRange.Dialog` is
 * also rendered. More than one `Trigger` may be composed at once (e.g. one
 * per field, each with its own `toggleCalendarLabel`) - `getTriggerProps`
 * tracks each one's ref, so blur/focus detection treats every one of them
 * as part of the same open widget.
 */
export const Trigger = ({ toggleCalendarLabel, ...props }: ITriggerProps) => {
  const { isCompact, getTriggerProps } = useDatePickerContext();

  return (
    <CalendarButton
      isCompact={isCompact}
      toggleCalendarLabel={toggleCalendarLabel}
      getTriggerProps={getTriggerProps}
      {...props}
    />
  );
};

Trigger.displayName = 'DatePickerRange.Trigger';
