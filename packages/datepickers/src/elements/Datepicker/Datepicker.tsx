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
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { autoPlacement, autoUpdate, useFloating } from '@floating-ui/react-dom';
import { KEYS, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { IDatepickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import { datepickerReducer, retrieveInitialState } from './utils/datepicker-reducer';
import { DatepickerContext } from './utils/useDatepickerContext';
import { StyledMenu, StyledMenuWrapper } from '../../styled';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Datepicker = forwardRef<HTMLDivElement, IDatepickerProps>((props, calendarRef) => {
  const {
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
  const isInputMouseDownRef = useRef(false);
  const triggerRef = useRef<HTMLInputElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(state.isOpen);

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
    elements: { reference: triggerRef?.current, floating: floatingRef?.current },
    placement: floatingPlacement,
    middleware: _placement === 'auto' ? [autoPlacement()] : undefined
  });

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

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const Input = useCallback(() => {
    const Child = React.Children.only<React.ReactElement & React.RefAttributes<HTMLInputElement>>(
      children
    );

    const handleBlur = () => {
      dispatch({ type: 'CLOSE' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'MANUALLY_UPDATE_INPUT', value: e.target.value });
    };

    const handleClick = () => {
      // Ensure click/focus events from associated labels are not triggered
      if (isInputMouseDownRef.current && !state.isOpen) {
        dispatch({ type: 'OPEN' });
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case KEYS.ESCAPE:
        case KEYS.ENTER:
          dispatch({ type: 'CLOSE' });
          break;
        case KEYS.UP:
        case KEYS.DOWN:
        case KEYS.SPACE:
          dispatch({ type: 'OPEN' });
          break;
      }
    };

    const handleMouseDown = () => {
      isInputMouseDownRef.current = true;
    };

    const handleMouseUp = () => {
      setTimeout(() => {
        isInputMouseDownRef.current = false;
      }, 0);
    };

    return React.cloneElement(Child, {
      [refKey!]: mergeRefs([triggerRef, Child.ref ? Child.ref : null]),
      onMouseDown: composeEventHandlers(Child.props.onMouseDown, handleMouseDown),
      onMouseUp: composeEventHandlers(Child.props.onMouseUp, handleMouseUp),
      onClick: composeEventHandlers(Child.props.onClick, handleClick),
      onBlur: composeEventHandlers(Child.props.onBlur, handleBlur),
      onChange: composeEventHandlers(Child.props.onChange, handleChange),
      onKeyDown: composeEventHandlers(Child.props.onKeyDown, handleKeyDown),
      autoComplete: 'off',
      value: state.inputValue
    });
  }, [children, refKey, state.inputValue, state.isOpen]);

  return (
    <DatepickerContext.Provider value={contextValue}>
      <Input />
      <StyledMenuWrapper
        ref={floatingRef}
        style={{ transform }}
        isHidden={!state.isOpen}
        isAnimated={isAnimated && (state.isOpen || isVisible)}
        placement={placement}
        zIndex={zIndex}
        data-test-id="datepicker-menu"
        data-test-open={state.isOpen}
        data-test-rtl={theme.rtl}
      >
        {(state.isOpen || isVisible) && (
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
    </DatepickerContext.Provider>
  );
});

Datepicker.displayName = 'Datepicker';

Datepicker.propTypes = {
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

Datepicker.defaultProps = {
  placement: PLACEMENT_DEFAULT,
  refKey: 'ref',
  isAnimated: true,
  zIndex: 1000,
  locale: 'en-US'
};
