/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useRef, useState } from 'react';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { addYears } from 'date-fns/addYears';
import { subYears } from 'date-fns/subYears';
import { useText } from '@zendeskgarden/react-theming';
import { KEYS } from '@zendeskgarden/container-utilities';
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
  toolbarLabel?: string;
  headingId: string;
}

type Paddle = 'previousYear' | 'previousMonth' | 'nextMonth' | 'nextYear';

const PADDLE_ORDER: Paddle[] = ['previousYear', 'previousMonth', 'nextMonth', 'nextYear'];

export const MonthSelector: React.FunctionComponent<IMonthSelectorProps> = ({
  locale,
  isCompact,
  previousMonthLabel,
  nextMonthLabel,
  previousYearLabel,
  nextYearLabel,
  toolbarLabel,
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
  const toolbarAriaLabel = useText(
    MonthSelector,
    { toolbarLabel },
    'toolbarLabel',
    'Calendar view'
  );

  /**
   * Roving tabindex across the toolbar's 4 paddles, per the APG Toolbar
   * pattern: exactly one paddle is tabbable at a time, kept in sync with
   * wherever real DOM focus actually lands (click, Tab, or an arrow key
   * below), so the toolbar naturally "remembers" the last-focused paddle.
   */
  const [focusedPaddle, setFocusedPaddle] = useState<Paddle>('previousYear');
  const paddleRefs = {
    previousYear: useRef<HTMLButtonElement>(null),
    previousMonth: useRef<HTMLButtonElement>(null),
    nextMonth: useRef<HTMLButtonElement>(null),
    nextYear: useRef<HTMLButtonElement>(null)
  };

  const handleToolbarKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const currentIndex = PADDLE_ORDER.findIndex(
        paddle => paddleRefs[paddle].current === e.target
      );

      if (currentIndex === -1) {
        return;
      }

      let nextIndex: number;

      switch (e.key) {
        case KEYS.RIGHT:
          nextIndex = (currentIndex + 1) % PADDLE_ORDER.length;
          break;
        case KEYS.LEFT:
          nextIndex = (currentIndex - 1 + PADDLE_ORDER.length) % PADDLE_ORDER.length;
          break;
        case KEYS.HOME:
          nextIndex = 0;
          break;
        case KEYS.END:
          nextIndex = PADDLE_ORDER.length - 1;
          break;
        default:
          return;
      }

      e.preventDefault();
      paddleRefs[PADDLE_ORDER[nextIndex]].current?.focus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
    <StyledHeader
      $isCompact={isCompact}
      role="toolbar"
      lang={toolbarLabel === undefined ? 'en' : undefined}
      aria-label={toolbarAriaLabel}
      onKeyDown={handleToolbarKeyDown}
    >
      <StyledHeaderPaddle
        ref={paddleRefs.previousYear}
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={previousYearLabel === undefined ? 'en' : undefined}
        aria-label={previousYearAriaLabel}
        tabIndex={focusedPaddle === 'previousYear' ? 0 : -1}
        onFocus={() => setFocusedPaddle('previousYear')}
        onClick={() => {
          dispatch({ type: 'FOCUS_DATE', value: subYears(state.focusedDate, 1) });
        }}
        data-test-id="previous-year"
      >
        <ChevronDoubleLeftStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderPaddle
        ref={paddleRefs.previousMonth}
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={previousMonthLabel === undefined ? 'en' : undefined}
        aria-label={previousMonthAriaLabel}
        tabIndex={focusedPaddle === 'previousMonth' ? 0 : -1}
        onFocus={() => setFocusedPaddle('previousMonth')}
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
        ref={paddleRefs.nextMonth}
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={nextMonthLabel === undefined ? 'en' : undefined}
        aria-label={nextMonthAriaLabel}
        tabIndex={focusedPaddle === 'nextMonth' ? 0 : -1}
        onFocus={() => setFocusedPaddle('nextMonth')}
        onClick={() => {
          dispatch({ type: 'FOCUS_DATE', value: addMonths(state.focusedDate, 1) });
        }}
        data-test-id="next-month"
      >
        <ChevronRightStrokeIcon />
      </StyledHeaderPaddle>
      <StyledHeaderPaddle
        ref={paddleRefs.nextYear}
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
        lang={nextYearLabel === undefined ? 'en' : undefined}
        aria-label={nextYearAriaLabel}
        tabIndex={focusedPaddle === 'nextYear' ? 0 : -1}
        onFocus={() => setFocusedPaddle('nextYear')}
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
