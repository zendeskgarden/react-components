/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import CalendarStrokeIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import { StyledCalendarButton } from '../../../styled';

interface ICalendarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCompact?: boolean;
  openCalendarLabel?: string;
}

export const CalendarButton = forwardRef<HTMLButtonElement, ICalendarButtonProps>(
  ({ isCompact, openCalendarLabel, ...props }, ref) => {
    const ariaLabel = useText(
      CalendarButton,
      { openCalendarLabel },
      'openCalendarLabel',
      'Choose date'
    );

    return (
      <StyledCalendarButton
        ref={ref}
        type="button"
        $isCompact={!!isCompact}
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        data-test-id="calendar-button"
        {...props}
      >
        <CalendarStrokeIcon />
      </StyledCalendarButton>
    );
  }
);

CalendarButton.displayName = 'CalendarButton';
