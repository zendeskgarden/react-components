/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';

const FIELD_WIDTH_PX = 280;
const COMPACT_FIELD_WIDTH_PX = 224;
const GAP_PX = 20;
const COMPACT_GAP_PX = 16;

/** The width at which Start and End both fit on one row, per the CSS below - the same point `flex-wrap` itself wraps them. */
const getSideBySideBreakpointPx = (isCompact?: boolean) =>
  isCompact ? COMPACT_FIELD_WIDTH_PX * 2 + COMPACT_GAP_PX : FIELD_WIDTH_PX * 2 + GAP_PX;

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledFlexContainer = styled.div<{ $isCompact?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => (p.$isCompact ? `${COMPACT_GAP_PX}px` : `${GAP_PX}px`)};
`;

const StyledField = styled(Field)<{ $isCompact?: boolean }>`
  flex: 0 1 auto;
  width: min(100%, ${p => (p.$isCompact ? `${COMPACT_FIELD_WIDTH_PX}px` : `${FIELD_WIDTH_PX}px`)});
`;

export const DatePickerRangeDialogStory: StoryFn = ({ isCompact, ...args }) => {
  const [startValue, setStartValue] = useState<Date | undefined>(undefined);
  const [endValue, setEndValue] = useState<Date | undefined>(undefined);
  const [isSideBySide, setIsSideBySide] = useState<boolean | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

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
      startValue={startValue}
      endValue={endValue}
      onChange={values => {
        setStartValue(values.startValue);
        setEndValue(values.endValue);
      }}
      {...args}
    >
      <StyledWrapper>
        <StyledFlexContainer $isCompact={isCompact} ref={containerRef}>
          <StyledField>
            <Field.Label>Start date</Field.Label>
            <DatePickerRange.StartGroup>
              <DatePickerRange.Start>
                <ClearableInput
                  ref={startInputRef}
                  wrapperProps={{ role: null, 'aria-labelledby': null } as any}
                />
              </DatePickerRange.Start>
              <DatePickerRange.Trigger
                toggleCalendarLabel="Choose start date"
                data-test-id="start-calendar-button"
              />
            </DatePickerRange.StartGroup>
          </StyledField>
          <StyledField>
            <Field.Label>End date</Field.Label>
            <DatePickerRange.EndGroup>
              <DatePickerRange.End>
                <ClearableInput
                  ref={endInputRef}
                  wrapperProps={{ role: null, 'aria-labelledby': null } as any}
                />
              </DatePickerRange.End>
              <DatePickerRange.Trigger
                toggleCalendarLabel="Choose end date"
                data-test-id="end-calendar-button"
              />
            </DatePickerRange.EndGroup>
          </StyledField>
        </StyledFlexContainer>
        <DatePickerRange.Dialog
          referenceElement={isSideBySide === false ? endInputRef.current : startInputRef.current}
        >
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </StyledWrapper>
    </DatePickerRange>
  );
};
