/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { Field, Input } from '@zendeskgarden/react-forms';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import CalendarStrokeIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';

/**
 * Demonstrates composing DatePickerRange so its calendar lives inside a
 * role="dialog" that opens and closes, mirroring DatePicker's own default
 * UX from the outside - entirely through DatePickerRange's own opt-in
 * dialog building blocks (DatePickerRange.Trigger, DatePickerRange.Dialog,
 * and Start/End's `opensDialog` prop), since DatePickerRange itself always
 * renders its calendar inline and never closes it on its own.
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
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Grid>
          <Grid.Row alignItems="end">
            <Grid.Col size="auto">
              <Field>
                <Field.Label>Start date</Field.Label>
                <DatePickerRange.Start opensDialog>
                  <Input />
                </DatePickerRange.Start>
              </Field>
            </Grid.Col>
            <Grid.Col size="auto">
              <Field>
                <Field.Label>End date</Field.Label>
                <DatePickerRange.End opensDialog>
                  <Input />
                </DatePickerRange.End>
              </Field>
            </Grid.Col>
            <Grid.Col size="auto">
              <DatePickerRange.Trigger>
                <IconButton
                  isPill
                  isBasic
                  isNeutral
                  aria-label="Choose dates"
                  data-test-id="calendar-button"
                >
                  <CalendarStrokeIcon />
                </IconButton>
              </DatePickerRange.Trigger>
            </Grid.Col>
          </Grid.Row>
        </Grid>
        <DatePickerRange.Dialog
          aria-label="Choose dates"
          data-test-id="range-dialog"
          style={{
            position: 'absolute',
            zIndex: 1000,
            marginTop: 4,
            background: 'white',
            border: '1px solid #d8dcde',
            borderRadius: 4,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </div>
    </DatePickerRange>
  );
};
