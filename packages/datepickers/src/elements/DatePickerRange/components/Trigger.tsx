/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CalendarButton } from '../../../components/CalendarButton';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import useDatePickerRangeFieldContext from '../utils/useDatePickerRangeFieldContext';
import { IDatePickerRangeTriggerProps } from '../../../types';

/**
 * More than one `Trigger` may be composed at once (e.g. one per field) -
 * each registers its ref, so blur/focus detection treats
 * all of them as part of the same open widget. Inside a `StartGroup`/
 * `EndGroup` it's disabled along with that group's field; outside either,
 * only once both fields are disabled or read-only.
 */
export const Trigger = ({ toggleCalendarLabel, ...props }: IDatePickerRangeTriggerProps) => {
  const { isCompact, getTriggerProps, registerTriggerRef } = useDatePickerContext();
  const field = useDatePickerRangeFieldContext();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => registerTriggerRef(triggerRef), [registerTriggerRef]);

  const getFieldTriggerProps = useCallback<typeof getTriggerProps>(
    triggerProps => getTriggerProps({ ...triggerProps, ref: triggerRef, field }),
    [getTriggerProps, field]
  );

  return (
    <CalendarButton
      isCompact={isCompact}
      toggleCalendarLabel={toggleCalendarLabel}
      getTriggerProps={getFieldTriggerProps}
      {...props}
    />
  );
};

Trigger.displayName = 'DatePickerRange.Trigger';

Trigger.propTypes = {
  toggleCalendarLabel: PropTypes.string
};
