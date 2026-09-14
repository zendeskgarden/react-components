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
  toggleCalendarLabel?: string;
}

export const CalendarButton = forwardRef<HTMLButtonElement, ICalendarButtonProps>(
  ({ isCompact, toggleCalendarLabel, ...props }, ref) => {
    const ariaLabel = useText(
      CalendarButton,
      { toggleCalendarLabel },
      'toggleCalendarLabel',
      'Choose date'
    );

    return (
      <StyledCalendarButton
        ref={ref}
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        tabIndex={-1}
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        data-test-id="calendar-button"
        {...props}
      >
        <CalendarStrokeIcon aria-hidden="true" />
      </StyledCalendarButton>
    );
  }
);

CalendarButton.displayName = 'CalendarButton';
