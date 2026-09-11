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
 * DatePickerRange.Dialog styles and floats itself the same way DatePicker's
 * own popover does, so no manual positioning/styling is needed here.
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
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </div>
    </DatePickerRange>
  );
};
