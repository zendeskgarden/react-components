/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useEffect,
  useReducer,
  useCallback,
  useState,
  useContext,
  useMemo,
  forwardRef
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { autoPlacement, autoUpdate, flip, platform, useFloating } from '@floating-ui/react-dom';
import { KEYS } from '@zendeskgarden/container-utilities';
import { IDatePickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import {
  datepickerReducer,
  formatInputValue,
  resolveSettledValue,
  retrieveInitialState
} from './utils/date-picker-reducer';
import { DatePickerContext } from './utils/useDatePickerContext';
import { useDatePicker } from './utils/useDatePicker';
import { InputGroup } from '@zendeskgarden/react-forms';
import { StyledMenu, StyledMenuWrapper } from '../../styled';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';
import { Input } from './components/Input';
import { CalendarButton } from './components/CalendarButton';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const DatePicker = forwardRef<HTMLDivElement, IDatePickerProps>((props, calendarRef) => {
  const {
    appendToNode,
    children,
    placement: _placement = PLACEMENT_DEFAULT,
    zIndex = 1000,
    isAnimated = true,
    refKey = 'ref',
    value,
    isCompact,
    onChange,
    formatDate,
    minValue,
    maxValue,
    locale = 'en-US',
    weekStartsOn,
    customParseDate,
    openCalendarLabel,
    previousMonthLabel,
    nextMonthLabel,
    onValueSettled,
    ...menuProps
  } = props;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedReducer = useCallback(
    datepickerReducer({ value, formatDate, locale, customParseDate }),
    [value, formatDate, locale, customParseDate]
  );
  const [state, dispatch] = useReducer(memoizedReducer, retrieveInitialState(props));
  const triggerRef = useRef<HTMLInputElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const shouldFocusGridRef = useRef(false);
  const [isVisible, setIsVisible] = useState(state.isOpen);
  const { menuId, buttonId, getInputProps } = useDatePicker({ isOpen: state.isOpen });

  const contextValue = useMemo(
    () => ({ state, dispatch, getInputProps }),
    [state, dispatch, getInputProps]
  );
  const [floatingPlacement] = getFloatingPlacements(
    theme,
    _placement === 'auto' ? PLACEMENT_DEFAULT : _placement!
  );

  const {
    refs,
    placement,
    update,
    floatingStyles: { transform }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: { reference: triggerRef?.current, floating: floatingRef?.current },
    placement: floatingPlacement,
    middleware: [_placement === 'auto' ? autoPlacement() : flip()]
  });

  const Child = React.Children.only<React.ReactElement & React.RefAttributes<HTMLInputElement>>(
    children
  );

  useEffect(() => {
    // Only allow positioning updates on visible tooltip.
    let cleanup: () => void;

    if (state.isOpen && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }

    return () => cleanup && cleanup();
  }, [state.isOpen, refs.reference, refs.floating, update]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (state.isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeout);
  }, [state.isOpen, isAnimated]);

  /**
   * Dispatch update to reducer when controlled value is changed
   */
  useEffect(() => {
    dispatch({ type: 'CONTROLLED_VALUE_CHANGE', value });
  }, [value]);

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_LOCALE_CHANGE' });
  }, [locale]);

  /**
   * Move focus onto the selected date, today, or the first day cell in the
   * grid, in that priority order.
   */
  const focusIntoGrid = useCallback(() => {
    if (!floatingRef.current) {
      return;
    }

    const target =
      floatingRef.current.querySelector<HTMLElement>('[data-test-selected="true"]') ||
      floatingRef.current.querySelector<HTMLElement>('[data-test-today="true"]') ||
      floatingRef.current.querySelector<HTMLElement>('[data-test-id="day"]');

    target?.focus();
  }, []);

  /**
   * When the trigger button opens the calendar, wait for the grid to render
   * before moving focus into it.
   */
  useEffect(() => {
    if (state.isOpen && shouldFocusGridRef.current) {
      focusIntoGrid();
      shouldFocusGridRef.current = false;
    }
  }, [state.isOpen, focusIntoGrid]);

  const openOrFocusGrid = useCallback(() => {
    if (state.isOpen) {
      focusIntoGrid();
    } else {
      dispatch({ type: 'OPEN' });
      shouldFocusGridRef.current = true;
    }
  }, [state.isOpen, focusIntoGrid]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === KEYS.DOWN) {
        openOrFocusGrid();
      }
    },
    [openOrFocusGrid]
  );

  /**
   * Reports whether the typed input currently holds a valid date, for
   * closes that don't come from a fresh calendar selection.
   */
  const settleValue = useCallback(() => {
    onValueSettled?.(
      resolveSettledValue({
        inputValue: state.inputValue,
        required: Child.props.required,
        minValue,
        maxValue,
        customParseDate
      })
    );
  }, [state.inputValue, customParseDate, minValue, maxValue, onValueSettled, Child.props.required]);

  /**
   * Settle the typed value and close the calendar when focus moves outside
   * the widget (input group and popover), or just close when it moves back
   * onto the input, per the non-modal APG dialog pattern. Checks
   * `event.relatedTarget`, matching the `useCombobox` convention.
   *
   * Checking `widgetRef` (rather than enumerating specific children) means
   * this tolerates any focusable element the input group's child renders,
   * like `ClearableInput`'s clear button — moving focus there stays "inside"
   * the widget and doesn't settle prematurely.
   *
   * Skips `settleValue()` when focus returns to the input, since that also
   * happens as a side effect of selecting a day, which already reports its
   * own settled value via `Calendar`'s `onChange`; settling here too would
   * report a stale, pre-selection value.
   */
  const handleWidgetBlur = useCallback(
    (e: React.FocusEvent) => {
      const nextTarget = e.relatedTarget as Node | null;
      const isReturningToInput = !!nextTarget && triggerRef.current === nextTarget;
      const isInsideWidget =
        !!nextTarget &&
        (widgetRef.current?.contains(nextTarget) || floatingRef.current?.contains(nextTarget));

      if (isReturningToInput) {
        if (state.isOpen) {
          dispatch({ type: 'CLOSE' });
        }
      } else if (!isInsideWidget) {
        settleValue();

        if (state.isOpen) {
          dispatch({ type: 'CLOSE' });
        }
      }
    },
    [state.isOpen, settleValue]
  );

  const Node = (
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role -- native <dialog> couples focus/backdrop behavior we don't want for this floating, non-modal popover
    <StyledMenuWrapper
      ref={floatingRef}
      id={menuId}
      role="dialog"
      aria-modal="false"
      aria-labelledby={buttonId}
      style={{ transform }}
      $isAnimated={!!isAnimated && (state.isOpen || isVisible)}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!state.isOpen || undefined}
      data-test-id="datepicker-menu"
      data-test-open={state.isOpen}
      data-test-rtl={theme.rtl}
    >
      {!!(state.isOpen || isVisible) && (
        <StyledMenu
          {...menuProps}
          onBlur={handleWidgetBlur}
          onKeyDown={e => {
            if (e.key === KEYS.ESCAPE) {
              settleValue();
              dispatch({ type: 'CLOSE' });
              triggerButtonRef.current?.focus();
            }
          }}
        >
          <Calendar
            ref={calendarRef}
            isCompact={isCompact}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            locale={locale}
            weekStartsOn={weekStartsOn}
            previousMonthLabel={previousMonthLabel}
            nextMonthLabel={nextMonthLabel}
            onChange={date => {
              onChange?.(date);
              onValueSettled?.({
                date,
                inputValue: formatInputValue({ date, locale, formatDate }),
                valid: true
              });
            }}
            inputRef={triggerRef}
          />
        </StyledMenu>
      )}
    </StyledMenuWrapper>
  );

  return (
    <DatePickerContext.Provider value={contextValue}>
      <InputGroup ref={widgetRef} isUnified isCompact={isCompact} onBlur={handleWidgetBlur}>
        <Input
          element={Child}
          refKey={refKey!}
          value={value}
          minValue={minValue}
          maxValue={maxValue}
          onChange={onChange}
          onKeyDown={handleInputKeyDown}
          customParseDate={customParseDate}
          ref={mergeRefs([triggerRef, Child.ref ? Child.ref : null])}
        />
        <CalendarButton
          ref={triggerButtonRef}
          id={buttonId}
          isCompact={isCompact}
          openCalendarLabel={openCalendarLabel}
          aria-expanded={state.isOpen}
          aria-controls={menuId}
          onClick={openOrFocusGrid}
        />
      </InputGroup>
      {appendToNode ? createPortal(Node, appendToNode) : Node}
    </DatePickerContext.Provider>
  );
});

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
  appendToNode: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  onValueSettled: PropTypes.func,
  formatDate: PropTypes.func,
  locale: PropTypes.any,
  weekStartsOn: PropTypes.oneOf(WEEK_STARTS_ON),
  minValue: PropTypes.any,
  maxValue: PropTypes.any,
  isCompact: PropTypes.bool,
  customParseDate: PropTypes.any,
  refKey: PropTypes.string,
  placement: PropTypes.oneOf(PLACEMENT),
  isAnimated: PropTypes.bool,
  zIndex: PropTypes.number,
  openCalendarLabel: PropTypes.string
};
