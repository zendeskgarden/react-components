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
import { IRangeFieldArgs } from './types';

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

export const DatePickerRangeDialogStory: StoryFn<IDatePickerRangeProps & IRangeFieldArgs> = ({
  isCompact,
  isStartDisabled,
  isStartReadOnly,
  isEndDisabled,
  isEndReadOnly,
  ...args
}) => {
  const [isSideBySide, setIsSideBySide] = useState<boolean | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
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
              <DatePickerRange.StartGroup>
                <DatePickerRange.Start>
                  <ClearableInput
                    isCompact={isCompact}
                    disabled={isStartDisabled}
                    readOnly={isStartReadOnly}
                  />
                </DatePickerRange.Start>
                <DatePickerRange.Trigger toggleCalendarLabel="Choose start date" />
              </DatePickerRange.StartGroup>
            </StyledField>
            <StyledField $isCompact={isCompact}>
              <Field.Label isRegular={false}>End date</Field.Label>
              <DatePickerRange.EndGroup ref={endGroupRef}>
                <DatePickerRange.End>
                  <ClearableInput
                    isCompact={isCompact}
                    disabled={isEndDisabled}
                    readOnly={isEndReadOnly}
                  />
                </DatePickerRange.End>
                <DatePickerRange.Trigger toggleCalendarLabel="Choose end date" />
              </DatePickerRange.EndGroup>
            </StyledField>
          </StyledFlexContainer>
        </Fieldset>
        <DatePickerRange.Dialog
          referenceElement={isSideBySide === false ? endGroupRef.current : undefined}
        >
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </StyledWrapper>
    </DatePickerRange>
  );
};
