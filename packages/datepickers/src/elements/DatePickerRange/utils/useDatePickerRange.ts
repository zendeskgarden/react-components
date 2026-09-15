/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { RefObject, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
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
import { isBefore } from 'date-fns/isBefore';
import { isAfter } from 'date-fns/isAfter';
import { isValid } from 'date-fns/isValid';
import { KEYS, composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import {
  ElementProps,
  IFieldInputProps,
  IGetRangeDayPropsOptions,
  IUseDatePickerRangeProps,
  IUseDatePickerRangeReturnValue
} from '../../../types';
import { getStartOfWeek, isDateWithinRange } from '../../../utils/calendar-utils';
import {
  composeActionButtonProps,
  focusIntoDialog,
  resolveWidgetBlur,
  shouldOpenOnFieldClick
} from '../../../utils/dialog-trigger-utils';
import {
  datepickerRangeReducer,
  formatValue,
  parseInputValue,
  resolveSettledValue,
  retrieveInitialState
} from './date-picker-range-reducer';

/**
 * Headless, self-contained state and prop-getters for a date-range picker:
 * paired Start/End text inputs plus an always-inline, two-month calendar
 * (with an opt-in dialog mode), following the `@zendeskgarden/container-*`
 * prop-getter convention (see `useCombobox`).
 */
export function useDatePickerRange({
  idPrefix,
  startValue,
  endValue,
  minValue,
  maxValue,
  locale = 'en-US',
  weekStartsOn,
  rtl,
  formatDate,
  customParseDate,
  onChange,
  onValueSettled,
  startInputRef,
  endInputRef
}: IUseDatePickerRangeProps): IUseDatePickerRangeReturnValue {
  const prefix = useId(idPrefix);
  const calendarId = `${prefix}--calendar`;
  const dialogId = `${prefix}--dialog`;
  const headingId0 = `${prefix}--heading-0`;
  const headingId1 = `${prefix}--heading-1`;

  const preferredWeekStartsOn = weekStartsOn ?? getStartOfWeek(locale);

  const [state, dispatch] = useReducer(
    datepickerRangeReducer,
    retrieveInitialState({ startValue, endValue, locale, formatDate } as any)
  );

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_START_VALUE_CHANGE', value: startValue, locale, formatDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startValue]);

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_END_VALUE_CHANGE', value: endValue, locale, formatDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endValue]);

  /**
   * Cross-grid arrow-key focus-follow, matching `useDatePicker`'s own
   * single-grid version - one ref spanning both months, since arrow-key
   * navigation can cross from one month's grid into the other's.
   */
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const pendingGridFocusRef = useRef(false);

  useEffect(() => {
    if (!pendingGridFocusRef.current) {
      return;
    }

    pendingGridFocusRef.current = false;
    calendarWrapperRef.current
      ?.querySelector<HTMLButtonElement>('[data-test-id="day"][tabindex="0"]')
      ?.focus();
  }, [state.focusedDate]);

  // --- Opt-in dialog mode ---

  /**
   * Every element focus must leave for the widget to count as "left", for
   * the dialog's blur-to-close and click-to-open detection - Start's/End's
   * own wrapper divs, every rendered `Trigger` button, and the dialog
   * itself. No single combining wrapper is needed: React's `onBlur` already
   * bubbles within each of these independently, so attaching the same check
   * to each is equivalent to attaching it once to a shared ancestor. A
   * consumer may compose more than one `Trigger` at once (e.g. one per
   * field), so `getTriggerProps` collects every ref it's given into this
   * `Set` - adding the same (stable, per-`Trigger`-instance) ref again on a
   * later render is a no-op, and a ref left behind by an unmounted
   * `Trigger` is harmless, since React clears its `current` to `null`.
   */
  const startWrapperRef = useRef<HTMLDivElement>(null);
  const endWrapperRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefsRef = useRef<Set<RefObject<HTMLButtonElement | null>>>(new Set());

  const getWidgetRefs = useCallback(
    () => [
      startWrapperRef,
      endWrapperRef,
      startInputRef,
      endInputRef,
      dialogRef,
      ...triggerRefsRef.current
    ],
    [startInputRef, endInputRef]
  );

  const [isOpen, setIsOpen] = useState(false);
  const shouldFocusDialogRef = useRef(false);
  const previousActiveElementRef = useRef<Element | null>(null);
  const lastActiveFieldRef = useRef<HTMLElement | null>(null);

  const openOrFocusDialog = useCallback(() => {
    if (isOpen) {
      focusIntoDialog(dialogRef.current);
    } else {
      setIsOpen(true);
      shouldFocusDialogRef.current = true;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && shouldFocusDialogRef.current) {
      focusIntoDialog(dialogRef.current);
      shouldFocusDialogRef.current = false;
    }
  }, [isOpen]);

  const handleWidgetBlur = useCallback(
    (e: React.FocusEvent) => {
      const { shouldClose } = resolveWidgetBlur({
        target: e.target,
        relatedTarget: e.relatedTarget as Node | null,
        fieldRefs: [startInputRef, endInputRef],
        widgetRefs: getWidgetRefs()
      });

      if (shouldClose && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen, startInputRef, endInputRef, getWidgetRefs]
  );

  const getTriggerProps = useCallback(
    (props: ElementProps<HTMLButtonElement> = {}) => {
      const { onClick, onBlur, ref, ...other } = props;

      if (ref && typeof ref === 'object' && 'current' in ref) {
        triggerRefsRef.current.add(ref);
      }

      return {
        ref,
        'aria-haspopup': 'dialog' as const,
        'aria-expanded': isOpen,
        'aria-controls': dialogId,
        onClick: composeEventHandlers(onClick, openOrFocusDialog),
        onBlur: composeEventHandlers(onBlur, handleWidgetBlur),
        ...other
      };
    },
    [isOpen, dialogId, openOrFocusDialog, handleWidgetBlur]
  );

  const getDialogProps = useCallback(
    (props: { 'aria-label': string } & ElementProps<HTMLDivElement>) => {
      const { onBlur, onKeyDown, ...other } = props;

      const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === KEYS.ESCAPE) {
          setIsOpen(false);
          (lastActiveFieldRef.current ?? startInputRef.current)?.focus();
        }
      };

      return {
        ref: dialogRef,
        id: dialogId,
        role: 'dialog' as const,
        'aria-modal': 'false' as const,
        onBlur: composeEventHandlers(onBlur, handleWidgetBlur),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
        ...other
      };
    },
    [dialogId, handleWidgetBlur, startInputRef]
  );

  const getReferenceElement = useCallback(() => {
    const [firstTriggerRef] = triggerRefsRef.current;

    return startInputRef.current ?? endInputRef.current ?? firstTriggerRef?.current ?? null;
  }, [startInputRef, endInputRef]);

  const getFieldTriggerProps = useCallback(
    (props: IFieldInputProps = {}) => {
      const { onMouseDown, onFocus, onClick, onKeyDown, ...other } = props;

      const handleMouseDown = () => {
        previousActiveElementRef.current = document.activeElement;
      };

      const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        lastActiveFieldRef.current = e.currentTarget;

        if (!previousActiveElementRef.current) {
          previousActiveElementRef.current = (e.relatedTarget as Element) || document.body;
        }
      };

      const handleClick = () => {
        const previousActiveElement = previousActiveElementRef.current;

        previousActiveElementRef.current = null;

        if (
          shouldOpenOnFieldClick({ isOpen, previousActiveElement, widgetRefs: getWidgetRefs() })
        ) {
          setIsOpen(true);
        }
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.DOWN) {
          openOrFocusDialog();
        }
      };

      return {
        onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
        onFocus: composeEventHandlers(onFocus, handleFocus),
        onClick: composeEventHandlers(onClick, handleClick),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
        ...other
      };
    },
    [isOpen, openOrFocusDialog, getWidgetRefs]
  );

  // --- Start field ---

  const startIsBlurPendingRef = useRef(false);
  const startRequiredRef = useRef<boolean | undefined>(undefined);

  const reportStartSettled = useCallback(
    (inputValue: string = state.startInputValue ?? '') => {
      const settled = resolveSettledValue({
        inputValue,
        required: startRequiredRef.current,
        minValue,
        maxValue,
        notAfter: endValue,
        customParseDate
      });

      onValueSettled?.({ field: 'start', ...settled });
    },
    [state.startInputValue, endValue, minValue, maxValue, customParseDate, onValueSettled]
  );

  const commitStartBlur = useCallback(() => {
    const parsedDate = customParseDate
      ? customParseDate(state.startInputValue)
      : parseInputValue({ inputValue: state.startInputValue });
    const isParsedDateValid =
      isValid(parsedDate) &&
      isDateWithinRange(parsedDate, minValue, maxValue) &&
      !(endValue !== undefined && isAfter(parsedDate, endValue));

    dispatch({
      type: 'START_BLUR',
      isRejected: !isParsedDateValid && !!state.startInputValue
    });

    if (isParsedDateValid && !isSameDay(parsedDate, startValue!)) {
      onChange?.({ startValue: parsedDate, endValue });
    }

    reportStartSettled();
  }, [
    onChange,
    startValue,
    endValue,
    minValue,
    maxValue,
    customParseDate,
    state.startInputValue,
    reportStartSettled
  ]);

  const handleStartBlur = useCallback(
    (relatedTarget: Element | null = null) => {
      const stillInsideOwnGroup =
        !!relatedTarget && !!startWrapperRef.current?.contains(relatedTarget);

      if (stillInsideOwnGroup) {
        startIsBlurPendingRef.current = true;
      } else {
        startIsBlurPendingRef.current = false;
        commitStartBlur();
      }
    },
    [commitStartBlur]
  );

  /**
   * For a composite child (e.g. `ClearableInput`) that renders extra
   * focusable elements alongside its own input (e.g. a clear button),
   * merged into that child's own `wrapperRef`/`wrapperProps` instead of a
   * wrapping element of our own - `Start` renders no wrapper, so a plain
   * `<input>` composes as a true, direct child of whatever the consumer
   * wraps it in (e.g. `InputGroup`).
   */
  const getStartWrapperProps = useCallback(() => {
    const onStartWrapperBlur = (e: React.FocusEvent) => {
      if (e.target === startInputRef.current || !startIsBlurPendingRef.current) {
        return;
      }

      const relatedTarget = e.relatedTarget as Element | null;
      const stillInsideOwnGroup =
        !!relatedTarget && !!startWrapperRef.current?.contains(relatedTarget);

      if (!stillInsideOwnGroup) {
        startIsBlurPendingRef.current = false;
        commitStartBlur();
      }
    };

    return {
      ref: startWrapperRef,
      onBlur: composeEventHandlers(onStartWrapperBlur, handleWidgetBlur)
    };
  }, [commitStartBlur, startInputRef, handleWidgetBlur]);

  const getStartInputProps = useCallback(
    (props: IFieldInputProps & { required?: boolean } = {}) => {
      const { onChange: onInputChange, onFocus, onKeyDown, onBlur, required, ...other } = props;

      startRequiredRef.current = required;

      const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        dispatch({ type: 'START_INPUT_ONCHANGE', value: inputValue });

        if (inputValue === '' && state.startInputValue !== '') {
          reportStartSettled(inputValue);
        }
      };

      const onFocusCallback = () => {
        dispatch({ type: 'START_FOCUS', startValue });
      };

      const onKeyDownCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.ENTER) {
          e.preventDefault();
          handleStartBlur();
        }
      };

      const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        handleStartBlur(e.relatedTarget as Element | null);
        handleWidgetBlur(e);
      };

      return {
        role: 'combobox' as const,
        'aria-autocomplete': 'none' as const,
        'aria-expanded': 'true' as const,
        'aria-controls': calendarId,
        autoComplete: 'off',
        ...other,
        value: state.startInputValue || '',
        ref: startInputRef,
        onChange: composeEventHandlers(onInputChange, onChangeCallback),
        onFocus: composeEventHandlers(onFocus, onFocusCallback),
        onKeyDown: composeEventHandlers(onKeyDown, onKeyDownCallback),
        onBlur: composeEventHandlers(onBlur, onBlurCallback)
      };
    },
    [
      calendarId,
      state.startInputValue,
      reportStartSettled,
      handleStartBlur,
      handleWidgetBlur,
      startInputRef,
      startValue
    ]
  );

  // --- End field ---

  const endIsBlurPendingRef = useRef(false);
  const endRequiredRef = useRef<boolean | undefined>(undefined);

  const reportEndSettled = useCallback(
    (inputValue: string = state.endInputValue ?? '') => {
      const settled = resolveSettledValue({
        inputValue,
        required: endRequiredRef.current,
        minValue,
        maxValue,
        notBefore: startValue,
        customParseDate
      });

      onValueSettled?.({ field: 'end', ...settled });
    },
    [state.endInputValue, startValue, minValue, maxValue, customParseDate, onValueSettled]
  );

  const commitEndBlur = useCallback(() => {
    const parsedDate = customParseDate
      ? customParseDate(state.endInputValue)
      : parseInputValue({ inputValue: state.endInputValue });
    const isParsedDateValid =
      isValid(parsedDate) &&
      isDateWithinRange(parsedDate, minValue, maxValue) &&
      !(startValue !== undefined && isBefore(parsedDate, startValue));

    dispatch({
      type: 'END_BLUR',
      isRejected: !isParsedDateValid && !!state.endInputValue
    });

    if (isParsedDateValid && !isSameDay(parsedDate, endValue!)) {
      onChange?.({ startValue, endValue: parsedDate });
    }

    reportEndSettled();
  }, [
    onChange,
    startValue,
    endValue,
    minValue,
    maxValue,
    customParseDate,
    state.endInputValue,
    reportEndSettled
  ]);

  const handleEndBlur = useCallback(
    (relatedTarget: Element | null = null) => {
      const stillInsideOwnGroup =
        !!relatedTarget && !!endWrapperRef.current?.contains(relatedTarget);

      if (stillInsideOwnGroup) {
        endIsBlurPendingRef.current = true;
      } else {
        endIsBlurPendingRef.current = false;
        commitEndBlur();
      }
    },
    [commitEndBlur]
  );

  /**
   * See `getStartWrapperProps` - the `End` equivalent, merged into a
   * composite child's own `wrapperRef`/`wrapperProps` instead of a wrapping
   * element of our own.
   */
  const getEndWrapperProps = useCallback(() => {
    const onEndWrapperBlur = (e: React.FocusEvent) => {
      if (e.target === endInputRef.current || !endIsBlurPendingRef.current) {
        return;
      }

      const relatedTarget = e.relatedTarget as Element | null;
      const stillInsideOwnGroup =
        !!relatedTarget && !!endWrapperRef.current?.contains(relatedTarget);

      if (!stillInsideOwnGroup) {
        endIsBlurPendingRef.current = false;
        commitEndBlur();
      }
    };

    return {
      ref: endWrapperRef,
      onBlur: composeEventHandlers(onEndWrapperBlur, handleWidgetBlur)
    };
  }, [commitEndBlur, endInputRef, handleWidgetBlur]);

  const getEndInputProps = useCallback(
    (props: IFieldInputProps & { required?: boolean } = {}) => {
      const { onChange: onInputChange, onFocus, onKeyDown, onBlur, required, ...other } = props;

      endRequiredRef.current = required;

      const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        dispatch({ type: 'END_INPUT_ONCHANGE', value: inputValue });

        if (inputValue === '' && state.endInputValue !== '') {
          reportEndSettled(inputValue);
        }
      };

      const onFocusCallback = () => {
        dispatch({ type: 'END_FOCUS', endValue });
      };

      const onKeyDownCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.ENTER) {
          e.preventDefault();
          handleEndBlur();
        }
      };

      const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        handleEndBlur(e.relatedTarget as Element | null);
        handleWidgetBlur(e);
      };

      return {
        role: 'combobox' as const,
        'aria-autocomplete': 'none' as const,
        'aria-expanded': 'true' as const,
        'aria-controls': calendarId,
        autoComplete: 'off',
        ...other,
        value: state.endInputValue || '',
        ref: endInputRef,
        onChange: composeEventHandlers(onInputChange, onChangeCallback),
        onFocus: composeEventHandlers(onFocus, onFocusCallback),
        onKeyDown: composeEventHandlers(onKeyDown, onKeyDownCallback),
        onBlur: composeEventHandlers(onBlur, onBlurCallback)
      };
    },
    [
      calendarId,
      state.endInputValue,
      reportEndSettled,
      handleEndBlur,
      handleWidgetBlur,
      endInputRef,
      endValue
    ]
  );

  // --- Calendar grid ---

  const getCalendarProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => ({
      ref: calendarWrapperRef,
      ...props
    }),
    []
  );

  const getMonthProps = useCallback((props: ElementProps<HTMLDivElement> = {}) => {
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
    ({ offset, onMouseLeave, ...other }: { offset: 0 | 1 } & ElementProps<HTMLTableElement>) => {
      const handleMouseLeave = () => {
        dispatch({ type: 'HOVER_DATE', value: undefined });
      };

      return {
        role: 'grid' as const,
        'aria-labelledby': offset === 0 ? headingId0 : headingId1,
        'data-test-id': 'calendar-internal-wrapper',
        onMouseLeave: composeEventHandlers(onMouseLeave, handleMouseLeave),
        ...other
      };
    },
    [headingId0, headingId1]
  );

  const getHeadingProps = useCallback(
    ({ offset, ...other }: { offset: 0 | 1 } & ElementProps<HTMLHeadingElement>) => ({
      id: offset === 0 ? headingId0 : headingId1,
      'aria-live': 'polite' as const,
      ...other
    }),
    [headingId0, headingId1]
  );

  const getInRangeId = useCallback(
    (date: Date) => `${prefix}--in-range-${date.getTime()}`,
    [prefix]
  );

  const getDayProps = useCallback(
    ({ date, onClick, onKeyDown, isHighlighted, ...other }: IGetRangeDayPropsOptions) => {
      const isSelected =
        (startValue !== undefined && isSameDay(date, startValue)) ||
        (endValue !== undefined && isSameDay(date, endValue));

      let isDisabled = false;

      if (minValue !== undefined) {
        isDisabled = isBefore(date, minValue) && !isSameDay(date, minValue);
      }

      if (maxValue !== undefined) {
        isDisabled = isDisabled || (isAfter(date, maxValue) && !isSameDay(date, maxValue));
      }

      const isCurrentDate = isToday(date);

      const handleClick = () => {
        if (isDisabled) {
          return;
        }

        dispatch({ type: 'CLICK_DATE', value: date, startValue, endValue });

        let result: { startValue?: Date; endValue?: Date };
        let isOutOfOrder = false;

        if (state.isStartFocused || state.isStartValueInvalid) {
          result =
            endValue !== undefined && (isBefore(date, endValue) || isSameDay(date, endValue))
              ? { startValue: date, endValue }
              : { startValue: date, endValue: undefined };
        } else if (state.isEndFocused || state.isEndValueInvalid) {
          result =
            startValue !== undefined && (isAfter(date, startValue) || isSameDay(date, startValue))
              ? { startValue, endValue: date }
              : { startValue: date, endValue: undefined };
        } else if (startValue === undefined) {
          isOutOfOrder = endValue !== undefined && isAfter(date, endValue);
          result = { startValue: date, endValue };
        } else if (endValue === undefined) {
          result = isBefore(date, startValue)
            ? { startValue: date, endValue: undefined }
            : { startValue, endValue: date };
        } else {
          result = { startValue: date, endValue: undefined };
        }

        onChange?.(result);

        const field = isSameDay(result.startValue!, date) ? 'start' : 'end';
        const fieldValue = field === 'start' ? result.startValue : result.endValue;

        onValueSettled?.({
          field,
          date: isOutOfOrder ? undefined : fieldValue,
          inputValue: formatValue({ value: fieldValue }),
          valid: !isOutOfOrder,
          ...(isOutOfOrder ? { reason: 'out-of-order' as const } : {})
        });
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
        'aria-current': isCurrentDate ? ('date' as const) : undefined,
        'aria-disabled': isDisabled || undefined,
        'aria-describedby': isHighlighted ? getInRangeId(date) : undefined,
        onClick: composeEventHandlers(onClick, handleClick),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
        'data-test-id': 'day',
        'data-test-selected': isSelected,
        'data-test-disabled': isDisabled,
        'data-test-today': isCurrentDate,
        'data-test-hidden': 'false',
        ...other
      };
    },
    [
      minValue,
      maxValue,
      startValue,
      endValue,
      getInRangeId,
      state.isStartFocused,
      state.isEndFocused,
      state.isStartValueInvalid,
      state.isEndValueInvalid,
      state.focusedDate,
      onChange,
      onValueSettled,
      preferredWeekStartsOn,
      rtl
    ]
  );

  const getInRangeDescriptionProps = useCallback(
    ({ date, ...other }: { date: Date } & ElementProps<HTMLSpanElement>) => ({
      id: getInRangeId(date),
      hidden: true,
      ...other
    }),
    [getInRangeId]
  );

  const setHoverDate = useCallback((date: Date | undefined) => {
    dispatch({ type: 'HOVER_DATE', value: date });
  }, []);

  const focusPreviousMonth = useCallback(() => {
    dispatch({ type: 'PREVIEW_PREVIOUS_MONTH' });
  }, []);

  const focusNextMonth = useCallback(() => {
    dispatch({ type: 'PREVIEW_NEXT_MONTH' });
  }, []);

  const focusPreviousYear = useCallback(() => {
    dispatch({ type: 'PREVIEW_PREVIOUS_YEAR' });
  }, []);

  const focusNextYear = useCallback(() => {
    dispatch({ type: 'PREVIEW_NEXT_YEAR' });
  }, []);

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
      previewDate: state.previewDate,
      focusedDate: state.focusedDate,
      hoverDate: state.hoverDate,
      startInputValue: state.startInputValue,
      endInputValue: state.endInputValue,
      isStartValueInvalid: state.isStartValueInvalid,
      isEndValueInvalid: state.isEndValueInvalid,
      calendarId,
      isOpen,
      getStartWrapperProps,
      getEndWrapperProps,
      getStartInputProps,
      getEndInputProps,
      getFieldTriggerProps,
      getTriggerProps,
      getDialogProps,
      dialogRef,
      getReferenceElement,
      getCalendarProps,
      getMonthProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
      getInRangeDescriptionProps,
      getPreviousMonthButtonProps,
      getNextMonthButtonProps,
      getPreviousYearButtonProps,
      getNextYearButtonProps,
      setHoverDate,
      focusPreviousMonth,
      focusNextMonth,
      focusPreviousYear,
      focusNextYear
    }),
    [
      state.previewDate,
      state.focusedDate,
      state.hoverDate,
      state.startInputValue,
      state.endInputValue,
      state.isStartValueInvalid,
      state.isEndValueInvalid,
      calendarId,
      isOpen,
      getStartWrapperProps,
      getEndWrapperProps,
      getStartInputProps,
      getEndInputProps,
      getFieldTriggerProps,
      getTriggerProps,
      getDialogProps,
      dialogRef,
      getReferenceElement,
      getCalendarProps,
      getMonthProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
      getInRangeDescriptionProps,
      getPreviousMonthButtonProps,
      getNextMonthButtonProps,
      getPreviousYearButtonProps,
      getNextYearButtonProps,
      setHoverDate,
      focusPreviousMonth,
      focusNextMonth,
      focusPreviousYear,
      focusNextYear
    ]
  );
}
