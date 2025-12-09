/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useContext, useCallback, useReducer, useRef, useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useFloating, autoPlacement, flip, platform, autoUpdate } from '@floating-ui/react-dom';
import { PLACEMENT, WEEK_STARTS_ON } from '../../types/index.js';
import { Calendar } from './components/Calendar.js';
import { datepickerReducer, retrieveInitialState } from './utils/date-picker-reducer.js';
import { DatePickerContext } from './utils/useDatePickerContext.js';
import { StyledMenu } from '../../styled/StyledMenu.js';
import { StyledMenuWrapper } from '../../styled/StyledMenuWrapper.js';
import '../../styled/StyledDatePicker.js';
import '../../styled/StyledRangeCalendar.js';
import '../../styled/StyledHeader.js';
import '../../styled/StyledHeaderPaddle.js';
import '../../styled/StyledHeaderLabel.js';
import '../../styled/StyledCalendar.js';
import '../../styled/StyledCalendarItem.js';
import '../../styled/StyledDayLabel.js';
import '../../styled/StyledHighlight.js';
import '../../styled/StyledDay.js';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';
import { Input } from './components/Input.js';

const PLACEMENT_DEFAULT = 'bottom-start';
const DatePicker = forwardRef((props, calendarRef) => {
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
    ...menuProps
  } = props;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const memoizedReducer = useCallback(datepickerReducer({
    value,
    formatDate,
    locale,
    customParseDate,
    onChange
  }), [value, formatDate, locale, onChange, customParseDate]);
  const [state, dispatch] = useReducer(memoizedReducer, retrieveInitialState(props));
  const triggerRef = useRef(null);
  const floatingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(state.isOpen);
  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);
  const [floatingPlacement] = getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: [_placement === 'auto' ? autoPlacement() : flip()]
  });
  const Child = React__default.Children.only(children);
  useEffect(() => {
    let cleanup;
    if (state.isOpen && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [state.isOpen, refs.reference, refs.floating, update]);
  useEffect(() => {
    let timeout;
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
    dispatch({
      type: 'CONTROLLED_VALUE_CHANGE',
      value
    });
  }, [value]);
  useEffect(() => {
    dispatch({
      type: 'CONTROLLED_LOCALE_CHANGE'
    });
  }, [locale]);
  const Node = React__default.createElement(StyledMenuWrapper, {
    ref: floatingRef,
    style: {
      transform
    },
    $isAnimated: !!isAnimated && (state.isOpen || isVisible),
    $placement: placement,
    $zIndex: zIndex,
    "aria-hidden": !state.isOpen || undefined
  }, !!(state.isOpen || isVisible) && React__default.createElement(StyledMenu, menuProps, React__default.createElement(Calendar, {
    ref: calendarRef,
    isCompact: isCompact,
    value: value,
    minValue: minValue,
    maxValue: maxValue,
    locale: locale,
    weekStartsOn: weekStartsOn
  })));
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Input, {
    element: Child,
    dispatch: dispatch,
    state: state,
    refKey: refKey,
    ref: mergeRefs([triggerRef, Child.ref ? Child.ref : null])
  }), React__default.createElement(DatePickerContext.Provider, {
    value: contextValue
  }, appendToNode ? createPortal(Node, appendToNode) : Node));
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

export { DatePicker };
