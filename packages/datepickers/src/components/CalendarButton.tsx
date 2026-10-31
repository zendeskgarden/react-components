/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useText } from '@zendeskgarden/react-theming';
import CalendarStrokeIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import { StyledCalendarButton } from '../styled';
import { ICalendarButtonProps } from '../types';

/** Default `toggleCalendarLabel`, also used by `DatePicker.Dialog` when it has no trigger to take its name from. */
export const DEFAULT_TOGGLE_CALENDAR_LABEL = 'Choose date';

/** Shared by `DatePicker` and `DatePickerRange` - each supplies its own `getTriggerProps` from context. */
export const CalendarButton = ({
  isCompact,
  toggleCalendarLabel,
  getTriggerProps,
  ...props
}: ICalendarButtonProps) => {
  const ariaLabel = useText(
    CalendarButton,
    { toggleCalendarLabel },
    'toggleCalendarLabel',
    DEFAULT_TOGGLE_CALENDAR_LABEL
  );
  return (
    <StyledCalendarButton
      type="button"
      isPill
      isBasic
      isNeutral
      focusInset={!isCompact}
      tabIndex={-1}
      aria-label={ariaLabel}
      {...getTriggerProps(props)}
    >
      <CalendarStrokeIcon aria-hidden="true" />
    </StyledCalendarButton>
  );
};

CalendarButton.displayName = 'CalendarButton';
