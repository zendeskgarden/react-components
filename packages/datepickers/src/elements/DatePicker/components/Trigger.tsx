/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CalendarButton } from '../../../components/CalendarButton';
import useDatePickerContext from '../utils/useDatePickerContext';
import { IDatePickerTriggerProps } from '../../../types';

export const Trigger = ({ isCompact, toggleCalendarLabel }: IDatePickerTriggerProps) => {
  const { buttonId, getTriggerProps } = useDatePickerContext();

  return (
    <CalendarButton
      id={buttonId}
      isCompact={isCompact}
      toggleCalendarLabel={toggleCalendarLabel}
      getTriggerProps={getTriggerProps}
    />
  );
};

Trigger.displayName = 'DatePicker.Trigger';
