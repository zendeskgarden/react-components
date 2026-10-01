/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
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
import { useFocusJail } from '@zendeskgarden/container-focusjail';
import { KEYS, composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import {
  DatePickerRangeField,
  ElementProps,
  IDatePickerRangeFieldState,
  IFieldInputProps,
  IGetRangeCellPropsOptions,
  IUseDatePickerRangeProps,
  IUseDatePickerRangeReturnValue
} from '../../../types';
import { getStartOfWeek, isDateWithinRange } from '../../../utils/calendar-utils';
import {
  composeActionButtonProps,
  resolveWidgetBlur,
  shouldOpenOnGroupClick
} from '../../../utils/dialog-trigger-utils';
import {
  datepickerRangeReducer,
  formatValue,
  parseInputValue,
  resolveRangeSelection,
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
  keepTypedInput = true,
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
    { startValue, endValue, locale, formatDate },
    retrieveInitialState
  );

  /** Set once an emptied field has been reported, so leaving it afterwards doesn't report the same clear again. */
  const isStartEmptyReportedRef = useRef(false);
  const isEndEmptyReportedRef = useRef(false);

  useEffect(() => {
    isStartEmptyReportedRef.current = false;
    dispatch({
      type: 'CONTROLLED_START_VALUE_CHANGE',
      value: startValue,
      locale,
      formatDate,
      customParseDate
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startValue]);

  useEffect(() => {
    isEndEmptyReportedRef.current = false;
    dispatch({
      type: 'CONTROLLED_END_VALUE_CHANGE',
      value: endValue,
      locale,
      formatDate,
      customParseDate
    });
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
      ?.querySelector<HTMLTableCellElement>('[role="gridcell"][tabindex="0"]')
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
  const startGroupRef = useRef<HTMLDivElement>(null);
  const endGroupRef = useRef<HTMLDivElement>(null);
  /** Consumer-provided through `Start`/`End`'s own `wrapperRef` (see `registerFieldWrapperRef`). */
  const fieldWrapperRefsRef = useRef<
    Partial<Record<DatePickerRangeField, RefObject<HTMLElement | null>>>
  >({});

  /**
   * The element bounding a field - its input plus any extra focusable elements, like a
   * `ClearableInput`'s clear button - so focus moving between them isn't treated as leaving the
   * field. Resolved in order: the consumer's `wrapperRef`, a direct `ClearableInput` child's own
   * wrapper, then the field's `StartGroup`/`EndGroup`.
   */
  const getFieldBoundary = useCallback(
    (field: DatePickerRangeField): HTMLElement | null =>
      fieldWrapperRefsRef.current[field]?.current ??
      (field === 'start' ? startWrapperRef : endWrapperRef).current ??
      (field === 'start' ? startGroupRef : endGroupRef).current,
    []
  );

  /** A group's own `Trigger` isn't part of its field, so moving focus to it still commits the field. */
  const isInsideField = useCallback(
    (field: DatePickerRangeField, node: Node | null) =>
      !!node &&
      !!getFieldBoundary(field)?.contains(node) &&
      ![...triggerRefsRef.current].some(ref => ref.current?.contains(node)),
    [getFieldBoundary]
  );

  const getWidgetRefs = useCallback(
    () => [
      startWrapperRef,
      endWrapperRef,
      startGroupRef,
      endGroupRef,
      ...Object.values(fieldWrapperRefsRef.current).filter(
        (ref): ref is RefObject<HTMLElement | null> => ref !== undefined
      ),
      startInputRef,
      endInputRef,
      dialogRef,
      ...triggerRefsRef.current
    ],
    [startInputRef, endInputRef]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [hasDialog, setHasDialog] = useState(false);
  const [fieldStates, setFieldStates] = useState<
    Record<DatePickerRangeField, IDatePickerRangeFieldState>
  >({
    start: {},
    end: {}
  });
  const disabledOrReadOnlyFields = useMemo(
    () => ({
      start: !!(fieldStates.start.disabled || fieldStates.start.readOnly),
      end: !!(fieldStates.end.disabled || fieldStates.end.readOnly)
    }),
    [fieldStates]
  );
  /** Once neither field can change, the calendar only displays the range - disabled if both fields are, otherwise read-only, so a read-only value stays browsable. */
  const isCalendarDisabled = !!(fieldStates.start.disabled && fieldStates.end.disabled);
  const isCalendarReadOnly =
    !isCalendarDisabled && disabledOrReadOnlyFields.start && disabledOrReadOnlyFields.end;

  /** With no `field` (e.g. a `Trigger` outside either group), only true once both fields are. */
  const isDisabledOrReadOnly = useCallback(
    (field?: DatePickerRangeField) =>
      field === undefined
        ? disabledOrReadOnlyFields.start && disabledOrReadOnlyFields.end
        : disabledOrReadOnlyFields[field],
    [disabledOrReadOnlyFields]
  );

  /** The one field that's disabled or read-only, if only one is. */
  const getDisabledOrReadOnlyField = useCallback((): DatePickerRangeField | undefined => {
    if (disabledOrReadOnlyFields.start !== disabledOrReadOnlyFields.end) {
      return disabledOrReadOnlyFields.start ? 'start' : 'end';
    }

    return undefined;
  }, [disabledOrReadOnlyFields]);

  const getInputField = useCallback(
    (element: EventTarget): DatePickerRangeField | undefined => {
      if (element === startInputRef.current) {
        return 'start';
      }

      return element === endInputRef.current ? 'end' : undefined;
    },
    [startInputRef, endInputRef]
  );
  const shouldFocusDialogRef = useRef(false);
  const previousActiveElementRef = useRef<Element | null>(null);
  const lastActiveFieldRef = useRef<HTMLElement | null>(null);
  /** What had focus when a field was pressed, so clicking the other field while the dialog is open moves to it rather than closing the dialog. */
  const fieldMouseDownActiveElementRef = useRef<Element | null>(null);

  const { getContainerProps: getFocusJailProps } = useFocusJail({
    containerRef: dialogRef,
    focusOnMount: false,
    restoreFocus: false
  });

  const openOrFocusDialog = useCallback(
    (field?: DatePickerRangeField) => {
      if (isDisabledOrReadOnly(field)) {
        return;
      }

      const openDate =
        (state.isEndFocused ? (endValue ?? startValue) : (startValue ?? endValue)) ?? new Date();

      dispatch({ type: 'FOCUS_DATE', value: openDate });

      if (isOpen) {
        pendingGridFocusRef.current = true;
      } else {
        setIsOpen(true);
        shouldFocusDialogRef.current = true;
      }
    },
    [isDisabledOrReadOnly, isOpen, state.isEndFocused, startValue, endValue]
  );

  /**
   * Closes a dialog that was already open once neither field can change anymore, returning
   * focus from inside it to the field it was opened from - when that field can still take focus
   * (i.e. it's read-only). Otherwise nothing in the widget can, so focus is left to the browser.
   * A layout effect, so focus is checked before the browser drops it from newly-disabled elements.
   */
  useLayoutEffect(() => {
    if (!(isOpen && isDisabledOrReadOnly())) {
      return;
    }

    const isFocusInside = !!dialogRef.current?.contains(document.activeElement);
    const field = lastActiveFieldRef.current ?? startInputRef.current;

    setIsOpen(false);

    if (isFocusInside && field && !(field as HTMLInputElement).disabled) {
      field.focus();
    }
  }, [isOpen, isDisabledOrReadOnly, startInputRef]);

  /**
   * An inline calendar that becomes disabled while one of its days or paddles has focus moves
   * focus to the grid it was in (or the first grid, from the toolbar) instead of losing it, since
   * none of them can keep it. A layout effect, for the same reason as above.
   */
  useLayoutEffect(() => {
    const calendarWrapper = calendarWrapperRef.current;
    const activeElement = document.activeElement;

    if (!isCalendarDisabled || hasDialog || !calendarWrapper?.contains(activeElement)) {
      return;
    }

    (
      activeElement!.closest<HTMLElement>('[role="grid"]') ??
      calendarWrapper.querySelector<HTMLElement>('[role="grid"]')
    )?.focus();
  }, [isCalendarDisabled, hasDialog]);

  useEffect(() => {
    if (isOpen && shouldFocusDialogRef.current) {
      calendarWrapperRef.current
        ?.querySelector<HTMLTableCellElement>('[role="gridcell"][tabindex="0"]')
        ?.focus();
      shouldFocusDialogRef.current = false;
    }
  }, [isOpen]);

  const handleWidgetBlur = useCallback(
    (e: React.FocusEvent) => {
      const { shouldClose } = resolveWidgetBlur({
        relatedTarget: e.relatedTarget as Node | null,
        widgetRefs: getWidgetRefs()
      });

      if (shouldClose && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen, getWidgetRefs]
  );

  const registerDialog = useCallback(() => {
    setHasDialog(true);

    return () => setHasDialog(false);
  }, []);

  const registerFieldState = useCallback(
    (field: DatePickerRangeField, { disabled, readOnly, required }: IDatePickerRangeFieldState) => {
      setFieldStates(states =>
        !!states[field].disabled === !!disabled &&
        !!states[field].readOnly === !!readOnly &&
        !!states[field].required === !!required
          ? states
          : { ...states, [field]: { disabled, readOnly, required } }
      );

      return () => setFieldStates(states => ({ ...states, [field]: {} }));
    },
    []
  );

  const registerTriggerRef = useCallback((ref: RefObject<HTMLButtonElement | null>) => {
    triggerRefsRef.current.add(ref);

    return () => {
      triggerRefsRef.current.delete(ref);
    };
  }, []);

  const toggleDialog = useCallback(
    (field?: DatePickerRangeField) => {
      if (isOpen) {
        setIsOpen(false);

        let fieldInputRef: RefObject<HTMLInputElement | null> | undefined;

        if (field === 'start') {
          fieldInputRef = startInputRef;
        } else if (field === 'end') {
          fieldInputRef = endInputRef;
        }

        (fieldInputRef?.current ?? lastActiveFieldRef.current ?? startInputRef.current)?.focus();
      } else {
        openOrFocusDialog(field);
      }
    },
    [isOpen, startInputRef, endInputRef, openOrFocusDialog]
  );

  const getTriggerProps = useCallback(
    (props: ElementProps<HTMLButtonElement> & { field?: DatePickerRangeField } = {}) => {
      const { onClick, onBlur, field, ...other } = props;

      return {
        'aria-haspopup': 'dialog' as const,
        'aria-expanded': isOpen,
        'aria-controls': dialogId,
        disabled: isDisabledOrReadOnly(field),
        onClick: composeEventHandlers(onClick, () => toggleDialog(field)),
        onBlur: composeEventHandlers(onBlur, handleWidgetBlur),
        ...other
      };
    },
    [isOpen, dialogId, isDisabledOrReadOnly, toggleDialog, handleWidgetBlur]
  );

  const getDialogProps = useCallback(
    (props: { 'aria-label': string } & ElementProps<HTMLDivElement>) => {
      const { onBlur, onKeyDown, ...other } = props;

      const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === KEYS.ESCAPE) {
          e.stopPropagation();
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
        fieldMouseDownActiveElementRef.current = document.activeElement;
      };

      const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        lastActiveFieldRef.current = e.currentTarget;
      };

      const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const field = getInputField(e.currentTarget);
        const previousActiveElement = fieldMouseDownActiveElementRef.current;

        fieldMouseDownActiveElementRef.current = null;

        if (isOpen) {
          const otherField = field === 'start' ? 'end' : 'start';
          const otherFieldBoundary =
            getFieldBoundary(otherField) ??
            (otherField === 'start' ? startInputRef : endInputRef).current;
          const isMovingBetweenFields =
            !!previousActiveElement && !!otherFieldBoundary?.contains(previousActiveElement);

          if (!isMovingBetweenFields) {
            setIsOpen(false);
          }
        } else if (!isDisabledOrReadOnly(field)) {
          setIsOpen(true);
        }
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYS.DOWN) {
          openOrFocusDialog(getInputField(e.currentTarget));
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
    [
      isOpen,
      isDisabledOrReadOnly,
      getInputField,
      getFieldBoundary,
      startInputRef,
      endInputRef,
      openOrFocusDialog
    ]
  );

  const getOpenOnClickProps = useCallback(
    (field: DatePickerRangeField) => {
      const handleMouseDown = () => {
        previousActiveElementRef.current = document.activeElement;
      };

      const handleClick = () => {
        if (!hasDialog || isDisabledOrReadOnly(field)) {
          return;
        }

        const previousActiveElement = previousActiveElementRef.current;

        previousActiveElementRef.current = null;

        if (
          shouldOpenOnGroupClick({ isOpen, previousActiveElement, widgetRefs: getWidgetRefs() })
        ) {
          setIsOpen(true);
        }
      };

      return { onMouseDown: handleMouseDown, onClick: handleClick };
    },
    [hasDialog, isOpen, isDisabledOrReadOnly, getWidgetRefs]
  );

  const startIsBlurPendingRef = useRef(false);
  const reportStartSettled = useCallback(
    (inputValue: string = state.startInputValue ?? '') => {
      const settled = resolveSettledValue({
        inputValue,
        required: fieldStates.start.required,
        minValue,
        maxValue,
        notAfter: endValue,
        customParseDate
      });

      if (!(inputValue === '' && isStartEmptyReportedRef.current)) {
        onValueSettled?.({ field: 'start', ...settled });
      }

      isStartEmptyReportedRef.current = inputValue === '';
    },
    [
      state.startInputValue,
      endValue,
      minValue,
      maxValue,
      customParseDate,
      onValueSettled,
      fieldStates.start.required
    ]
  );

  const commitStartBlur = useCallback(() => {
    const parsedDate = customParseDate
      ? customParseDate(state.startInputValue)
      : parseInputValue({ inputValue: state.startInputValue });
    const isParsedDateValid =
      isValid(parsedDate) &&
      isDateWithinRange(parsedDate, minValue, maxValue) &&
      !(endValue !== undefined && isAfter(parsedDate, endValue));

    const isRejected = !isParsedDateValid && !!state.startInputValue;

    dispatch({
      type: 'START_BLUR',
      isRejected,
      settledInputValue: keepTypedInput
        ? undefined
        : formatValue({ value: isParsedDateValid ? parsedDate : startValue, locale, formatDate })
    });

    if (isParsedDateValid && !isSameDay(parsedDate, startValue!)) {
      onChange?.({ startValue: parsedDate, endValue });
    } else if (!state.startInputValue && keepTypedInput && startValue !== undefined) {
      onChange?.({ startValue: undefined, endValue });
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
    reportStartSettled,
    keepTypedInput,
    locale,
    formatDate
  ]);

  const handleStartBlur = useCallback(
    (relatedTarget: Element | null = null) => {
      if (isInsideField('start', relatedTarget)) {
        startIsBlurPendingRef.current = true;
      } else {
        startIsBlurPendingRef.current = false;
        commitStartBlur();
      }
    },
    [commitStartBlur, isInsideField]
  );

  /** Commits a pending blur once focus leaves the field's boundary from one of its extra focusable elements. */
  const handleStartBoundaryBlur = useCallback(
    (e: FocusEvent | React.FocusEvent) => {
      // A direct `ClearableInput` inside a `StartGroup` reports through both - only the resolved boundary counts.
      if (e.currentTarget !== getFieldBoundary('start')) {
        return;
      }

      if (
        e.target !== startInputRef.current &&
        startIsBlurPendingRef.current &&
        !isInsideField('start', e.relatedTarget as Node | null)
      ) {
        startIsBlurPendingRef.current = false;
        commitStartBlur();
      }

      handleWidgetBlur(e as React.FocusEvent);
    },
    [getFieldBoundary, isInsideField, startInputRef, commitStartBlur, handleWidgetBlur]
  );

  const getStartWrapperProps = useCallback(
    (props: Omit<ElementProps<HTMLDivElement>, 'ref'> = {}) => {
      const { onBlur, onClick, ...other } = props;

      return {
        ref: startWrapperRef,
        onBlur: composeEventHandlers(onBlur, handleStartBoundaryBlur),
        onClick: composeEventHandlers(onClick, () => startInputRef.current?.focus()),
        ...other
      };
    },
    [handleStartBoundaryBlur, startInputRef]
  );

  const getStartGroupProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => {
      const { onMouseDown, onClick, onBlur, ...other } = props;
      const openOnClickProps = getOpenOnClickProps('start');

      return {
        ref: startGroupRef,
        onBlur: composeEventHandlers(onBlur, handleStartBoundaryBlur),
        onMouseDown: composeEventHandlers(onMouseDown, openOnClickProps.onMouseDown),
        onClick: composeEventHandlers(
          onClick,
          () => startInputRef.current?.focus(),
          openOnClickProps.onClick
        ),
        ...other
      };
    },
    [startInputRef, getOpenOnClickProps, handleStartBoundaryBlur]
  );

  const getStartInputProps = useCallback(
    (props: IFieldInputProps = {}) => {
      const { onChange: onInputChange, onFocus, onKeyDown, onBlur, ...other } = props;

      const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        dispatch({ type: 'START_INPUT_ONCHANGE', value: inputValue });

        if (inputValue !== '') {
          isStartEmptyReportedRef.current = false;
        } else if (state.startInputValue !== '') {
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
          setIsOpen(false);
        } else if (e.key === KEYS.ESCAPE && isOpen) {
          e.stopPropagation();
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
      startValue
    ]
  );

  const endIsBlurPendingRef = useRef(false);
  const reportEndSettled = useCallback(
    (inputValue: string = state.endInputValue ?? '') => {
      const settled = resolveSettledValue({
        inputValue,
        required: fieldStates.end.required,
        minValue,
        maxValue,
        notBefore: startValue,
        customParseDate
      });

      if (!(inputValue === '' && isEndEmptyReportedRef.current)) {
        onValueSettled?.({ field: 'end', ...settled });
      }

      isEndEmptyReportedRef.current = inputValue === '';
    },
    [
      state.endInputValue,
      startValue,
      minValue,
      maxValue,
      customParseDate,
      onValueSettled,
      fieldStates.end.required
    ]
  );

  const commitEndBlur = useCallback(() => {
    const parsedDate = customParseDate
      ? customParseDate(state.endInputValue)
      : parseInputValue({ inputValue: state.endInputValue });
    const isParsedDateValid =
      isValid(parsedDate) &&
      isDateWithinRange(parsedDate, minValue, maxValue) &&
      !(startValue !== undefined && isBefore(parsedDate, startValue));

    const isRejected = !isParsedDateValid && !!state.endInputValue;

    dispatch({
      type: 'END_BLUR',
      isRejected,
      settledInputValue: keepTypedInput
        ? undefined
        : formatValue({ value: isParsedDateValid ? parsedDate : endValue, locale, formatDate })
    });

    if (isParsedDateValid && !isSameDay(parsedDate, endValue!)) {
      onChange?.({ startValue, endValue: parsedDate });
    } else if (!state.endInputValue && keepTypedInput && endValue !== undefined) {
      onChange?.({ startValue, endValue: undefined });
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
    reportEndSettled,
    keepTypedInput,
    locale,
    formatDate
  ]);

  const handleEndBlur = useCallback(
    (relatedTarget: Element | null = null) => {
      if (isInsideField('end', relatedTarget)) {
        endIsBlurPendingRef.current = true;
      } else {
        endIsBlurPendingRef.current = false;
        commitEndBlur();
      }
    },
    [commitEndBlur, isInsideField]
  );

  /** Commits a pending blur once focus leaves the field's boundary from one of its extra focusable elements. */
  const handleEndBoundaryBlur = useCallback(
    (e: FocusEvent | React.FocusEvent) => {
      // A direct `ClearableInput` inside a `EndGroup` reports through both - only the resolved boundary counts.
      if (e.currentTarget !== getFieldBoundary('end')) {
        return;
      }

      if (
        e.target !== endInputRef.current &&
        endIsBlurPendingRef.current &&
        !isInsideField('end', e.relatedTarget as Node | null)
      ) {
        endIsBlurPendingRef.current = false;
        commitEndBlur();
      }

      handleWidgetBlur(e as React.FocusEvent);
    },
    [getFieldBoundary, isInsideField, endInputRef, commitEndBlur, handleWidgetBlur]
  );

  const getEndWrapperProps = useCallback(
    (props: Omit<ElementProps<HTMLDivElement>, 'ref'> = {}) => {
      const { onBlur, onClick, ...other } = props;

      return {
        ref: endWrapperRef,
        onBlur: composeEventHandlers(onBlur, handleEndBoundaryBlur),
        onClick: composeEventHandlers(onClick, () => endInputRef.current?.focus()),
        ...other
      };
    },
    [handleEndBoundaryBlur, endInputRef]
  );

  const getEndGroupProps = useCallback(
    (props: ElementProps<HTMLDivElement> = {}) => {
      const { onMouseDown, onClick, onBlur, ...other } = props;
      const openOnClickProps = getOpenOnClickProps('end');

      return {
        ref: endGroupRef,
        onBlur: composeEventHandlers(onBlur, handleEndBoundaryBlur),
        onMouseDown: composeEventHandlers(onMouseDown, openOnClickProps.onMouseDown),
        onClick: composeEventHandlers(
          onClick,
          () => endInputRef.current?.focus(),
          openOnClickProps.onClick
        ),
        ...other
      };
    },
    [endInputRef, getOpenOnClickProps, handleEndBoundaryBlur]
  );

  /** Lets the native listener below always reach the latest handler, without re-registering. */
  const boundaryBlurHandlersRef = useRef({
    start: handleStartBoundaryBlur,
    end: handleEndBoundaryBlur
  });

  boundaryBlurHandlersRef.current = { start: handleStartBoundaryBlur, end: handleEndBoundaryBlur };

  /** Called by `Start`/`End` with their own `wrapperRef`, once mounted; returns a cleanup. */
  const registerFieldWrapperRef = useCallback(
    (field: DatePickerRangeField, wrapperRef: RefObject<HTMLElement | null>) => {
      const element = wrapperRef.current;
      const handleFocusOut = (e: FocusEvent) => boundaryBlurHandlersRef.current[field](e);

      fieldWrapperRefsRef.current[field] = wrapperRef;
      element?.addEventListener('focusout', handleFocusOut);

      return () => {
        element?.removeEventListener('focusout', handleFocusOut);

        if (fieldWrapperRefsRef.current[field] === wrapperRef) {
          fieldWrapperRefsRef.current = { ...fieldWrapperRefsRef.current, [field]: undefined };
        }
      };
    },
    []
  );

  const getEndInputProps = useCallback(
    (props: IFieldInputProps = {}) => {
      const { onChange: onInputChange, onFocus, onKeyDown, onBlur, ...other } = props;

      const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        dispatch({ type: 'END_INPUT_ONCHANGE', value: inputValue });

        if (inputValue !== '') {
          isEndEmptyReportedRef.current = false;
        } else if (state.endInputValue !== '') {
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
          setIsOpen(false);
        } else if ((e.key === KEYS.ESCAPE || (e.key === KEYS.TAB && !e.shiftKey)) && isOpen) {
          if (e.key === KEYS.ESCAPE) {
            e.stopPropagation();
          }

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
      endValue
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
        'aria-disabled': isCalendarDisabled || undefined,
        'aria-readonly': isCalendarReadOnly || undefined,
        /** Only so focus can land here when the calendar becomes disabled - never a tab stop. */
        tabIndex: isCalendarDisabled ? -1 : undefined,
        'data-test-id': 'calendar-internal-wrapper',
        onMouseLeave: composeEventHandlers(onMouseLeave, handleMouseLeave),
        ...other
      };
    },
    [headingId0, headingId1, isCalendarDisabled, isCalendarReadOnly]
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

      /** Picking a day before a disabled/read-only start value, or after a disabled/read-only end value, would have to move it. */
      const wouldMoveDisabledOrReadOnlyValue =
        (disabledOrReadOnlyFields.start &&
          startValue !== undefined &&
          isBefore(date, startValue) &&
          !isSameDay(date, startValue)) ||
        (disabledOrReadOnlyFields.end &&
          endValue !== undefined &&
          isAfter(date, endValue) &&
          !isSameDay(date, endValue));

      /** A read-only calendar can't select anything, so only genuinely unavailable days are marked - not those that would move a value. */
      const isDisabled =
        !isDateWithinRange(date, minValue, maxValue) ||
        isCalendarDisabled ||
        (!isCalendarReadOnly && wouldMoveDisabledOrReadOnlyValue);

      const isCurrentDate = isToday(date);
      /** A disabled calendar has no tab stops, like the disabled fields it serves. */
      let tabIndex: number | undefined;

      if (!isCalendarDisabled) {
        tabIndex = isSameDay(date, state.focusedDate) ? 0 : -1;
      }

      /** Space selects without closing, per the APG date picker - Enter and clicks select and close. */
      const handleClick = (target?: HTMLTableCellElement | null, keepOpen = false) => {
        if (isDisabled || isCalendarReadOnly) {
          return;
        }

        let selection = resolveRangeSelection({
          date,
          startValue,
          endValue,
          isStartActive: state.isStartFocused || state.isStartValueInvalid,
          isEndActive: state.isEndFocused || state.isEndValueInvalid,
          disabledOrReadOnlyField: getDisabledOrReadOnlyField()
        });

        if (selection.isOutOfOrder && !keepTypedInput) {
          selection = {
            startValue: date,
            endValue: undefined,
            field: 'start',
            isOutOfOrder: false
          };
        }

        const { field, isOutOfOrder, ...result } = selection;

        dispatch({
          type: 'CLICK_DATE',
          selection,
          previousStartValue: startValue,
          previousEndValue: endValue,
          locale,
          formatDate
        });

        if (!isOutOfOrder) {
          onChange?.(result);
        }

        const fieldValue = field === 'start' ? result.startValue : result.endValue;

        onValueSettled?.({
          field,
          date: isOutOfOrder ? undefined : fieldValue,
          inputValue: formatValue({ value: fieldValue, locale, formatDate }),
          valid: !isOutOfOrder,
          ...(isOutOfOrder ? { reason: 'out-of-order' as const } : {})
        });

        if (hasDialog) {
          if (
            !keepOpen &&
            !isOutOfOrder &&
            result.startValue !== undefined &&
            result.endValue !== undefined
          ) {
            setIsOpen(false);
            requestCellFocus((field === 'start' ? startInputRef : endInputRef).current);
          }
        } else {
          requestCellFocus(target);
        }
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
        if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
          e.preventDefault();
          handleClick(e.currentTarget, e.key === KEYS.SPACE);

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

        e.preventDefault();
        pendingGridFocusRef.current = true;
        dispatch({ type: 'FOCUS_DATE', value: targetDate });
      };

      return {
        tabIndex,
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
      disabledOrReadOnlyFields,
      isCalendarDisabled,
      isCalendarReadOnly,
      getDisabledOrReadOnlyField,
      keepTypedInput,
      requestCellFocus,
      locale,
      formatDate
    ]
  );

  /** Hovering only previews a selection, so there's nothing to preview once neither field can change. */
  const setHoverDate = useCallback(
    (date: Date | undefined) => {
      if (!(isCalendarDisabled || isCalendarReadOnly)) {
        dispatch({ type: 'HOVER_DATE', value: date });
      }
    },
    [isCalendarDisabled, isCalendarReadOnly]
  );

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
      registerFieldState,
      registerFieldWrapperRef,
      registerTriggerRef,
      isCalendarDisabled,
      isCalendarReadOnly,
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
      registerFieldState,
      registerFieldWrapperRef,
      registerTriggerRef,
      isCalendarDisabled,
      isCalendarReadOnly,
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
