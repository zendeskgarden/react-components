/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { focusStyles } from '@zendeskgarden/react-theming';
import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import {
  DatePickerRange,
  DatePickerRangeInvalidReason,
  IDatePickerRangeValueSettledResult
} from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';

const StyledScrollRegion = styled.section`
  margin: -${p => p.theme.shadowWidths.md};
  padding: ${p => p.theme.shadowWidths.md};
  max-width: 580px;
  overflow: auto;
  ${p => focusStyles({ theme: p.theme })}
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 280px);
  grid-template-rows: auto auto;
  gap: 20px;
`;

const StyledCalendar = styled(DatePickerRange.Calendar)`
  grid-column: 1 / -1;
  margin: -${p => p.theme.shadowWidths.md};
  padding: ${p => p.theme.shadowWidths.md};
`;

export const DatePickerRangeInvalidDateStory: StoryFn = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [startValue, setStartValue] = useState<Date | undefined>(undefined);
  const [endValue, setEndValue] = useState<Date | undefined>(undefined);
  const [startReason, setStartReason] = useState<DatePickerRangeInvalidReason | undefined>(
    undefined
  );
  const [endReason, setEndReason] = useState<DatePickerRangeInvalidReason | undefined>(undefined);
  const dependency = useMemo(() => [startReason, endReason], [startReason, endReason]);
  const containerTabIndex = useScrollRegion({ containerRef, dependency });

  const handleChange = (values: { startValue?: Date; endValue?: Date }) => {
    action('onChange')(values);
    setStartValue(values.startValue);
    setEndValue(values.endValue);
  };

  const handleValueSettled = (result: IDatePickerRangeValueSettledResult) => {
    action('onValueSettled')(result);

    if (result.field === 'start') {
      setStartReason(result.reason);
    } else {
      setEndReason(result.reason);
    }
  };

  return (
    <DatePickerRange
      startValue={startValue}
      endValue={endValue}
      onChange={handleChange}
      onValueSettled={handleValueSettled}
    >
      <StyledScrollRegion
        ref={containerRef}
        tabIndex={containerTabIndex}
        aria-label="Date range picker with invalid date validation"
      >
        <StyledGrid>
          <Field>
            <Field.Label>Start date</Field.Label>
            <Field.Hint>
              3 accepted formats: &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
              YYYY&quot;
            </Field.Hint>
            <DatePickerRange.Start>
              <ClearableInput
                validation={startReason ? 'error' : undefined}
                buttonProps={{ onClick: () => setStartReason(undefined) }}
              />
            </DatePickerRange.Start>
            {startReason === 'malformed' && (
              <Field.Message validation="error">
                Date must be in &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
                YYYY&quot; format.
              </Field.Message>
            )}
          </Field>
          <Field>
            <Field.Label>End date</Field.Label>
            <Field.Hint>
              3 accepted formats: &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
              YYYY&quot;
            </Field.Hint>
            <DatePickerRange.End>
              <ClearableInput
                validation={endReason ? 'error' : undefined}
                buttonProps={{ onClick: () => setEndReason(undefined) }}
              />
            </DatePickerRange.End>
            {endReason === 'malformed' && (
              <Field.Message validation="error">
                Date must be in &quot;M/D/YYYY&quot;, &quot;Mon D, YYYY&quot;, or &quot;Month D,
                YYYY&quot; format.
              </Field.Message>
            )}
          </Field>
          <StyledCalendar />
        </StyledGrid>
      </StyledScrollRegion>
    </DatePickerRange>
  );
};
