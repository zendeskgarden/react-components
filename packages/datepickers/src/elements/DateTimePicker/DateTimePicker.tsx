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
import { IDateTimePickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import { TimePanel } from './components/TimePanel';
import { dateTimepickerReducer, retrieveInitialState } from './utils/date-time-picker-reducer';
import { DateTimePickerContext } from './utils/useDateTimePickerContext';
import { StyledMenu, StyledMenuWrapper, StyledDateTimePicker } from '../../styled';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';
import { Input } from './components/Input';
import { is12HourLocale } from './utils/time-utils';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const DateTimePicker = forwardRef<HTMLDivElement, IDateTimePickerProps>(
  (props, calendarRef) => {
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
      timeStep = 1,
      isAmPm,
      ...menuProps
    } = props;
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memoizedReducer = useCallback(
      dateTimepickerReducer({ value, formatDate, locale, customParseDate, onChange }),
      [value, formatDate, locale, onChange, customParseDate]
    );
    const [state, dispatch] = useReducer(memoizedReducer, retrieveInitialState(props));
    const triggerRef = useRef<HTMLInputElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(state.isOpen);
    const resolvedIsAmPm = useMemo(
      () => (isAmPm === undefined ? is12HourLocale(locale) : isAmPm),
      [isAmPm, locale]
    );

    const contextValue = useMemo(
      () => ({
        state,
        dispatch,
        isAmPm: resolvedIsAmPm,
        timeStep,
        minValue,
        maxValue,
        value,
        isCompact,
        locale
      }),
      [state, dispatch, resolvedIsAmPm, timeStep, minValue, maxValue, value, isCompact, locale]
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
        timeout = setTimeout(() => setIsVisible(false), 200);
      } else {
        setIsVisible(false);
      }

      return () => clearTimeout(timeout);
    }, [state.isOpen, isAnimated]);

    useEffect(() => {
      dispatch({ type: 'CONTROLLED_VALUE_CHANGE', value });
    }, [value]);

    useEffect(() => {
      dispatch({ type: 'CONTROLLED_LOCALE_CHANGE' });
    }, [locale]);

    const Node = (
      <StyledMenuWrapper
        ref={floatingRef}
        style={{ transform }}
        $isAnimated={!!isAnimated && (state.isOpen || isVisible)}
        $placement={placement}
        $zIndex={zIndex}
        aria-hidden={!state.isOpen || undefined}
        data-test-id="datetimepicker-menu"
        data-test-open={state.isOpen}
        data-test-rtl={theme.rtl}
      >
        {!!(state.isOpen || isVisible) && (
          <StyledMenu {...menuProps}>
            <StyledDateTimePicker $isCompact={!!isCompact}>
              <Calendar
                ref={calendarRef}
                isCompact={isCompact}
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                locale={locale}
                weekStartsOn={weekStartsOn}
              />
              <TimePanel />
            </StyledDateTimePicker>
          </StyledMenu>
        )}
      </StyledMenuWrapper>
    );

    return (
      <>
        <Input
          element={Child}
          dispatch={dispatch}
          state={state}
          refKey={refKey!}
          ref={mergeRefs([triggerRef, Child.ref ? Child.ref : null])}
        />
        <DateTimePickerContext.Provider value={contextValue}>
          {appendToNode ? createPortal(Node, appendToNode) : Node}
        </DateTimePickerContext.Provider>
      </>
    );
  }
);

DateTimePicker.displayName = 'DateTimePicker';

DateTimePicker.propTypes = {
  appendToNode: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
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
  timeStep: PropTypes.number,
  isAmPm: PropTypes.bool
};
