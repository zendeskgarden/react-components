/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, useRef } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import CalendarStrokeIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import { StyledCalendarButton } from '../styled';
import { ElementProps } from '../types';

export interface ICalendarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCompact?: boolean;
  toggleCalendarLabel?: string;
  getTriggerProps: (props?: ElementProps<HTMLButtonElement>) => ElementProps<HTMLButtonElement>;
}

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
    'Choose date'
  );
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <StyledCalendarButton
      type="button"
      isPill
      isBasic
      isNeutral
      focusInset={!isCompact}
      tabIndex={-1}
      aria-label={ariaLabel}
      data-test-id="calendar-button"
      {...getTriggerProps({ ...props, ref: triggerRef })}
    >
      <CalendarStrokeIcon aria-hidden="true" />
    </StyledCalendarButton>
  );
};

CalendarButton.displayName = 'CalendarButton';
