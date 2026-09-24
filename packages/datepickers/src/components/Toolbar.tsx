/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME, useText } from '@zendeskgarden/react-theming';
import { KEYS } from '@zendeskgarden/container-utilities';
import { subMonths } from 'date-fns/subMonths';
import { addMonths } from 'date-fns/addMonths';
import { subYears } from 'date-fns/subYears';
import { addYears } from 'date-fns/addYears';
import { StyledCalendarToolbar, StyledHeaderPaddle } from '../styled';
import { IToolbarProps, ToolbarDateLabel } from '../types';
import { formatMonthHeading } from '../utils/calendar-utils';

import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import ChevronDoubleLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-double-left-stroke.svg';
import ChevronDoubleRightStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-double-right-stroke.svg';

type Paddle = 'previousYear' | 'previousMonth' | 'nextMonth' | 'nextYear';

/**
 * A plain string override is used as-is (no date appended) - the consumer owns the whole string.
 * A function override is called with the target date and its formatted "month year", and its
 * return value is used as-is. `undefined` falls back to Garden's default text with the formatted
 * date appended.
 */
function resolveDateAriaLabel(
  label: ToolbarDateLabel | undefined,
  defaultText: string,
  date: Date,
  formattedMonthYear: string
): string {
  if (typeof label === 'function') {
    return label(date, formattedMonthYear);
  }

  if (label === undefined) {
    return `${defaultText}: ${formattedMonthYear}`;
  }

  return label;
}

/** Shared month/year navigation toolbar rendered by both `DatePicker` and `DatePickerRange`; purely presentational. */
export const Toolbar: React.FunctionComponent<IToolbarProps> = ({
  previewDate,
  locale,
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
  const previousMonthText = useText(
    Toolbar,
    { previousMonthLabel },
    'previousMonthLabel',
    'Previous month'
  );
  const nextMonthText = useText(Toolbar, { nextMonthLabel }, 'nextMonthLabel', 'Next month');
  const previousYearText = useText(
    Toolbar,
    { previousYearLabel },
    'previousYearLabel',
    'Previous year'
  );
  const nextYearText = useText(Toolbar, { nextYearLabel }, 'nextYearLabel', 'Next year');
  const toolbarAriaLabel = useText(Toolbar, { toolbarLabel }, 'toolbarLabel', 'Calendar view');

  const previousMonthDate = subMonths(previewDate, 1);
  const nextMonthDate = addMonths(previewDate, 1);
  const previousYearDate = subYears(previewDate, 1);
  const nextYearDate = addYears(previewDate, 1);

  const previousMonthAriaLabel = resolveDateAriaLabel(
    previousMonthLabel,
    previousMonthText!,
    previousMonthDate,
    formatMonthHeading(previousMonthDate, locale)
  );
  const nextMonthAriaLabel = resolveDateAriaLabel(
    nextMonthLabel,
    nextMonthText!,
    nextMonthDate,
    formatMonthHeading(nextMonthDate, locale)
  );
  const previousYearAriaLabel = resolveDateAriaLabel(
    previousYearLabel,
    previousYearText!,
    previousYearDate,
    formatMonthHeading(previousYearDate, locale)
  );
  const nextYearAriaLabel = resolveDateAriaLabel(
    nextYearLabel,
    nextYearText!,
    nextYearDate,
    formatMonthHeading(nextYearDate, locale)
  );

  const { rtl } = useContext(ThemeContext) || DEFAULT_THEME;

  const [focusedPaddle, setFocusedPaddle] = useState<Paddle>('previousYear');
  const toolbarRef = useRef<HTMLDivElement>(null);

  /** Queries the DOM fresh each keypress rather than caching a ref array, so paddle order can't drift out of sync with JSX/DOM order. */
  const handleToolbarKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const paddles = Array.from(
        toolbarRef.current?.querySelectorAll<HTMLButtonElement>('button') ?? []
      );
      const currentIndex = paddles.indexOf(e.target as HTMLButtonElement);

      if (currentIndex === -1) {
        return;
      }

      switch (e.key) {
        case KEYS.RIGHT: {
          const nextIndex = rtl
            ? (currentIndex - 1 + paddles.length) % paddles.length
            : (currentIndex + 1) % paddles.length;

          paddles[nextIndex]?.focus();
          break;
        }
        case KEYS.LEFT: {
          const nextIndex = rtl
            ? (currentIndex + 1) % paddles.length
            : (currentIndex - 1 + paddles.length) % paddles.length;

          paddles[nextIndex]?.focus();
          break;
        }
        case KEYS.HOME:
          paddles[0]?.focus();
          break;
        case KEYS.END:
          paddles[paddles.length - 1]?.focus();
          break;
        case KEYS.UP:
        case KEYS.DOWN:
          break;
        default:
          break;
      }
    },
    [rtl]
  );

  return (
    <StyledCalendarToolbar
      ref={toolbarRef}
      role="toolbar"
      aria-label={toolbarAriaLabel}
      onKeyDown={handleToolbarKeyDown}
    >
      <StyledHeaderPaddle
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
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
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
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
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
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
        type="button"
        isPill
        isBasic
        isNeutral
        focusInset={!isCompact}
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
