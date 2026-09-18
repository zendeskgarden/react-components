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
import { ClearableInput, Field, Fieldset } from '@zendeskgarden/react-forms';
import { customParseShortDate, formatShortDate } from './utils';

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

export const DatePickerRangeInvalidRequiredStory: StoryFn = () => {
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
      formatDate={formatShortDate}
      customParseDate={customParseShortDate}
      onChange={handleChange}
      onValueSettled={handleValueSettled}
    >
      <StyledScrollRegion
        ref={containerRef}
        tabIndex={containerTabIndex}
        aria-label="Date range picker with required fields"
      >
        <Fieldset>
          <Fieldset.Legend hidden>Date range</Fieldset.Legend>
          <StyledGrid>
            <Field>
              <Field.Label isRegular={false}>
                Start date<span aria-hidden="true">*</span>
              </Field.Label>
              <Field.Hint>Must be M/D/YYYY format</Field.Hint>
              <DatePickerRange.Start>
                <ClearableInput
                  required
                  validation={startReason ? 'error' : undefined}
                  buttonProps={{ onClick: () => setStartReason(undefined) }}
                />
              </DatePickerRange.Start>
              {startReason === 'required' && (
                <Field.Message validation="error">Start date cannot be blank.</Field.Message>
              )}
            </Field>
            <Field>
              <Field.Label isRegular={false}>
                End date<span aria-hidden="true">*</span>
              </Field.Label>
              <Field.Hint>Must be M/D/YYYY format</Field.Hint>
              <DatePickerRange.End>
                <ClearableInput
                  required
                  validation={endReason ? 'error' : undefined}
                  buttonProps={{ onClick: () => setEndReason(undefined) }}
                />
              </DatePickerRange.End>
              {endReason === 'required' && (
                <Field.Message validation="error">End date cannot be blank.</Field.Message>
              )}
            </Field>
            <StyledCalendar />
          </StyledGrid>
        </Fieldset>
      </StyledScrollRegion>
    </DatePickerRange>
  );
};
