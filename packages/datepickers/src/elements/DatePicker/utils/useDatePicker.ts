/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLProps, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { addYears } from 'date-fns/addYears';
import { subYears } from 'date-fns/subYears';
import { startOfWeek } from 'date-fns/startOfWeek';
import { endOfWeek } from 'date-fns/endOfWeek';
import { isToday } from 'date-fns/isToday';
import { isSameDay } from 'date-fns/isSameDay';
import { isValid } from 'date-fns/isValid';
import { KEYS, composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import {
  ElementProps,
  IUseDatePickerProps,
  IUseDatePickerReturnValue,
  IGetDayPropsOptions
} from '../../../types';
import { getStartOfWeek, isDateWithinRange } from '../../../utils/calendar-utils';
import {
  composeActionButtonProps,
  focusIntoDialog,
  resolveWidgetBlur,
  shouldOpenOnFieldClick
} from '../../../utils/dialog-trigger-utils';
import {
  datepickerReducer,
  formatInputValue,
  parseInputValue,
  resolveSettledValue,
  retrieveInitialState
} from './date-picker-reducer';

/**
 * Headless, self-contained state and prop-getters for a single-date picker:
 * a text input paired with a non-modal calendar dialog, following the
 * `@zendeskgarden/container-*` prop-getter convention (see `useCombobox`).
 */
export function useDatePicker({
  idPrefix,
  value,
  minValue,
  maxValue,
  locale = 'en-US',
  weekStartsOn,
  rtl,
  formatDate,
  customParseDate,
  required,
  onChange,
  onValueSettled,
  inputRef
}: IUseDatePickerProps): IUseDatePickerReturnValue {
  const prefix = useId(idPrefix);
  const menuId = `${prefix}--menu`;
  const buttonId = `${prefix}--button`;
  const headingId = `${prefix}--heading`;

  const groupRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLTableElement>(null);
  const shouldFocusDialogRef = useRef(false);
  const previousActiveElementRef = useRef<Element | null>(null);
  const pendingGridFocusRef = useRef(false);

  const [state, dispatch] = useReducer(
    datepickerReducer,
    retrieveInitialState({ value, formatDate, locale } as any)
  );

  const preferredWeekStartsOn = weekStartsOn ?? getStartOfWeek(locale);

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_VALUE_CHANGE', value, locale, formatDate, customParseDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_LOCALE_CHANGE', value, locale, formatDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const settleValue = useCallback(
    (inputValue: string = state.inputValue) => {
      const settled = resolveSettledValue({
        inputValue,
        required,
        minValue,
        maxValue,
        customParseDate
      });

      dispatch({ type: 'VALUE_SETTLED', valid: settled.valid });
      onValueSettled?.(settled);
    },
    [state.inputValue, required, minValue, maxValue, customParseDate, onValueSettled]
  );

  const openOrFocusDialog = useCallback(() => {
    if (state.isOpen) {
      focusIntoDialog(dialogRef.current);
    } else {
      dispatch({ type: 'OPEN', value });
      shouldFocusDialogRef.current = true;
    }
  }, [state.isOpen, value]);

  /**
   * When a trigger opens the dialog, wait for it to render before moving
   * focus into it.
   */
  useEffect(() => {
    if (state.isOpen && shouldFocusDialogRef.current) {
      focusIntoDialog(dialogRef.current);
      shouldFocusDialogRef.current = false;
    }
  }, [state.isOpen]);

  /**
   * Only follow a `focusedDate` change with real DOM focus when it was
   * triggered by keyboard navigation from within the grid itself (flagged
   * by `getDayProps`' `onKeyDown` below) - month/year paddle clicks also
   * update `focusedDate` (so the roving tabindex stays correct), but
   * deliberately leave real focus on the paddle button that was clicked.
   */
  useEffect(() => {
    if (!pendingGridFocusRef.current) {
      return;
    }

    pendingGridFocusRef.current = false;
    gridRef.current?.querySelector<HTMLButtonElement>('[tabindex="0"]')?.focus();
  }, [state.focusedDate]);

  const handleWidgetBlur = useCallback(
    (e: React.FocusEvent) => {
      const { shouldSettle, shouldClose } = resolveWidgetBlur({
        target: e.target,
        relatedTarget: e.relatedTarget as Node | null,
        fieldRefs: [inputRef],
        widgetRefs: [groupRef, dialogRef]
      });

      if (shouldSettle) {
        settleValue();
      }

      if (shouldClose && state.isOpen) {
        dispatch({ type: 'CLOSE' });
      }
    },
    [inputRef, settleValue, state.isOpen]
  );

  const getGroupProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => {
      const { onBlur, ...other } = props;

      return {
        ref: groupRef,
        onBlur: composeEventHandlers(onBlur, handleWidgetBlur),
        ...other
      };
    },
    [handleWidgetBlur]
  );

  const getTriggerProps = useCallback(
    (props: ElementProps<HTMLButtonElement> = {}) => {
      const { onClick, ...other } = props;

      return {
        'aria-haspopup': 'dialog' as const,
        'aria-expanded': state.isOpen,
        'aria-controls': menuId,
        onClick: composeEventHandlers(onClick, openOrFocusDialog),
        ...other
      };
    },
    [state.isOpen, menuId, openOrFocusDialog]
  );

  const getDialogProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => {
      const { onBlur, onKeyDown, ...other } = props;

      const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === KEYS.ESCAPE) {
          settleValue();
          dispatch({ type: 'CLOSE' });
          inputRef.current?.focus();
        }
      };

      return {
        ref: dialogRef,
        id: menuId,
        role: 'dialog' as const,
        'aria-modal': 'false' as const,
        'aria-labelledby': buttonId,
        onBlur: composeEventHandlers(onBlur, handleWidgetBlur),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
        ...other
      };
    },
    [menuId, buttonId, handleWidgetBlur, settleValue, inputRef]
  );

  const getInputProps = useCallback(
    (props: HTMLProps<HTMLInputElement> = {}) => {
      const {
        onChange: onInputChange,
        onKeyDown,
        onMouseDown,
        onFocus,
        onClick,
        autoComplete = 'off',
        ...other
      } = props;

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const currentDate = parseInputValue({ inputValue, customParseDate });

        if (
          onChange &&
          currentDate &&
          isValid(currentDate) &&
          isDateWithinRange(currentDate, minValue, maxValue) &&
          !(value && isSameDay(value, currentDate))
        ) {
          onChange(currentDate);
        } else if (inputValue === '' && state.inputValue !== '') {
          settleValue(inputValue);
        }

        dispatch({ type: 'MANUALLY_UPDATE_INPUT', value: inputValue });
      };

      const handleMouseDown = () => {
        previousActiveElementRef.current = document.activeElement;
      };

      const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!previousActiveElementRef.current) {
          previousActiveElementRef.current = (e.relatedTarget as Element) || document.body;
        }
      };

      const handleClick = () => {
        const previousActiveElement = previousActiveElementRef.current;

        previousActiveElementRef.current = null;

        if (
          shouldOpenOnFieldClick({
            isOpen: state.isOpen,
            previousActiveElement,
            widgetRefs: [groupRef, dialogRef]
          })
        ) {
          dispatch({ type: 'OPEN', value });
        }
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.DOWN) {
          openOrFocusDialog();
        } else if (e.key === KEYS.ESCAPE && state.isOpen) {
          settleValue();
          dispatch({ type: 'CLOSE' });
        }
      };

      return {
        role: 'combobox' as const,
        'aria-haspopup': 'dialog' as const,
        'aria-autocomplete': 'none' as const,
        'aria-expanded': state.isOpen,
        'aria-controls': menuId,
        autoComplete,
        value: state.inputValue,
        onChange: composeEventHandlers(onInputChange, handleChange),
        onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
        onFocus: composeEventHandlers(onFocus, handleFocus),
        onClick: composeEventHandlers(onClick, handleClick),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
        ...other
      };
    },
    [
      state.isOpen,
      state.inputValue,
      menuId,
      onChange,
      minValue,
      maxValue,
      value,
      customParseDate,
      settleValue,
      openOrFocusDialog
    ]
  );

  const getReferenceElement = useCallback(() => inputRef.current, [inputRef]);

  const getCalendarProps = useCallback((props: ElementProps<HTMLDivElement> = {}) => {
    const { onMouseDown, ...other } = props;
    const handleMouseDown = (e: React.MouseEvent) => {
      /** Stop focus from escaping input */
      e.preventDefault();
    };

    return {
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      ...other
    };
  }, []);

  const getGridProps = useCallback(
    (props: ElementProps<HTMLTableElement> = {}) => ({
      ref: gridRef,
      role: 'grid' as const,
      'aria-labelledby': headingId,
      ...props
    }),
    [headingId]
  );

  const getHeadingProps = useCallback(
    (props: ElementProps<HTMLHeadingElement> = {}) => ({
      id: headingId,
      'aria-live': 'polite' as const,
      ...props
    }),
    [headingId]
  );

  const getDayProps = useCallback(
    ({ date, onClick, onKeyDown, ...other }: IGetDayPropsOptions) => {
      const isDisabled = !isDateWithinRange(date, minValue, maxValue);
      const isSelected = value !== undefined && !state.isValueInvalid && isSameDay(date, value);
      const isCurrentDate = isToday(date);

      const handleClick = () => {
        if (isDisabled) {
          return;
        }

        if (!(value && isSameDay(value, date))) {
          onChange?.(date);
          onValueSettled?.({
            date,
            inputValue: formatInputValue({ date, locale, formatDate }),
            valid: true
          });
        }

        dispatch({ type: 'SELECT_DATE', value: date, locale, formatDate });
        inputRef.current?.focus();
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        let targetDate: Date;

        switch (e.key) {
          case KEYS.RIGHT:
            targetDate = rtl ? subDays(date, 1) : addDays(date, 1);
            break;
          case KEYS.LEFT:
            targetDate = rtl ? addDays(date, 1) : subDays(date, 1);
            break;
          case KEYS.DOWN:
            targetDate = addDays(date, 7);
            break;
          case KEYS.UP:
            targetDate = subDays(date, 7);
            break;
          case KEYS.HOME:
            targetDate = startOfWeek(date, { weekStartsOn: preferredWeekStartsOn });
            break;
          case KEYS.END:
            targetDate = endOfWeek(date, { weekStartsOn: preferredWeekStartsOn });
            break;
          case KEYS.PAGE_DOWN:
            targetDate = e.shiftKey ? addYears(date, 1) : addMonths(date, 1);
            break;
          case KEYS.PAGE_UP:
            targetDate = e.shiftKey ? subYears(date, 1) : subMonths(date, 1);
            break;
          default:
            return;
        }

        e.preventDefault();
        e.stopPropagation();
        pendingGridFocusRef.current = true;
        dispatch({ type: 'FOCUS_DATE', value: targetDate });
      };

      return {
        tabIndex: isSameDay(date, state.focusedDate) ? 0 : -1,
        'aria-disabled': isDisabled || undefined,
        'aria-current': isCurrentDate ? ('date' as const) : undefined,
        onClick: composeEventHandlers(onClick, handleClick),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
        'data-test-id': 'day',
        'data-test-selected': isSelected,
        'data-test-disabled': isDisabled,
        'data-test-today': isCurrentDate,
        ...other
      };
    },
    [
      minValue,
      maxValue,
      value,
      onChange,
      onValueSettled,
      locale,
      formatDate,
      inputRef,
      preferredWeekStartsOn,
      rtl,
      state.focusedDate,
      state.isValueInvalid
    ]
  );

  const focusPreviousMonth = useCallback(() => {
    dispatch({ type: 'FOCUS_DATE', value: subMonths(state.focusedDate, 1) });
  }, [state.focusedDate]);

  const focusNextMonth = useCallback(() => {
    dispatch({ type: 'FOCUS_DATE', value: addMonths(state.focusedDate, 1) });
  }, [state.focusedDate]);

  const focusPreviousYear = useCallback(() => {
    dispatch({ type: 'FOCUS_DATE', value: subYears(state.focusedDate, 1) });
  }, [state.focusedDate]);

  const focusNextYear = useCallback(() => {
    dispatch({ type: 'FOCUS_DATE', value: addYears(state.focusedDate, 1) });
  }, [state.focusedDate]);

  const getPreviousMonthButtonProps = useCallback(
    (props?: ElementProps<HTMLButtonElement>) =>
      composeActionButtonProps(focusPreviousMonth, props),
    [focusPreviousMonth]
  );

  const getNextMonthButtonProps = useCallback(
    (props?: ElementProps<HTMLButtonElement>) => composeActionButtonProps(focusNextMonth, props),
    [focusNextMonth]
  );

  const getPreviousYearButtonProps = useCallback(
    (props?: ElementProps<HTMLButtonElement>) => composeActionButtonProps(focusPreviousYear, props),
    [focusPreviousYear]
  );

  const getNextYearButtonProps = useCallback(
    (props?: ElementProps<HTMLButtonElement>) => composeActionButtonProps(focusNextYear, props),
    [focusNextYear]
  );

  return useMemo(
    () => ({
      isOpen: state.isOpen,
      previewDate: state.previewDate,
      inputValue: state.inputValue,
      isValueInvalid: state.isValueInvalid,
      menuId,
      buttonId,
      headingId,
      dialogRef,
      getGroupProps,
      getInputProps,
      getTriggerProps,
      getDialogProps,
      getReferenceElement,
      getCalendarProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
      getPreviousMonthButtonProps,
      getNextMonthButtonProps,
      getPreviousYearButtonProps,
      getNextYearButtonProps,
      focusPreviousMonth,
      focusNextMonth,
      focusPreviousYear,
      focusNextYear,
      settleValue
    }),
    [
      state.isOpen,
      state.previewDate,
      state.inputValue,
      state.isValueInvalid,
      menuId,
      buttonId,
      headingId,
      getGroupProps,
      getInputProps,
      getTriggerProps,
      getDialogProps,
      getReferenceElement,
      getCalendarProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
      getPreviousMonthButtonProps,
      getNextMonthButtonProps,
      getPreviousYearButtonProps,
      getNextYearButtonProps,
      focusPreviousMonth,
      focusNextMonth,
      focusPreviousYear,
      focusNextYear,
      settleValue
    ]
  );
}
