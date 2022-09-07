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
import { ThemeContext } from 'styled-components';
import { Manager, Popper, Reference } from 'react-popper';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { IDatepickerProps, PLACEMENT, PopperPlacement } from '../../types';
import { getRtlPopperPlacement, getPopperPlacement } from './utils/garden-placements';
import { Calendar } from './components/Calendar';
import { datepickerReducer, retrieveInitialState } from './utils/datepicker-reducer';
import { DatepickerContext } from './utils/useDatepickerContext';
import { StyledMenu, StyledMenuWrapper } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Datepicker = forwardRef<HTMLDivElement, IDatepickerProps>((props, calendarRef) => {
  const {
    children,
    placement,
    popperModifiers,
    eventsEnabled,
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
  const theme = useContext(ThemeContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedReducer = useCallback(
    datepickerReducer({ value, formatDate, locale, customParseDate, onChange }),
    [value, formatDate, locale, onChange, customParseDate]
  );
  const [state, dispatch] = useReducer(memoizedReducer, retrieveInitialState(props));
  const scheduleUpdateRef = useRef<(() => void) | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInputMouseDownRef = useRef(false);

  /**
   * Recalculate popper placement while open to allow animations to complete.
   * This must be ran every render to allow for the number of items to change
   * and still be placed correctly.
   **/
  useEffect(() => {
    if (state.isOpen && scheduleUpdateRef.current) {
      scheduleUpdateRef.current();
    }
  });

  const [isVisible, setIsVisible] = useState(state.isOpen);

  useEffect(() => {
    let timeout: any;

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

  const popperPlacement = theme.rtl
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <DatepickerContext.Provider value={contextValue}>
      <Manager>
        <Reference>
          {({ ref }) => {
            const childElement = React.Children.only(children as React.ReactElement);

            return React.cloneElement(childElement, {
              [refKey!]: (refValue: HTMLElement) => {
                (ref as any)(refValue);
                (inputRef as any).current = refValue;
              },
              onMouseDown: composeEventHandlers(childElement.props.onMouseDown, () => {
                isInputMouseDownRef.current = true;
              }),
              onMouseUp: composeEventHandlers(childElement.props.onMouseUp, () => {
                setTimeout(() => {
                  isInputMouseDownRef.current = false;
                }, 0);
              }),
              onClick: composeEventHandlers(childElement.props.onClick, () => {
                /** Ensure click/focus events from associated labels are not triggered */
                if (isInputMouseDownRef.current && !state.isOpen) {
                  dispatch({ type: 'OPEN' });
                }
              }),
              onBlur: composeEventHandlers(childElement.props.onBlur, () => {
                dispatch({ type: 'CLOSE' });
              }),
              onChange: composeEventHandlers(
                childElement.props.onChange,
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: 'MANUALLY_UPDATE_INPUT', value: e.target.value });
                }
              ),
              onKeyDown: composeEventHandlers(
                childElement.props.onKeyDown,
                (e: React.KeyboardEvent<HTMLInputElement>) => {
                  switch (e.keyCode) {
                    case KEY_CODES.ESCAPE:
                    case KEY_CODES.ENTER:
                      dispatch({ type: 'CLOSE' });
                      break;
                    case KEY_CODES.UP:
                    case KEY_CODES.DOWN:
                    case KEY_CODES.SPACE:
                      dispatch({ type: 'OPEN' });
                      break;
                  }
                }
              ),
              autoComplete: 'off',
              value: state.inputValue
            });
          }}
        </Reference>
        <Popper
          placement={popperPlacement}
          modifiers={popperModifiers}
          // Disable position updating on scroll events while menu is closed
          eventsEnabled={state.isOpen && eventsEnabled}
        >
          {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
            scheduleUpdateRef.current = scheduleUpdate;

            return (
              <StyledMenuWrapper
                ref={ref}
                style={style}
                isHidden={!state.isOpen}
                isAnimated={isAnimated && (state.isOpen || isVisible)}
                placement={currentPlacement as PopperPlacement}
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
            );
          }}
        </Popper>
      </Manager>
    </DatepickerContext.Provider>
  );
});

Datepicker.displayName = 'Datepicker';

Datepicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.any,
  formatDate: PropTypes.func,
  locale: PropTypes.any,
  weekStartsOn: PropTypes.number,
  minValue: PropTypes.any,
  maxValue: PropTypes.any,
  isCompact: PropTypes.bool,
  customParseDate: PropTypes.any,
  refKey: PropTypes.string,
  placement: PropTypes.oneOf(PLACEMENT),
  popperModifiers: PropTypes.any,
  isAnimated: PropTypes.bool,
  eventsEnabled: PropTypes.bool,
  zIndex: PropTypes.number
};

Datepicker.defaultProps = {
  placement: 'bottom-start',
  refKey: 'ref',
  isAnimated: true,
  eventsEnabled: true,
  zIndex: 1000,
  locale: 'en-US'
};
