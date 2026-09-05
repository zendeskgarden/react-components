/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { addYears } from 'date-fns/addYears';
import { subYears } from 'date-fns/subYears';
import { useText } from '@zendeskgarden/react-theming';
import { StyledHeader, StyledHeaderPaddle, StyledHeaderLabel } from '../../../styled';
import useDatePickerContext from '../utils/useDatePickerContext';

import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import ChevronDoubleLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-double-left-stroke.svg';
import ChevronDoubleRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-double-right-stroke.svg';

interface IMonthSelectorProps {
  locale?: string;
  isCompact: boolean;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  previousYearLabel?: string;
  nextYearLabel?: string;
  headingId: string;
}

export const MonthSelector: React.FunctionComponent<IMonthSelectorProps> = ({
  locale,
  isCompact,
  previousMonthLabel,
  nextMonthLabel,
  previousYearLabel,
  nextYearLabel,
  headingId
}) => {
  const { state, dispatch } = useDatePickerContext();

  const previousMonthAriaLabel = useText(
    MonthSelector,
    { previousMonthLabel },
    'previousMonthLabel',
    'Previous month'
  );
  const nextMonthAriaLabel = useText(
    MonthSelector,
    { nextMonthLabel },
    'nextMonthLabel',
    'Next month'
  );
  const previousYearAriaLabel = useText(
    MonthSelector,
    { previousYearLabel },
    'previousYearLabel',
    'Previous year'
  );
  const nextYearAriaLabel = useText(MonthSelector, { nextYearLabel }, 'nextYearLabel', 'Next year');

  const headerLabelFormatter = useCallback<(date: Date) => string>(
    date => {
      const formatter = new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric'
      });

      return formatter.format(date);
    },
    [locale]
  );

  return (
    <StyledHeader $isCompact={isCompact}>
      <StyledHeaderPaddle
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={previousYearLabel === undefined ? 'en' : undefined}
        aria-label={previousYearAriaLabel}
        onClick={() => {
          dispatch({ type: 'FOCUS_DATE', value: subYears(state.focusedDate, 1) });
        }}
        data-test-id="previous-year"
      >
        <ChevronDoubleLeftStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderPaddle
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={previousMonthLabel === undefined ? 'en' : undefined}
        aria-label={previousMonthAriaLabel}
        onClick={() => {
          dispatch({ type: 'FOCUS_DATE', value: subMonths(state.focusedDate, 1) });
        }}
        data-test-id="previous-month"
      >
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderLabel
        id={headingId}
        aria-live="polite"
        $isCompact={isCompact}
        data-test-id="month-display"
      >
        {headerLabelFormatter(state.previewDate)}
      </StyledHeaderLabel>
      <StyledHeaderPaddle
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={nextMonthLabel === undefined ? 'en' : undefined}
        aria-label={nextMonthAriaLabel}
        onClick={() => {
          dispatch({ type: 'FOCUS_DATE', value: addMonths(state.focusedDate, 1) });
        }}
        data-test-id="next-month"
      >
        <ChevronRightStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderPaddle
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={nextYearLabel === undefined ? 'en' : undefined}
        aria-label={nextYearAriaLabel}
        onClick={() => {
          dispatch({ type: 'FOCUS_DATE', value: addYears(state.focusedDate, 1) });
        }}
        data-test-id="next-year"
      >
        <ChevronDoubleRightStrokeIcon />
      </StyledHeaderPaddle>
    </StyledHeader>
  );
};
