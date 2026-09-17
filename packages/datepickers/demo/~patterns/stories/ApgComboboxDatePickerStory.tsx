/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { addDays } from 'date-fns/addDays';
import { addMonths } from 'date-fns/addMonths';
import { addYears } from 'date-fns/addYears';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { endOfMonth } from 'date-fns/endOfMonth';
import { endOfWeek } from 'date-fns/endOfWeek';
import { format } from 'date-fns/format';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { startOfMonth } from 'date-fns/startOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { subMonths } from 'date-fns/subMonths';
import { subYears } from 'date-fns/subYears';

const WEEKDAYS = [
  { abbr: 'Su', full: 'Sunday' },
  { abbr: 'Mo', full: 'Monday' },
  { abbr: 'Tu', full: 'Tuesday' },
  { abbr: 'We', full: 'Wednesday' },
  { abbr: 'Th', full: 'Thursday' },
  { abbr: 'Fr', full: 'Friday' },
  { abbr: 'Sa', full: 'Saturday' }
];

const VISUALLY_HIDDEN_STYLE: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap'
};

const dateKey = (date: Date) => format(date, 'yyyy-MM-dd');

const getWeeks = (monthDate: Date) => {
  const start = startOfWeek(startOfMonth(monthDate));
  const end = endOfWeek(endOfMonth(monthDate));
  const days = eachDayOfInterval({ start, end });
  const weeks: Date[][] = [];

  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7));
  }

  return weeks;
};

/**
 * Direct reimplementation of the markup and keyboard behavior from the APG
 * "Date Picker Combobox" example:
 * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/
 *
 * Kept separate from our production DatePicker (which nests a <button> inside
 * each day <td>) so the two approaches can be A/B tested in a screen reader.
 * Here, the <td role="gridcell"> itself carries the roving tabindex and no
 * button is nested inside it.
 */
export const ApgComboboxDatePickerStory: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [focusedDate, setFocusedDate] = useState(() => new Date());
  const [displayMonth, setDisplayMonth] = useState(() => startOfMonth(new Date()));
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const cellRefs = useRef(new Map<string, HTMLTableCellElement>());

  const weeks = useMemo(() => getWeeks(displayMonth), [displayMonth]);

  const moveFocusTo = (date: Date) => {
    setFocusedDate(date);

    if (!isSameMonth(date, displayMonth)) {
      setDisplayMonth(startOfMonth(date));
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    cellRefs.current.get(dateKey(focusedDate))?.focus();
  }, [isOpen, focusedDate, displayMonth]);

  const openDialog = () => {
    const initial = selectedDate ?? new Date();

    setDisplayMonth(startOfMonth(initial));
    setFocusedDate(initial);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const commitDate = (date: Date) => {
    setSelectedDate(date);
    setInputValue(format(date, 'MM/dd/yyyy'));
    closeDialog();
  };

  const handleCellKeyDown = (event: React.KeyboardEvent<HTMLTableCellElement>, date: Date) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        moveFocusTo(addDays(date, 1));
        break;
      case 'ArrowLeft':
        event.preventDefault();
        moveFocusTo(addDays(date, -1));
        break;
      case 'ArrowDown':
        event.preventDefault();
        moveFocusTo(addDays(date, 7));
        break;
      case 'ArrowUp':
        event.preventDefault();
        moveFocusTo(addDays(date, -7));
        break;
      case 'Home':
        event.preventDefault();
        moveFocusTo(startOfWeek(date));
        break;
      case 'End':
        event.preventDefault();
        moveFocusTo(endOfWeek(date));
        break;
      case 'PageUp':
        event.preventDefault();
        moveFocusTo(event.shiftKey ? subYears(date, 1) : subMonths(date, 1));
        break;
      case 'PageDown':
        event.preventDefault();
        moveFocusTo(event.shiftKey ? addYears(date, 1) : addMonths(date, 1));
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        commitDate(date);
        break;
      case 'Escape':
        event.preventDefault();
        closeDialog();
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ maxWidth: 320, position: 'relative' }}>
      <label htmlFor="apg-datepicker-input">Event date</label>
      <span id="apg-datepicker-description" style={{ display: 'block', fontSize: 12 }}>
        (date format: mm/dd/yyyy)
      </span>
      <div style={{ display: 'flex', gap: 4 }}>
        <input
          ref={inputRef}
          id="apg-datepicker-input"
          type="text"
          role="combobox"
          aria-autocomplete="none"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls="apg-datepicker-dialog"
          aria-describedby="apg-datepicker-description"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="button" tabIndex={-1} aria-label="Choose Date" onClick={openDialog}>
          📅
        </button>
      </div>
      {isOpen ? (
        // eslint-disable-next-line jsx-a11y/prefer-tag-over-role, jsx-a11y/no-noninteractive-element-interactions -- mirrors the APG reference markup (div with role="dialog", Escape closes it)
        <div
          id="apg-datepicker-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Choose Date"
          style={{
            position: 'absolute',
            zIndex: 1,
            border: '1px solid #ccc',
            background: 'white',
            padding: 8
          }}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              event.preventDefault();
              closeDialog();
            }
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              type="button"
              aria-label="Previous Year"
              onClick={() => moveFocusTo(subYears(focusedDate, 1))}
            >
              «
            </button>
            <button
              type="button"
              aria-label="Previous Month"
              onClick={() => moveFocusTo(subMonths(focusedDate, 1))}
            >
              ‹
            </button>
            <h2 id="apg-datepicker-heading" aria-live="polite" style={{ margin: 0 }}>
              {format(displayMonth, 'MMMM yyyy')}
            </h2>
            <button
              type="button"
              aria-label="Next Month"
              onClick={() => moveFocusTo(addMonths(focusedDate, 1))}
            >
              ›
            </button>
            <button
              type="button"
              aria-label="Next Year"
              onClick={() => moveFocusTo(addYears(focusedDate, 1))}
            >
              »
            </button>
          </div>
          <div aria-live="polite" style={VISUALLY_HIDDEN_STYLE}>
            Cursor keys can navigate dates
          </div>
          <table role="grid" aria-labelledby="apg-datepicker-heading">
            <thead>
              <tr>
                {WEEKDAYS.map(({ abbr, full }) => (
                  <th key={full} scope="col" abbr={full}>
                    {abbr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map(week => (
                <tr key={dateKey(week[0])}>
                  {week.map(date => {
                    const isCurrentMonth = isSameMonth(date, displayMonth);
                    const isSelected = !!selectedDate && isSameDay(date, selectedDate);
                    const isFocusable = isSameDay(date, focusedDate);
                    const isToday = isSameDay(date, new Date());

                    return (
                      <td
                        key={dateKey(date)}
                        ref={node => {
                          if (node) {
                            cellRefs.current.set(dateKey(date), node);
                          } else {
                            cellRefs.current.delete(dateKey(date));
                          }
                        }}
                        role="gridcell"
                        tabIndex={isFocusable ? 0 : -1}
                        aria-roledescription="selectable cell"
                        aria-selected={isSelected}
                        aria-current={isToday ? 'date' : undefined}
                        onKeyDown={
                          isCurrentMonth ? event => handleCellKeyDown(event, date) : undefined
                        }
                        onClick={isCurrentMonth ? () => commitDate(date) : undefined}
                      >
                        {isCurrentMonth ? format(date, 'd') : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button type="button" onClick={closeDialog}>
              Cancel
            </button>
            <button type="button" onClick={() => commitDate(focusedDate)}>
              OK
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
