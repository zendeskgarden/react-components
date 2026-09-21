/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { useId } from '@zendeskgarden/container-utilities';
import { DatePickerRange, IDatePickerRangeProps } from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field, Fieldset } from '@zendeskgarden/react-forms';

const FIELD_WIDTH_PX = 302;
const COMPACT_FIELD_WIDTH_PX = 235;

const SHORT_DATE_PATTERN = /^(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})$/u;

/** Must agree with `customParseDate` below, or typed input stops parsing once the field reformats. */
const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

const customParseDate = (value = '') => {
  const match = SHORT_DATE_PATTERN.exec(value);

  if (!match?.groups) {
    return new Date(NaN);
  }

  const { month, day, year } = match.groups;

  return new Date(Number(year), Number(month) - 1, Number(day));
};

/** The width at which Start and End both fit on one row, per the CSS below - the same point `flex-wrap` itself wraps them.
 *  StyledFlexContainer's gap is 0 (the fields sit flush against each other), so no gap term belongs here. */
const getSideBySideBreakpointPx = (isCompact?: boolean) =>
  isCompact ? COMPACT_FIELD_WIDTH_PX * 2 : FIELD_WIDTH_PX * 2;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledFlexContainer = styled.div<{ $isCompact?: boolean }>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 0;
`;

const StyledField = styled(Field)<{ $isCompact?: boolean }>`
  flex: 0 1 auto;
  width: min(100%, ${p => (p.$isCompact ? `${COMPACT_FIELD_WIDTH_PX}px` : `${FIELD_WIDTH_PX}px`)});
`;

export const DatePickerRangeDialogComboboxGroupStory: StoryFn<IDatePickerRangeProps> = ({
  isCompact,
  ...args
}) => {
  const [isSideBySide, setIsSideBySide] = useState<boolean | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const hintId = `${useId()}--hint`;

  useEffect(() => {
    const container = containerRef.current;

    if (!container || typeof ResizeObserver !== 'function') {
      return undefined;
    }

    const breakpointPx = getSideBySideBreakpointPx(isCompact);
    const observer = new ResizeObserver(([entry]) => {
      setIsSideBySide(entry.contentRect.width >= breakpointPx);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [isCompact]);

  return (
    <DatePickerRange
      {...args}
      isCompact={isCompact}
      formatDate={formatDate}
      customParseDate={customParseDate}
    >
      <StyledWrapper>
        <Fieldset isCompact={isCompact} aria-describedby={hintId}>
          <Fieldset.Legend>Date range</Fieldset.Legend>
          <Field.Hint id={hintId}>Date format: mm/dd/yyyy</Field.Hint>
          <StyledFlexContainer $isCompact={isCompact} ref={containerRef}>
            <StyledField>
              <Field.Label hidden>Start date</Field.Label>
              <DatePickerRange.StartGroup isFlush={isSideBySide}>
                <DatePickerRange.Start>
                  <ClearableInput
                    aria-describedby={hintId}
                    ref={startInputRef}
                    isCompact={isCompact}
                    wrapperProps={{ role: undefined, 'aria-labelledby': undefined }}
                  />
                </DatePickerRange.Start>
                <DatePickerRange.Trigger
                  toggleCalendarLabel="Choose start date"
                  data-test-id="start-calendar-button"
                />
              </DatePickerRange.StartGroup>
            </StyledField>
            <StyledField>
              <Field.Label hidden>End date</Field.Label>
              <DatePickerRange.EndGroup isFlush={isSideBySide}>
                <DatePickerRange.End>
                  <ClearableInput
                    aria-describedby={hintId}
                    ref={endInputRef}
                    isCompact={isCompact}
                    wrapperProps={{ role: undefined, 'aria-labelledby': undefined }}
                  />
                </DatePickerRange.End>
                <DatePickerRange.Trigger
                  toggleCalendarLabel="Choose end date"
                  data-test-id="end-calendar-button"
                />
              </DatePickerRange.EndGroup>
            </StyledField>
          </StyledFlexContainer>
        </Fieldset>
        <DatePickerRange.Dialog
          referenceElement={isSideBySide === false ? endInputRef.current : startInputRef.current}
        >
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </StyledWrapper>
    </DatePickerRange>
  );
};
