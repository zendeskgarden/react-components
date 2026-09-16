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
import { ClearableInput, Field, InputGroup } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

/**
 * DatePickerRange normally renders its calendar inline; composing
 * Trigger + Dialog opts into DatePicker's popover UX instead. Start/End
 * auto-wire to the Dialog once it's composed.
 */
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
        <Grid>
          <Grid.Row alignItems="end">
            <Grid.Col size="auto">
              <Field>
                <Field.Label>Start date</Field.Label>
                <InputGroup isUnified>
                  <DatePickerRange.Start>
                    <ClearableInput />
                  </DatePickerRange.Start>
                  <DatePickerRange.Trigger
                    toggleCalendarLabel="Choose start date"
                    data-test-id="start-calendar-button"
                  />
                </InputGroup>
              </Field>
            </Grid.Col>
            <Grid.Col size="auto">
              <Field>
                <Field.Label>End date</Field.Label>
                <InputGroup isUnified>
                  <DatePickerRange.End>
                    <ClearableInput />
                  </DatePickerRange.End>
                  <DatePickerRange.Trigger
                    toggleCalendarLabel="Choose end date"
                    data-test-id="end-calendar-button"
                  />
                </InputGroup>
              </Field>
            </Grid.Col>
          </Grid.Row>
        </Grid>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </StyledWrapper>
    </DatePickerRange>
  );
};
