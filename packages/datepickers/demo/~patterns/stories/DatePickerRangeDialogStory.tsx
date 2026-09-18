/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const DatePickerRangeDialogStory: StoryFn = () => {
  const [startValue, setStartValue] = useState<Date | undefined>(undefined);
  const [endValue, setEndValue] = useState<Date | undefined>(undefined);

  return (
    <DatePickerRange
      startValue={startValue}
      endValue={endValue}
      onChange={values => {
        setStartValue(values.startValue);
        setEndValue(values.endValue);
      }}
    >
      <StyledWrapper>
        <div>
          <Field>
            <Field.Label>Start date</Field.Label>
            <DatePickerRange.StartGroup>
              <DatePickerRange.Start>
                <ClearableInput wrapperProps={{ role: null, 'aria-labelledby': null } as any} />
              </DatePickerRange.Start>
              <DatePickerRange.Trigger
                toggleCalendarLabel="Choose start date"
                data-test-id="start-calendar-button"
              />
            </DatePickerRange.StartGroup>
          </Field>
          <Field>
            <Field.Label>End date</Field.Label>
            <DatePickerRange.EndGroup>
              <DatePickerRange.End>
                <ClearableInput wrapperProps={{ role: null, 'aria-labelledby': null } as any} />
              </DatePickerRange.End>
              <DatePickerRange.Trigger
                toggleCalendarLabel="Choose end date"
                data-test-id="end-calendar-button"
              />
            </DatePickerRange.EndGroup>
          </Field>
        </div>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </StyledWrapper>
    </DatePickerRange>
  );
};
