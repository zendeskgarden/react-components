/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { Field, Input } from '@zendeskgarden/react-forms';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import CalendarStrokeIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';

/**
 * Demonstrates composing DatePickerRange so its calendar lives inside a
 * role="dialog" that opens and closes, mirroring DatePicker's own default
 * UX from the outside - entirely in consumer-land, since DatePickerRange
 * itself always renders its calendar inline and never closes it. The
 * open/close/focus logic here mirrors DatePicker.tsx's own implementation
 * as closely as this composition allows.
 */
export const DatePickerRangeDialogStory: StoryFn = () => {
  const [startValue, setStartValue] = useState<Date | undefined>(undefined);
  const [endValue, setEndValue] = useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const dialogId = useId();
  const widgetRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const lastFocusedInputRef = useRef<HTMLInputElement | null>(null);
  const shouldFocusGridRef = useRef(false);
  const previousActiveElementRef = useRef<Element | null>(null);

  const isInsideWidget = useCallback((target: Node) => !!widgetRef.current?.contains(target), []);

  /**
   * Move focus onto the selected date, today, or the first day cell in the
   * grid, in that priority order - matching DatePicker's focusIntoGrid.
   */
  const focusIntoGrid = useCallback(() => {
    if (!dialogRef.current) {
      return;
    }

    const target =
      dialogRef.current.querySelector<HTMLElement>('[data-test-selected="true"]') ||
      dialogRef.current.querySelector<HTMLElement>('[data-test-today="true"]') ||
      dialogRef.current.querySelector<HTMLElement>('[data-test-id="day"]');

    target?.focus();
  }, []);

  useEffect(() => {
    if (isOpen && shouldFocusGridRef.current) {
      focusIntoGrid();
      shouldFocusGridRef.current = false;
    }
  }, [isOpen, focusIntoGrid]);

  const openOrFocusGrid = useCallback(() => {
    if (isOpen) {
      focusIntoGrid();
    } else {
      setIsOpen(true);
      shouldFocusGridRef.current = true;
    }
  }, [isOpen, focusIntoGrid]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === KEYS.DOWN) {
        e.preventDefault();
        openOrFocusGrid();
      }
    },
    [openOrFocusGrid]
  );

  const handleInputMouseDown = useCallback(() => {
    previousActiveElementRef.current = document.activeElement;
  }, []);

  const handleInputFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    lastFocusedInputRef.current = e.currentTarget;

    if (!previousActiveElementRef.current) {
      previousActiveElementRef.current = (e.relatedTarget as Element) || document.body;
    }
  }, []);

  /**
   * Opens on a pointer click arriving from outside the widget, leaving
   * focus on the input rather than moving it into the grid (unlike the
   * button/Down Arrow, which both do) - matching DatePicker's
   * handleInputClick.
   */
  const handleInputClick = useCallback(() => {
    const previousActiveElement = previousActiveElementRef.current;

    previousActiveElementRef.current = null;

    if (!isOpen && (!previousActiveElement || !isInsideWidget(previousActiveElement))) {
      setIsOpen(true);
    }
  }, [isOpen, isInsideWidget]);

  const handleWidgetBlur = useCallback(
    (e: React.FocusEvent) => {
      const nextTarget = e.relatedTarget as Node | null;

      if (!nextTarget || !isInsideWidget(nextTarget)) {
        setIsOpen(false);
      }
    },
    [isInsideWidget]
  );

  const handleDialogKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === KEYS.ESCAPE) {
      setIsOpen(false);
      (lastFocusedInputRef.current ?? startInputRef.current)?.focus();
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      onBlur={handleWidgetBlur}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <DatePickerRange
        startValue={startValue}
        endValue={endValue}
        onChange={values => {
          setStartValue(values.startValue);
          setEndValue(values.endValue);
        }}
      >
        <Grid>
          <Grid.Row alignItems="end">
            <Grid.Col size="auto">
              <Field>
                <Field.Label>Start date</Field.Label>
                <DatePickerRange.Start>
                  <Input
                    ref={startInputRef}
                    onKeyDown={handleInputKeyDown}
                    onMouseDown={handleInputMouseDown}
                    onFocus={handleInputFocus}
                    onClick={handleInputClick}
                  />
                </DatePickerRange.Start>
              </Field>
            </Grid.Col>
            <Grid.Col size="auto">
              <Field>
                <Field.Label>End date</Field.Label>
                <DatePickerRange.End>
                  <Input
                    onKeyDown={handleInputKeyDown}
                    onMouseDown={handleInputMouseDown}
                    onFocus={handleInputFocus}
                    onClick={handleInputClick}
                  />
                </DatePickerRange.End>
              </Field>
            </Grid.Col>
            <Grid.Col size="auto">
              <IconButton
                isPill
                isBasic
                isNeutral
                aria-label="Choose dates"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-controls={dialogId}
                onClick={openOrFocusGrid}
                data-test-id="calendar-button"
              >
                <CalendarStrokeIcon />
              </IconButton>
            </Grid.Col>
          </Grid.Row>
        </Grid>
        {isOpen ? (
          // eslint-disable-next-line jsx-a11y/prefer-tag-over-role, jsx-a11y/no-noninteractive-element-interactions -- native <dialog> couples focus/backdrop behavior we don't want for this floating, non-modal popover (matching DatePicker's own StyledMenuWrapper), and Escape needs to close it (matching DatePicker's own StyledMenu onKeyDown)
          <div
            ref={dialogRef}
            id={dialogId}
            role="dialog"
            aria-modal="false"
            aria-label="Choose dates"
            onKeyDown={handleDialogKeyDown}
            data-test-id="range-dialog"
            style={{
              position: 'absolute',
              zIndex: 1000,
              marginTop: 4,
              background: 'white',
              border: '1px solid #d8dcde',
              borderRadius: 4,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <DatePickerRange.Calendar />
          </div>
        ) : null}
      </DatePickerRange>
    </div>
  );
};
