/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  HTMLProps,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react';
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
import { IDatePickerRangeValueSettledResult } from '../../../types';
import { DateFnsIndex, getStartOfWeek } from '../../../utils/calendar-utils';
import {
  ElementProps,
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

export interface IUseDatePickerRangeProps {
  idPrefix?: string;
  startValue?: Date;
  endValue?: Date;
  minValue?: Date;
  maxValue?: Date;
  locale?: string;
  weekStartsOn?: DateFnsIndex;
  formatDate?: (date: Date) => string;
  customParseDate?: (inputValue?: string) => Date;
  onChange?: (values: { startValue?: Date; endValue?: Date }) => void;
  onValueSettled?: (result: IDatePickerRangeValueSettledResult) => void;
  /** The rendered Start/End text inputs - created by the caller since they're merged with consumer-supplied refs. */
  startInputRef: RefObject<HTMLInputElement | null>;
  endInputRef: RefObject<HTMLInputElement | null>;
}

export interface IGetRangeDayPropsOptions extends ElementProps<HTMLButtonElement> {
  date: Date;
}

/**
 * `HTMLProps<T>`'s `ref` field is `LegacyRef<T>`, which requires a non-null
 * `RefObject<T>` - incompatible with the `RefObject<T | null>` `useRef(null)`
 * actually produces. `getStartInputProps`/`getEndInputProps` set `ref`
 * directly (Start/End have no separate ref-merge step of their own), so
 * this widens just that one field to accept it.
 */
type IFieldInputProps = Omit<HTMLProps<HTMLInputElement>, 'ref'> & {
  ref?: RefObject<HTMLInputElement | null>;
};

export interface IUseDatePickerRangeReturnValue {
  previewDate: Date;
  focusedDate: Date;
  hoverDate?: Date;
  startInputValue?: string;
  endInputValue?: string;
  calendarId: string;
  /**
   * Opt-in dialog mode - unused by default (`DatePickerRange.Calendar`
   * always renders inline regardless of `isOpen`), for a consumer composing
   * DatePickerRange's calendar inside a popover, mirroring `useDatePicker`'s
   * own dialog pattern.
   */
  isOpen: boolean;
  getStartGroupProps: (props?: HTMLProps<HTMLDivElement>) => HTMLProps<HTMLDivElement>;
  getEndGroupProps: (props?: HTMLProps<HTMLDivElement>) => HTMLProps<HTMLDivElement>;
  getStartInputProps: (props?: IFieldInputProps & { required?: boolean }) => IFieldInputProps;
  getEndInputProps: (props?: IFieldInputProps & { required?: boolean }) => IFieldInputProps;
  /** Spread onto any field (in addition to getStartInputProps/getEndInputProps) that should open/focus the opt-in dialog. */
  getFieldTriggerProps: (props?: IFieldInputProps) => IFieldInputProps;
  getTriggerProps: (props?: ElementProps<HTMLButtonElement>) => ElementProps<HTMLButtonElement>;
  getDialogProps: (
    props: { 'aria-label': string } & ElementProps<HTMLDivElement>
  ) => ElementProps<HTMLDivElement>;
  getCalendarProps: (props?: ElementProps<HTMLDivElement>) => ElementProps<HTMLDivElement>;
  getMonthProps: (props?: ElementProps<HTMLDivElement>) => ElementProps<HTMLDivElement>;
  getGridProps: (
    props: { offset: 0 | 1 } & ElementProps<HTMLTableElement>
  ) => ElementProps<HTMLTableElement>;
  getHeadingProps: (
    props: { offset: 0 | 1 } & ElementProps<HTMLHeadingElement>
  ) => ElementProps<HTMLHeadingElement>;
  getDayProps: (props: IGetRangeDayPropsOptions) => ElementProps<HTMLButtonElement>;
  getPreviousMonthButtonProps: (
    props?: ElementProps<HTMLButtonElement>
  ) => ElementProps<HTMLButtonElement>;
  getNextMonthButtonProps: (
    props?: ElementProps<HTMLButtonElement>
  ) => ElementProps<HTMLButtonElement>;
  getPreviousYearButtonProps: (
    props?: ElementProps<HTMLButtonElement>
  ) => ElementProps<HTMLButtonElement>;
  getNextYearButtonProps: (
    props?: ElementProps<HTMLButtonElement>
  ) => ElementProps<HTMLButtonElement>;
  setHoverDate: (date: Date | undefined) => void;
  focusPreviousMonth: () => void;
  focusNextMonth: () => void;
  focusPreviousYear: () => void;
  focusNextYear: () => void;
}

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedReducer = useCallback(
    datepickerRangeReducer({ startValue, endValue, locale, formatDate }),
    [startValue, endValue, locale, formatDate]
  );
  const [state, dispatch] = useReducer(
    memoizedReducer,
    retrieveInitialState({ startValue, endValue, locale, formatDate } as any)
  );

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_START_VALUE_CHANGE', value: startValue });
  }, [startValue]);

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_END_VALUE_CHANGE', value: endValue });
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
   * own wrapper divs, the trigger button, and the dialog itself. No single
   * combining wrapper is needed: React's `onBlur` already bubbles within
   * each of these independently, so attaching the same check to each is
   * equivalent to attaching it once to a shared ancestor. Wrapped in
   * `useMemo` (not recreated each render) purely so it stays a stable
   * dependency for the getters below - the refs themselves are already
   * stable.
   */
  const startWrapperRef = useRef<HTMLDivElement>(null);
  const endWrapperRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const widgetRefs = useMemo(
    () => [startWrapperRef, endWrapperRef, triggerElementRef, dialogRef],
    []
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
        relatedTarget: e.relatedTarget as Node | null,
        fieldRefs: [startInputRef, endInputRef],
        widgetRefs
      });

      if (shouldClose && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen, startInputRef, endInputRef, widgetRefs]
  );

  const getTriggerProps = useCallback(
    (props: ElementProps<HTMLButtonElement> = {}) => {
      const { onClick, onBlur, ...other } = props;

      return {
        ref: triggerElementRef,
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

        if (shouldOpenOnFieldClick({ isOpen, previousActiveElement, widgetRefs })) {
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
    [isOpen, openOrFocusDialog, widgetRefs]
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

    dispatch({ type: 'START_BLUR' });

    if (parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, startValue!)) {
      onChange?.({ startValue: parsedDate, endValue });
    }

    reportStartSettled();
  }, [onChange, startValue, endValue, customParseDate, state.startInputValue, reportStartSettled]);

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

  const getStartGroupProps = useCallback(
    (props: HTMLProps<HTMLDivElement> = {}) => {
      const { onBlur, ...other } = props;

      const onStartWrapperBlur = (e: React.FocusEvent<HTMLDivElement>) => {
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
        style: { display: 'contents' },
        onBlur: composeEventHandlers(onBlur, onStartWrapperBlur, handleWidgetBlur),
        ...other
      };
    },
    [commitStartBlur, startInputRef, handleWidgetBlur]
  );

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
        dispatch({ type: 'START_FOCUS' });
      };

      const onKeyDownCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.ENTER) {
          e.preventDefault();
          handleStartBlur();
        }
      };

      const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        handleStartBlur(e.relatedTarget as Element | null);
      };

      return {
        role: 'combobox' as const,
        'aria-autocomplete': 'none' as const,
        'aria-expanded': 'true' as const,
        'aria-controls': calendarId,
        ...other,
        value: state.startInputValue || '',
        ref: startInputRef,
        onChange: composeEventHandlers(onInputChange, onChangeCallback),
        onFocus: composeEventHandlers(onFocus, onFocusCallback),
        onKeyDown: composeEventHandlers(onKeyDown, onKeyDownCallback),
        onBlur: composeEventHandlers(onBlur, onBlurCallback)
      };
    },
    [calendarId, state.startInputValue, reportStartSettled, handleStartBlur, startInputRef]
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

    dispatch({ type: 'END_BLUR' });

    if (parsedDate && isValid(parsedDate) && !isSameDay(parsedDate, endValue!)) {
      onChange?.({ startValue, endValue: parsedDate });
    }

    reportEndSettled();
  }, [onChange, startValue, endValue, customParseDate, state.endInputValue, reportEndSettled]);

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

  const getEndGroupProps = useCallback(
    (props: HTMLProps<HTMLDivElement> = {}) => {
      const { onBlur, ...other } = props;

      const onEndWrapperBlur = (e: React.FocusEvent<HTMLDivElement>) => {
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
        style: { display: 'contents' },
        onBlur: composeEventHandlers(onBlur, onEndWrapperBlur, handleWidgetBlur),
        ...other
      };
    },
    [commitEndBlur, endInputRef, handleWidgetBlur]
  );

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
        dispatch({ type: 'END_FOCUS' });
      };

      const onKeyDownCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.ENTER) {
          e.preventDefault();
          handleEndBlur();
        }
      };

      const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        handleEndBlur(e.relatedTarget as Element | null);
      };

      return {
        role: 'combobox' as const,
        'aria-autocomplete': 'none' as const,
        'aria-expanded': 'true' as const,
        'aria-controls': calendarId,
        ...other,
        value: state.endInputValue || '',
        ref: endInputRef,
        onChange: composeEventHandlers(onInputChange, onChangeCallback),
        onFocus: composeEventHandlers(onFocus, onFocusCallback),
        onKeyDown: composeEventHandlers(onKeyDown, onKeyDownCallback),
        onBlur: composeEventHandlers(onBlur, onBlurCallback)
      };
    },
    [calendarId, state.endInputValue, reportEndSettled, handleEndBlur, endInputRef]
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

  const getDayProps = useCallback(
    ({ date, onClick, onKeyDown, ...other }: IGetRangeDayPropsOptions) => {
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

        dispatch({ type: 'CLICK_DATE', value: date });

        let result: { startValue?: Date; endValue?: Date };
        let isOutOfOrder = false;

        if (state.isStartFocused) {
          result =
            endValue !== undefined && (isBefore(date, endValue) || isSameDay(date, endValue))
              ? { startValue: date, endValue }
              : { startValue: date, endValue: undefined };
        } else if (state.isEndFocused) {
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
            targetDate = addDays(date, 1);
            break;
          case KEYS.LEFT:
            targetDate = subDays(date, 1);
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
        pendingGridFocusRef.current = true;
        dispatch({ type: 'FOCUS_DATE', value: targetDate });
      };

      return {
        tabIndex: isSameDay(date, state.focusedDate) ? 0 : -1,
        'aria-current': isCurrentDate ? ('date' as const) : undefined,
        'aria-disabled': isDisabled || undefined,
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
      state.isStartFocused,
      state.isEndFocused,
      state.focusedDate,
      onChange,
      onValueSettled,
      preferredWeekStartsOn
    ]
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
      calendarId,
      isOpen,
      getStartGroupProps,
      getEndGroupProps,
      getStartInputProps,
      getEndInputProps,
      getFieldTriggerProps,
      getTriggerProps,
      getDialogProps,
      getCalendarProps,
      getMonthProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
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
      calendarId,
      isOpen,
      getStartGroupProps,
      getEndGroupProps,
      getStartInputProps,
      getEndInputProps,
      getFieldTriggerProps,
      getTriggerProps,
      getDialogProps,
      getCalendarProps,
      getMonthProps,
      getGridProps,
      getHeadingProps,
      getDayProps,
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
