/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useReducer, useCallback, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import { Locale } from 'date-fns';
import parse from 'date-fns/parse';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import isBefore from 'date-fns/isBefore';
import { isRtl, withTheme } from '@zendeskgarden/react-theming';
import { KEY_CODES } from '@zendeskgarden/container-utilities';

import { GARDEN_PLACEMENT } from './';
import { StyledMenu } from './styled';
import { getRtlPopperPlacement, getPopperPlacement } from './utils/garden-placements';
import Calendar from './components/Calendar';
import { datepickerReducer, retrieveInitialState } from './utils/reducer';
import { DatepickerContext } from './utils/useDatepickerContext';

/**
 * Parse string input value using current locale and date formats
 */
function parseInputValue({
  inputValue,
  locale,
  dateFormat
}: {
  inputValue: string;
  locale?: Locale;
  dateFormat: string;
}): Date {
  const MINIMUM_DATE = new Date(1000, 0, 0);
  const parseOptions = {
    locale,
    useAdditionalDayOfYearTokens: true,
    useAdditionalWeekYearTokens: true
  };

  let tryParseDate = parse(inputValue, 'P', MINIMUM_DATE, parseOptions);

  if (!isValid(tryParseDate) || isSameDay(tryParseDate, MINIMUM_DATE)) {
    tryParseDate = parse(inputValue, 'PP', MINIMUM_DATE, parseOptions);
  }

  if (!isValid(tryParseDate) || isSameDay(tryParseDate, MINIMUM_DATE)) {
    tryParseDate = parse(inputValue, 'PPP', MINIMUM_DATE, parseOptions);
  }

  if (!isValid(tryParseDate) || isSameDay(tryParseDate, MINIMUM_DATE)) {
    tryParseDate = parse(inputValue, dateFormat, MINIMUM_DATE, parseOptions);
  }

  if (
    !isValid(tryParseDate) ||
    isSameDay(tryParseDate, MINIMUM_DATE) ||
    isBefore(tryParseDate, MINIMUM_DATE)
  ) {
    return new Date(NaN);
  }

  return tryParseDate;
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
   * Formats date object with a [Unicode TR35 format string](https://date-fns.org/v2.0.0-beta.2/docs/format)
   * Use the "local-aware" formats for best flexibility.
   */
  dateFormat?: string;
  /**
   * Accepts valid date-fns locale object https://date-fns.org/v2.0.0-beta.2/docs/I18n
   */
  locale?: Locale;
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
   * Override default date parsing
   */
  customParseDate?: (inputValue: string) => Date;
  /**
   * The ref key used to position the dropdown
   */
  refKey?: string;
  /** Locale-aware placement for the dropdown element */
  placement?: GARDEN_PLACEMENT;
  /** Display an arrow to the reference element */
  arrow?: boolean;
  /**
   * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
   */
  popperModifiers?: any;
  /**
   * Show open animations
   */
  animate?: boolean;
  /**
   * Allow dropdown to reposition during browser resize events
   */
  eventsEnabled?: boolean;
  /**
   * The z-index of the dropdown
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
    dateFormat = 'PPP',
    minValue,
    maxValue,
    locale,
    customParseDate
  } = props;
  const memoizedReducer = useCallback(datepickerReducer({ value, dateFormat, locale }), [
    value,
    dateFormat,
    locale,
    onChange
  ]);
  const [state, dispatch] = useReducer(memoizedReducer, retrieveInitialState(props));
  const scheduleUpdateRef = useRef<(() => void) | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

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
   * Disptach update to reducer when controlled value is changed
   */
  useEffect(() => {
    dispatch({ type: 'controlled_value_change', value });
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
      inputValue: state.inputValue,
      locale,
      dateFormat
    });

    if (isValid(parsedInputValue) && !isSameDay(parsedInputValue, value!)) {
      onChange && onChange(parsedInputValue);
    }
  }, [state.inputValue, dateFormat, locale, onChange, value, customParseDate]);

  useEffect(() => {
    dispatch({ type: 'controlled_locale_change' });
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
              onFocus: () => {
                dispatch({ type: 'open' });
              },
              onClick: () => {
                if (!state.isOpen) {
                  dispatch({ type: 'open' });
                }
              },
              onBlur: () => {
                dispatch({ type: 'close' });
              },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch({ type: 'manually_update_input', value: e.target.value });
              },
              onKeyDown: e => {
                switch (e.keyCode) {
                  case KEY_CODES.ESCAPE:
                  case KEY_CODES.ENTER:
                    dispatch({ type: 'close' });
                    break;
                  case KEY_CODES.UP:
                  case KEY_CODES.DOWN:
                  case KEY_CODES.SPACE:
                    dispatch({ type: 'open' });
                    break;
                }
              },
              autoComplete: 'off',
              value: state.inputValue
            });
          }}
        </Reference>
        <Popper
          placement={popperPlacement as any}
          modifiers={popperModifiers}
          // Disable position updating on scroll events while menu is closed
          eventsEnabled={state.isOpen && eventsEnabled}
        >
          {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
            scheduleUpdateRef.current = scheduleUpdate;

            let popperStyle = { ...style, zIndex };

            if (!state.isOpen) {
              popperStyle = { ...style, zIndex: -1, visibility: 'hidden' };
            }

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
      </Manager>
    </DatepickerContext.Provider>
  );
};

Datepicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.any,
  dateFormat: PropTypes.string.isRequired,
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
  arrow: PropTypes.bool,
  popperModifiers: PropTypes.any,
  animate: PropTypes.bool,
  eventsEnabled: PropTypes.bool,
  zIndex: PropTypes.number
};

Datepicker.defaultProps = {
  placement: 'bottom-start',
  refKey: 'ref',
  dateFormat: 'PPP',
  animate: true,
  eventsEnabled: true,
  zIndex: 1000
};

export default withTheme(Datepicker) as FunctionComponent<IDatepickerProps>;
