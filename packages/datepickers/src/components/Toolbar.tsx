/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useRef, useState } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import { KEYS } from '@zendeskgarden/container-utilities';
import { StyledCalendarToolbar, StyledHeaderPaddle } from '../styled';

import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import ChevronDoubleLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-double-left-stroke.svg';
import ChevronDoubleRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-double-right-stroke.svg';

export interface IToolbarProps {
  isCompact?: boolean;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  previousYearLabel?: string;
  nextYearLabel?: string;
  toolbarLabel?: string;
  onPreviousYear: () => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onNextYear: () => void;
}

type Paddle = 'previousYear' | 'previousMonth' | 'nextMonth' | 'nextYear';

const PADDLE_ORDER: Paddle[] = ['previousYear', 'previousMonth', 'nextMonth', 'nextYear'];

/**
 * Shared month/year navigation toolbar rendered by both `DatePicker` and
 * `DatePickerRange`. Purely presentational - each consumer supplies its own
 * `onPrevious*`/`onNext*` callbacks, since the two components dispatch
 * different reducer actions to shift their (single- or dual-month) preview
 * window.
 */
export const Toolbar: React.FunctionComponent<IToolbarProps> = ({
  isCompact,
  previousMonthLabel,
  nextMonthLabel,
  previousYearLabel,
  nextYearLabel,
  toolbarLabel,
  onPreviousYear,
  onPreviousMonth,
  onNextMonth,
  onNextYear
}) => {
  const previousMonthAriaLabel = useText(
    Toolbar,
    { previousMonthLabel },
    'previousMonthLabel',
    'Previous month'
  );
  const nextMonthAriaLabel = useText(Toolbar, { nextMonthLabel }, 'nextMonthLabel', 'Next month');
  const previousYearAriaLabel = useText(
    Toolbar,
    { previousYearLabel },
    'previousYearLabel',
    'Previous year'
  );
  const nextYearAriaLabel = useText(Toolbar, { nextYearLabel }, 'nextYearLabel', 'Next year');
  const toolbarAriaLabel = useText(Toolbar, { toolbarLabel }, 'toolbarLabel', 'Calendar view');

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

  return (
    <StyledCalendarToolbar
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
        onClick={onPreviousYear}
        $gridColumn="1"
        $isCompact={isCompact}
        data-test-id="previous-year"
      >
        <ChevronDoubleLeftStrokeIcon aria-hidden="true" />
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
        onClick={onPreviousMonth}
        $gridColumn="2"
        $isCompact={isCompact}
        data-test-id="previous-month"
      >
        <ChevronLeftStrokeIcon aria-hidden="true" />
      </StyledHeaderPaddle>
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
        onClick={onNextMonth}
        $gridColumn="-3"
        $isCompact={isCompact}
        data-test-id="next-month"
      >
        <ChevronRightStrokeIcon aria-hidden="true" />
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
        onClick={onNextYear}
        $gridColumn="-2"
        $isCompact={isCompact}
        data-test-id="next-year"
      >
        <ChevronDoubleRightStrokeIcon aria-hidden="true" />
      </StyledHeaderPaddle>
    </StyledCalendarToolbar>
  );
};

Toolbar.displayName = 'Toolbar';
