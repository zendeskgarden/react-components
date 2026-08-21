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
import { KEYS, useId } from '@zendeskgarden/container-utilities';
import { IDatePickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import {
  datepickerReducer,
  formatInputValue,
  resolveSettledValue,
  retrieveInitialState
} from './utils/date-picker-reducer';
import { DatePickerContext } from './utils/useDatePickerContext';
import { StyledInputGroup, StyledMenu, StyledMenuWrapper } from '../../styled';
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
  const floatingRef = useRef<HTMLDivElement>(null);
  const shouldFocusGridRef = useRef(false);
  const [isVisible, setIsVisible] = useState(state.isOpen);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const [floatingPlacement] = getFloatingPlacements(
    theme,
    _placement === 'auto' ? PLACEMENT_DEFAULT : _placement!
  );
  const menuId = useId();

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
   * Close the calendar when a click or focus event lands outside the input,
   * trigger button, and popover, per the non-modal APG dialog pattern.
   */
  useEffect(() => {
    if (!state.isOpen) {
      return undefined;
    }

    const isOutsideWidget = (target: Node) =>
      !triggerRef.current?.contains(target) &&
      !triggerButtonRef.current?.contains(target) &&
      !floatingRef.current?.contains(target);

    const handleOutsideInteraction = (e: Event) => {
      if (isOutsideWidget(e.target as Node)) {
        settleValue();
        dispatch({ type: 'CLOSE' });
      }
    };

    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('focusin', handleOutsideInteraction);

    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('focusin', handleOutsideInteraction);
    };
  }, [state.isOpen, settleValue]);

  const Node = (
    <StyledMenuWrapper
      ref={floatingRef}
      id={menuId}
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
    <>
      <StyledInputGroup>
        <Input
          element={Child}
          dispatch={dispatch}
          state={state}
          refKey={refKey!}
          value={value}
          minValue={minValue}
          maxValue={maxValue}
          onChange={onChange}
          onValueSettled={onValueSettled}
          customParseDate={customParseDate}
          ref={mergeRefs([triggerRef, Child.ref ? Child.ref : null])}
        />
        <CalendarButton
          ref={triggerButtonRef}
          isCompact={isCompact}
          openCalendarLabel={openCalendarLabel}
          aria-expanded={state.isOpen}
          aria-controls={menuId}
          onClick={() => {
            if (state.isOpen) {
              focusIntoGrid();
            } else {
              dispatch({ type: 'OPEN' });
              shouldFocusGridRef.current = true;
            }
          }}
        />
      </StyledInputGroup>
      <DatePickerContext.Provider value={contextValue}>
        {appendToNode ? createPortal(Node, appendToNode) : Node}
      </DatePickerContext.Provider>
    </>
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
