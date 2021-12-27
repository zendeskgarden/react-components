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
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Manager, Popper, Reference } from 'react-popper';
import { Modifiers } from 'popper.js';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';
import {
  getRtlPopperPlacement,
  getPopperPlacement,
  GARDEN_PLACEMENT,
  POPPER_PLACEMENT
} from './utils/garden-placements';
import Calendar from './components/Calendar';
import { datepickerReducer, retrieveInitialState } from './utils/datepicker-reducer';
import { DatepickerContext } from './utils/useDatepickerContext';
import { StyledMenu, StyledMenuWrapper } from '../../styled';

export interface IDatepickerProps {
  /**
   * Sets the selected date
   */
  value?: Date;
  /**
   * Handles date change
   *
   * @param {Date} date The selected date
   */
  onChange?: (date: Date) => void;
  /**
   * Customizes the input element's date formatting
   *
   *  @param {Date} date The selected date
   *  @returns {string} a formatted date string
   */
  formatDate?: (date: Date) => string;
  /**
   * Applies locale-based formatting.
   * Accepts all valid `Intl` [locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
   */
  locale?: string;
  /**
   * Disables dates before this value on the calendar
   */
  minValue?: Date;
  /**
   * Disables dates after this value on the calendar
   */
  maxValue?: Date;
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
  /**
   * Overrides default date parsing
   *
   * @param {string} inputValue A localized input value
   * @returns {Date} the parsed date
   */
  customParseDate?: (inputValue: string) => Date;
  /**
   * Defines the ref key used to position the calendar
   */
  refKey?: string;
  /**
   * Adjusts the position of the calendar
   **/
  placement?: GARDEN_PLACEMENT;
  /**
   * Passes configuration options to the [Popper instance](https://popper.js.org/docs/v2/modifiers/)
   */
  popperModifiers?: Modifiers;
  /**
   * Animates the calendar
   */
  isAnimated?: boolean;
  /**
   * Allows the calendar to reposition during browser resize events
   */
  eventsEnabled?: boolean;
  /**
   * Sets the `z-index` of the calendar
   */
  zIndex?: number;
}

export const Datepicker: React.FunctionComponent<IDatepickerProps> = props => {
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
    customParseDate
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

  const [isVisible, setVisible] = useState(state.isOpen);

  useEffect(() => {
    let timeout: any;

    if (state.isOpen) {
      setVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setVisible(false), 200);
    } else {
      setVisible(false);
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
                placement={currentPlacement as POPPER_PLACEMENT}
                zIndex={zIndex}
                data-test-id="datepicker-menu"
                data-test-open={state.isOpen}
                data-test-rtl={theme.rtl}
              >
                {(state.isOpen || isVisible) && (
                  <StyledMenu>
                    <Calendar
                      isCompact={isCompact}
                      value={value}
                      minValue={minValue}
                      maxValue={maxValue}
                      locale={locale}
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
};

Datepicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.any,
  formatDate: PropTypes.func,
  locale: PropTypes.any,
  minValue: PropTypes.any,
  maxValue: PropTypes.any,
  isCompact: PropTypes.bool,
  customParseDate: PropTypes.any,
  refKey: PropTypes.string,
  placement: PropTypes.oneOf([
    'auto',
    'top',
    'top-start',
    'top-end',
    'end',
    'end-top',
    'end-bottom',
    'bottom',
    'bottom-start',
    'bottom-end',
    'start',
    'start-top',
    'start-bottom'
  ]),
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
