/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useReducer, useCallback, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import isBefore from 'date-fns/isBefore';
import parse from 'date-fns/parse';
import { isRtl, withTheme } from '@zendeskgarden/react-theming';
import { KEY_CODES } from '@zendeskgarden/container-utilities';

import { StyledMenu } from '../styled';
import {
  getRtlPopperPlacement,
  getPopperPlacement,
  GARDEN_PLACEMENT
} from './utils/garden-placements';
import Calendar from './components/Calendar';
import { datepickerReducer, retrieveInitialState } from './utils/datepicker-reducer';
import { DatepickerContext } from './utils/useDatepickerContext';

/**
 * Parse string input value using current locale and date formats
 */
function parseInputValue({ inputValue }: { inputValue: string }): Date {
  const MINIMUM_DATE = new Date(1001, 0, 0);
  let tryParseDate = parse(inputValue, 'P', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue, 'PP', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  tryParseDate = parse(inputValue, 'PPP', new Date());

  if (isValid(tryParseDate) && !isBefore(tryParseDate, MINIMUM_DATE)) {
    return tryParseDate;
  }

  return new Date(NaN);
}

export interface IDatepickerProps {
  /**
   * The selected date to display
   */
  value?: Date;
  /**
   * Returns the parsed date
   */
  onChange?: (date: Date) => void;
  /**
   * Allows customization of date formatting within input.
   */
  formatDate?: (date: Date) => string;
  /**
   * Accepts [all valid Intl locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation)
   */
  locale?: string;
  /**
   * Minimum value. Users are still able to manually enter a date below this value.
   */
  minValue?: Date;
  /**
   * Maximum value. Users are still able to manually enter a date above this value.
   */
  maxValue?: Date;
  /**
   * Show compact styling
   */
  small?: boolean;
  /**
   * Override default date parsing. Receives a localized input value and returns a `Date` object.
   */
  customParseDate?: (inputValue: string) => Date;
  /**
   * The ref key used to position the dropdown
   * @default ref
   */
  refKey?: string;
  /**
   * Locale-aware placement for the dropdown element
   * @default bottom-start
   **/
  placement?: GARDEN_PLACEMENT;
  /**
   * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
   */
  popperModifiers?: any;
  /**
   * Show open animations
   * @default true
   */
  animate?: boolean;
  /**
   * Allow dropdown to reposition during browser resize events
   * @default true
   */
  eventsEnabled?: boolean;
  /**
   * The z-index of the dropdown
   * @default 1000
   */
  zIndex?: number;
}

const Datepicker: React.FunctionComponent<IDatepickerProps> = props => {
  const {
    children,
    placement,
    popperModifiers,
    eventsEnabled,
    zIndex,
    animate,
    refKey,
    value,
    small,
    onChange,
    formatDate,
    minValue,
    maxValue,
    locale,
    customParseDate
  } = props;
  const memoizedReducer = useCallback(datepickerReducer({ value, formatDate, locale }), [
    value,
    formatDate,
    locale,
    onChange
  ]);
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
    if (state.isOpen) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  });

  /**
   * Dispatch update to reducer when controlled value is changed
   */
  useEffect(() => {
    dispatch({ type: 'CONTROLLED_VALUE_CHANGE', value });
  }, [value]);

  /**
   * Trigger `onChange` side-effect when input value becomes a valid date
   */
  useEffect(() => {
    if (customParseDate) {
      const parsedDate = customParseDate(state.inputValue);

      if (parsedDate && !isSameDay(parsedDate, value!)) {
        onChange && onChange(parsedDate);
      }

      return;
    }
    const parsedInputValue = parseInputValue({
      inputValue: state.inputValue
    });

    if (isValid(parsedInputValue) && !isSameDay(parsedInputValue, value!)) {
      onChange && onChange(parsedInputValue);
    }
  }, [state.inputValue, formatDate, locale, onChange, value, customParseDate]);

  useEffect(() => {
    dispatch({ type: 'CONTROLLED_LOCALE_CHANGE' });
  }, [locale]);

  const popperPlacement = isRtl(props)
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  return (
    <DatepickerContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <Manager>
        <Reference>
          {({ ref }) => {
            return React.cloneElement(React.Children.only(children as any), {
              [refKey!]: (refValue: HTMLElement) => {
                ref(refValue);
                (inputRef as any).current = refValue;
              },
              onMouseDown: () => {
                isInputMouseDownRef.current = true;
              },
              onMouseUp: () => {
                setTimeout(() => {
                  isInputMouseDownRef.current = false;
                }, 0);
              },
              onClick: () => {
                /** Ensure click/focus events from associated labels are not triggered */
                if (isInputMouseDownRef.current && !state.isOpen) {
                  dispatch({ type: 'OPEN' });
                }
              },
              onBlur: () => {
                dispatch({ type: 'CLOSE' });
              },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch({ type: 'MANUALLY_UPDATE_INPUT', value: e.target.value });
              },
              onKeyDown: e => {
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
              },
              autoComplete: 'off',
              value: state.inputValue
            });
          }}
        </Reference>
        {state.isOpen && (
          <Popper
            placement={popperPlacement as any}
            modifiers={popperModifiers}
            // Disable position updating on scroll events while menu is closed
            eventsEnabled={state.isOpen && eventsEnabled}
          >
            {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
              scheduleUpdateRef.current = scheduleUpdate;

              const popperStyle = { ...style, zIndex };

              return (
                <div
                  ref={ref}
                  style={popperStyle}
                  data-garden-id="datepickers.datepicker"
                  date-garden-version={PACKAGE_VERSION}
                >
                  <StyledMenu
                    animate={state.isOpen && animate}
                    placement={currentPlacement as any}
                    data-test-id="datepicker-menu"
                    data-test-open={state.isOpen}
                    data-test-rtl={isRtl(props)}
                  >
                    <Calendar
                      small={small}
                      value={value}
                      minValue={minValue}
                      maxValue={maxValue}
                      locale={locale}
                    />
                  </StyledMenu>
                </div>
              );
            }}
          </Popper>
        )}
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
  small: PropTypes.bool,
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
  animate: PropTypes.bool,
  eventsEnabled: PropTypes.bool,
  zIndex: PropTypes.number
};

Datepicker.defaultProps = {
  placement: 'bottom-start',
  refKey: 'ref',
  animate: true,
  eventsEnabled: true,
  zIndex: 1000,
  locale: 'en-US'
};

export default withTheme(Datepicker) as FunctionComponent<IDatepickerProps>;
