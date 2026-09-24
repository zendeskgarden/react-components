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
import { useFocusJail } from '@zendeskgarden/container-focusjail';
import { KEYS, composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import {
  ElementProps,
  IFieldInputProps,
  IGetRangeCellPropsOptions,
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
 * Follows the `@zendeskgarden/container-*` prop-getter convention (see
 * `useCombobox`).
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

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_LOCALE_CHANGE', startValue, endValue, locale, formatDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  // Spans both months' grids, since arrow-key navigation can cross between them.
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const pendingGridFocusRef = useRef(false);

  useEffect(() => {
    if (!pendingGridFocusRef.current) {
      return;
    }

    pendingGridFocusRef.current = false;
    calendarWrapperRef.current
      ?.querySelector<HTMLTableCellElement>('[data-test-id="day"][tabindex="0"]')
      ?.focus();
  }, [state.focusedDate]);

  // A day click needs to defer its own follow-up focus() to the next commit - calling it
  // synchronously can blur a currently-focused field before this same click's CLICK_DATE
  // dispatch has flushed, so the field's blur handler commits against stale input text and
  // clobbers this click's onChange. A dedicated counter (rather than `state` itself) forces
  // that next commit even on the one CLICK_DATE branch that intentionally returns the same
  // state reference.
  const pendingCellFocusRef = useRef<HTMLElement | null>(null);
  const [cellFocusRequestId, setCellFocusRequestId] = useState(0);

  useEffect(() => {
    if (pendingCellFocusRef.current) {
      pendingCellFocusRef.current.focus();
      pendingCellFocusRef.current = null;
    }
  }, [cellFocusRequestId]);

  const requestCellFocus = useCallback((target: HTMLElement | null | undefined) => {
    pendingCellFocusRef.current = target ?? null;
    setCellFocusRequestId(id => id + 1);
  }, []);

  // A consumer may compose more than one `Trigger` at once (e.g. one per field), so refs are
  // collected into a `Set` rather than a single ref.
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
  const [hasDialog, setHasDialog] = useState(false);
  const shouldFocusDialogRef = useRef(false);
  const previousActiveElementRef = useRef<Element | null>(null);
  const lastActiveFieldRef = useRef<HTMLElement | null>(null);
  /** Set right before refocusing a field after completing the range auto-closes the dialog, so the next click on that already-focused field reopens it instead of being mistaken for a click inside text being edited. */
  const justClosedViaSelectionRef = useRef(false);

  const { getContainerProps: getFocusJailProps } = useFocusJail({
    containerRef: dialogRef,
    focusOnMount: false,
    restoreFocus: false
  });

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
        widgetRefs: getWidgetRefs(),
        dialogRef
      });

      if (shouldClose && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen, startInputRef, endInputRef, getWidgetRefs]
  );

  const registerDialog = useCallback(() => {
    setHasDialog(true);

    return () => setHasDialog(false);
  }, []);

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

      const { onKeyDown: focusJailKeyDown } = getFocusJailProps();

      return {
        ref: dialogRef,
        id: dialogId,
        role: 'dialog' as const,
        'aria-modal': 'true' as const,
        onBlur: composeEventHandlers(onBlur, handleWidgetBlur),
        onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown, focusJailKeyDown),
        ...other
      };
    },
    [dialogId, handleWidgetBlur, startInputRef, getFocusJailProps]
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
        const justClosedViaSelection = justClosedViaSelectionRef.current;

        previousActiveElementRef.current = null;
        justClosedViaSelectionRef.current = false;

        if (
          shouldOpenOnFieldClick({
            isOpen,
            previousActiveElement,
            widgetRefs: getWidgetRefs(),
            justClosedViaSelection
          })
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

  const getOpenOnClickProps = useCallback(() => {
    const handleMouseDown = () => {
      previousActiveElementRef.current = document.activeElement;
    };

    const handleClick = () => {
      if (!hasDialog) {
        return;
      }

      const previousActiveElement = previousActiveElementRef.current;

      previousActiveElementRef.current = null;

      if (shouldOpenOnFieldClick({ isOpen, previousActiveElement, widgetRefs: getWidgetRefs() })) {
        setIsOpen(true);
      }
    };

    return { onMouseDown: handleMouseDown, onClick: handleClick };
  }, [hasDialog, isOpen, getWidgetRefs]);

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

  const getStartWrapperProps = useCallback(
    (props: Omit<ElementProps<HTMLDivElement>, 'ref'> = {}) => {
      const { onBlur, onClick, ...other } = props;

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
        onBlur: composeEventHandlers(onBlur, onStartWrapperBlur, handleWidgetBlur),
        onClick: composeEventHandlers(onClick, () => startInputRef.current?.focus()),
        ...other
      };
    },
    [commitStartBlur, startInputRef, handleWidgetBlur]
  );

  const getStartGroupProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => {
      const { onMouseDown, onClick, ...other } = props;
      const openOnClickProps = getOpenOnClickProps();

      return {
        onMouseDown: composeEventHandlers(onMouseDown, openOnClickProps.onMouseDown),
        onClick: composeEventHandlers(
          onClick,
          () => startInputRef.current?.focus(),
          openOnClickProps.onClick
        ),
        ...other
      };
    },
    [startInputRef, getOpenOnClickProps]
  );

  const getStartInputProps = useCallback(
    (props: IFieldInputProps & { required?: boolean } = {}) => {
      const { onChange: onInputChange, onFocus, onKeyDown, onBlur, required, ...other } = props;

      startRequiredRef.current = required;

      const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        justClosedViaSelectionRef.current = false;
        dispatch({ type: 'START_INPUT_ONCHANGE', value: inputValue });

        if (inputValue === '' && state.startInputValue !== '') {
          reportStartSettled(inputValue);

          // A `ClearableInput`'s clear button dispatches a plain `Event`, not a real
          // `InputEvent` (which typing/backspacing always produces), so this is how we tell
          // "user explicitly cleared the field" apart from incidental backspacing mid-edit -
          // only the former should commit immediately, without waiting for blur.
          if (!(e.nativeEvent instanceof InputEvent) && startValue !== undefined) {
            onChange?.({ startValue: undefined, endValue });
          }
        }
      };

      const onFocusCallback = () => {
        dispatch({ type: 'START_FOCUS', startValue });
      };

      const onKeyDownCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.ENTER) {
          e.preventDefault();
          handleStartBlur();
        } else if (e.key === KEYS.ESCAPE && isOpen) {
          setIsOpen(false);
        }
      };

      const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        handleStartBlur(e.relatedTarget as Element | null);
        handleWidgetBlur(e);
      };

      return {
        ...(hasDialog
          ? {
              role: 'combobox' as const,
              'aria-autocomplete': 'none' as const,
              'aria-haspopup': 'dialog' as const,
              'aria-expanded': isOpen,
              'aria-controls': dialogId
            }
          : {}),
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
      hasDialog,
      isOpen,
      dialogId,
      state.startInputValue,
      reportStartSettled,
      handleStartBlur,
      handleWidgetBlur,
      startInputRef,
      startValue,
      endValue,
      onChange
    ]
  );

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

  const getEndWrapperProps = useCallback(
    (props: Omit<ElementProps<HTMLDivElement>, 'ref'> = {}) => {
      const { onBlur, onClick, ...other } = props;

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
        onBlur: composeEventHandlers(onBlur, onEndWrapperBlur, handleWidgetBlur),
        onClick: composeEventHandlers(onClick, () => endInputRef.current?.focus()),
        ...other
      };
    },
    [commitEndBlur, endInputRef, handleWidgetBlur]
  );

  const getEndGroupProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => {
      const { onMouseDown, onClick, ...other } = props;
      const openOnClickProps = getOpenOnClickProps();

      return {
        onMouseDown: composeEventHandlers(onMouseDown, openOnClickProps.onMouseDown),
        onClick: composeEventHandlers(
          onClick,
          () => endInputRef.current?.focus(),
          openOnClickProps.onClick
        ),
        ...other
      };
    },
    [endInputRef, getOpenOnClickProps]
  );

  const getEndInputProps = useCallback(
    (props: IFieldInputProps & { required?: boolean } = {}) => {
      const { onChange: onInputChange, onFocus, onKeyDown, onBlur, required, ...other } = props;

      endRequiredRef.current = required;

      const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        justClosedViaSelectionRef.current = false;
        dispatch({ type: 'END_INPUT_ONCHANGE', value: inputValue });

        if (inputValue === '' && state.endInputValue !== '') {
          reportEndSettled(inputValue);

          // See the equivalent comment in getStartInputProps: a `ClearableInput`'s clear
          // button dispatches a plain `Event`, not a real `InputEvent`, which is how we tell
          // an explicit clear apart from incidental backspacing mid-edit.
          if (!(e.nativeEvent instanceof InputEvent) && endValue !== undefined) {
            onChange?.({ startValue, endValue: undefined });
          }
        }
      };

      const onFocusCallback = () => {
        dispatch({ type: 'END_FOCUS', endValue });
      };

      const onKeyDownCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.ENTER) {
          e.preventDefault();
          handleEndBlur();
        } else if (e.key === KEYS.ESCAPE && isOpen) {
          setIsOpen(false);
        }
      };

      const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        handleEndBlur(e.relatedTarget as Element | null);
        handleWidgetBlur(e);
      };

      return {
        ...(hasDialog
          ? {
              role: 'combobox' as const,
              'aria-autocomplete': 'none' as const,
              'aria-haspopup': 'dialog' as const,
              'aria-expanded': isOpen,
              'aria-controls': dialogId
            }
          : {}),
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
      hasDialog,
      isOpen,
      dialogId,
      state.endInputValue,
      reportEndSettled,
      handleEndBlur,
      handleWidgetBlur,
      endInputRef,
      endValue,
      startValue,
      onChange
    ]
  );

  const getCalendarProps = useCallback((props: ElementProps<HTMLDivElement> = {}) => {
    const { onMouseDown, ...other } = props;
    const handleMouseDown = (e: React.MouseEvent) => {
      /** Stop focus from escaping input */
      e.preventDefault();
    };

    return {
      ref: calendarWrapperRef,
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

  const getCellProps = useCallback(
    ({ date, onClick, onKeyDown, ...other }: IGetRangeCellPropsOptions) => {
      const isSelected =
        (startValue !== undefined && isSameDay(date, startValue)) ||
        (endValue !== undefined && isSameDay(date, endValue));

      const isDisabled = !isDateWithinRange(date, minValue, maxValue);

      const isCurrentDate = isToday(date);

      const handleClick = (target?: HTMLTableCellElement | null) => {
        if (isDisabled) {
          return;
        }

        dispatch({ type: 'CLICK_DATE', value: date, startValue, endValue, locale, formatDate });

        let result: { startValue?: Date; endValue?: Date };
        let isOutOfOrder = false;

        if (state.isStartFocused || state.isStartValueInvalid) {
          result =
            endValue !== undefined && (isBefore(date, endValue) || isSameDay(date, endValue))
              ? { startValue: date, endValue }
              : { startValue: date, endValue: undefined };
        } else if (state.isEndFocused || state.isEndValueInvalid) {
          if (startValue === undefined) {
            result = { startValue: undefined, endValue: date };
          } else {
            result =
              isAfter(date, startValue) || isSameDay(date, startValue)
                ? { startValue, endValue: date }
                : { startValue: date, endValue: undefined };
          }
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

        const field =
          result.startValue !== undefined && isSameDay(result.startValue, date) ? 'start' : 'end';
        const fieldValue = field === 'start' ? result.startValue : result.endValue;

        onValueSettled?.({
          field,
          date: isOutOfOrder ? undefined : fieldValue,
          inputValue: formatValue({ value: fieldValue, locale, formatDate }),
          valid: !isOutOfOrder,
          ...(isOutOfOrder ? { reason: 'out-of-order' as const } : {})
        });

        if (hasDialog) {
          if (!isOutOfOrder && result.startValue !== undefined && result.endValue !== undefined) {
            setIsOpen(false);
            justClosedViaSelectionRef.current = true;
            requestCellFocus((field === 'start' ? startInputRef : endInputRef).current);
          }
        } else {
          requestCellFocus(target);
        }
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
        if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
          e.preventDefault();
          handleClick(e.currentTarget);

          return;
        }

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

        pendingGridFocusRef.current = true;
        dispatch({ type: 'FOCUS_DATE', value: targetDate });
      };

      return {
        tabIndex: isSameDay(date, state.focusedDate) ? 0 : -1,
        'aria-current': isCurrentDate ? ('date' as const) : undefined,
        'aria-disabled': isDisabled || undefined,
        'aria-selected': isSelected,
        onClick: composeEventHandlers(onClick, (e: React.MouseEvent<HTMLTableCellElement>) =>
          handleClick(e.currentTarget)
        ),
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
      state.isStartValueInvalid,
      state.isEndValueInvalid,
      state.focusedDate,
      onChange,
      onValueSettled,
      preferredWeekStartsOn,
      rtl,
      startInputRef,
      endInputRef,
      hasDialog,
      requestCellFocus,
      locale,
      formatDate
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
      isStartValueInvalid: state.isStartValueInvalid,
      isEndValueInvalid: state.isEndValueInvalid,
      calendarId,
      isOpen,
      hasDialog,
      registerDialog,
      getStartWrapperProps,
      getEndWrapperProps,
      getStartGroupProps,
      getEndGroupProps,
      getStartInputProps,
      getEndInputProps,
      getFieldTriggerProps,
      getTriggerProps,
      getDialogProps,
      dialogRef,
      getReferenceElement,
      getCalendarProps,
      getGridProps,
      getHeadingProps,
      getCellProps,
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
      hasDialog,
      registerDialog,
      getStartWrapperProps,
      getEndWrapperProps,
      getStartGroupProps,
      getEndGroupProps,
      getStartInputProps,
      getEndInputProps,
      getFieldTriggerProps,
      getTriggerProps,
      getDialogProps,
      dialogRef,
      getReferenceElement,
      getCalendarProps,
      getGridProps,
      getHeadingProps,
      getCellProps,
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
