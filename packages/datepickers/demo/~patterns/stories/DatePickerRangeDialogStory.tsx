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
import { IconButton } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { getColor } from '@zendeskgarden/react-theming';
import CalendarStrokeIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledCalendarIconButton = styled(IconButton)`
  &&[aria-expanded='true'] {
    background-color: ${p =>
      getColor({
        theme: p.theme,
        variable: 'background.primaryEmphasis',
        transparency: p.theme.opacity[200]
      })};
    color: ${p =>
      getColor({
        theme: p.theme,
        variable: 'foreground.subtle',
        dark: { offset: -200 },
        light: { offset: 200 }
      })};
  }
`;

/**
 * Demonstrates composing DatePickerRange so its calendar lives inside a
 * role="dialog" that opens and closes, mirroring DatePicker's own default
 * UX from the outside - entirely through DatePickerRange's own opt-in
 * dialog building blocks (DatePickerRange.Trigger, DatePickerRange.Dialog,
 * and Start/End's `opensDialog` prop), since DatePickerRange itself always
 * renders its calendar inline and never closes it on its own.
 * DatePickerRange.Dialog styles and floats itself the same way DatePicker's
 * own popover does, so no manual positioning/styling is needed here. Each
 * field gets its own calendar button, mirroring DatePicker's own
 * Input+CalendarButton pairing - DatePickerRange.Trigger supports composing
 * more than one at once for exactly this case. Start/End compose their
 * child as a true, direct child of InputGroup (rather than through a
 * wrapper of their own), so ClearableInput's nested input group still
 * merges seamlessly with the calendar button below.
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
                  <DatePickerRange.Start opensDialog>
                    <ClearableInput />
                  </DatePickerRange.Start>
                  <DatePickerRange.Trigger>
                    <StyledCalendarIconButton
                      isPill
                      isBasic
                      isNeutral
                      aria-label="Choose start date"
                      data-test-id="start-calendar-button"
                    >
                      <CalendarStrokeIcon />
                    </StyledCalendarIconButton>
                  </DatePickerRange.Trigger>
                </InputGroup>
              </Field>
            </Grid.Col>
            <Grid.Col size="auto">
              <Field>
                <Field.Label>End date</Field.Label>
                <InputGroup isUnified>
                  <DatePickerRange.End opensDialog>
                    <ClearableInput />
                  </DatePickerRange.End>
                  <DatePickerRange.Trigger>
                    <StyledCalendarIconButton
                      isPill
                      isBasic
                      isNeutral
                      aria-label="Choose end date"
                      data-test-id="end-calendar-button"
                    >
                      <CalendarStrokeIcon />
                    </StyledCalendarIconButton>
                  </DatePickerRange.Trigger>
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
