/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import { DatePickerRange, IDatePickerRangeProps } from '@zendeskgarden/react-datepickers';
import { ClearableInput, Field, Fieldset } from '@zendeskgarden/react-forms';

const FIELD_WIDTH_PX = 301;
const COMPACT_FIELD_WIDTH_PX = 241;
const GAP_PX = 20;
const COMPACT_GAP_PX = 16;

/** The width at which Start and End both fit on one row, per the CSS below - the same point `flex-wrap` itself wraps them. */
const getSideBySideBreakpointPx = (isCompact?: boolean) =>
  isCompact ? COMPACT_FIELD_WIDTH_PX * 2 + COMPACT_GAP_PX : FIELD_WIDTH_PX * 2 + GAP_PX;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledFlexContainer = styled.div<{ $isCompact?: boolean }>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: ${p => (p.$isCompact ? `${COMPACT_GAP_PX}px` : `${GAP_PX}px`)};
`;

const StyledField = styled(Field)<{ $isCompact?: boolean }>`
  flex: 0 1 auto;
  width: min(100%, ${p => (p.$isCompact ? `${COMPACT_FIELD_WIDTH_PX}px` : `${FIELD_WIDTH_PX}px`)});
`;

export const DatePickerRangeDialogStory: StoryFn<IDatePickerRangeProps> = ({
  isCompact,
  ...args
}) => {
  const [isSideBySide, setIsSideBySide] = useState<boolean | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const startGroupRef = useRef<HTMLDivElement>(null);
  const endGroupRef = useRef<HTMLDivElement>(null);

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
    <DatePickerRange {...args} isCompact={isCompact}>
      <StyledWrapper>
        <Fieldset isCompact={isCompact}>
          <Fieldset.Legend hidden>Date range</Fieldset.Legend>
          <StyledFlexContainer $isCompact={isCompact} ref={containerRef}>
            <StyledField $isCompact={isCompact}>
              <Field.Label isRegular={false}>Start date</Field.Label>
              <DatePickerRange.StartGroup ref={startGroupRef}>
                <DatePickerRange.Start>
                  <ClearableInput
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
            <StyledField $isCompact={isCompact}>
              <Field.Label isRegular={false}>End date</Field.Label>
              <DatePickerRange.EndGroup ref={endGroupRef}>
                <DatePickerRange.End>
                  <ClearableInput
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
          referenceElement={
            isSideBySide === false
              ? endGroupRef.current || endInputRef.current
              : startGroupRef.current || startInputRef.current
          }
        >
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </StyledWrapper>
    </DatePickerRange>
  );
};
