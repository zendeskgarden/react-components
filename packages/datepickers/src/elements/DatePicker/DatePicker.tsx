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
import { IDatePickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import { datepickerReducer, retrieveInitialState } from './utils/date-picker-reducer';
import { DatePickerContext } from './utils/useDatePickerContext';
import { StyledMenu, StyledMenuWrapper } from '../../styled';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';
import { Input } from './components/Input';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const DatePicker = forwardRef<HTMLDivElement, IDatePickerProps>((props, calendarRef) => {
  const {
    appendToNode,
    children,
    placement: _placement,
    zIndex,
    isAnimated,
    refKey,
    value,
    isCompact,
    onChange,
    formatDate,
    minValue,
    maxValue,
    locale,
    weekStartsOn,
    customParseDate,
    ...menuProps
  } = props;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedReducer = useCallback(
    datepickerReducer({ value, formatDate, locale, customParseDate, onChange }),
    [value, formatDate, locale, onChange, customParseDate]
  );
  const [state, dispatch] = useReducer(memoizedReducer, retrieveInitialState(props));
  const triggerRef = useRef<HTMLInputElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(state.isOpen);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
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

  const Node = (
    <StyledMenuWrapper
      ref={floatingRef}
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
        <StyledMenu {...menuProps}>
          <Calendar
            ref={calendarRef}
            isCompact={isCompact}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            locale={locale}
            weekStartsOn={weekStartsOn}
          />
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
  zIndex: PropTypes.number
};

DatePicker.defaultProps = {
  placement: PLACEMENT_DEFAULT,
  refKey: 'ref',
  isAnimated: true,
  zIndex: 1000,
  locale: 'en-US'
};
