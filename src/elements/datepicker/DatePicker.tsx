/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { autoPlacement, autoUpdate, flip, platform, useFloating } from '@floating-ui/react-dom';
import PropTypes from 'prop-types';
import {
  useRef,
  useEffect,
  useReducer,
  useCallback,
  useState,
  useContext,
  useMemo,
  forwardRef,
  Children,
  InputHTMLAttributes,
  ReactElement
} from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'styled-components';

import { DatePickerProvider } from '../../context/datepicker/DatePickerContext';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getFloatingPlacements } from '../../theming/utils/getFloatingPlacements';
import { IDatePickerProps, DATEPICKER_PLACEMENT, WEEK_STARTS_ON } from '../../types/elements';
import { getElementRef } from '../../utils/shared/getElementRef';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledMenu } from '../../views/datepicker/StyledMenu';
import { StyledMenuWrapper } from '../../views/datepicker/StyledMenuWrapper';
import { COMPONENT_IDS } from '../utils';
import { Calendar } from './Calendar';
import { datepickerReducer, retrieveInitialState } from './date-picker-reducer';
import { Input } from './Input';

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
    ...menuProps
  } = props;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedReducer = useCallback(datepickerReducer({ value, formatDate, locale }), [
    value,
    formatDate,
    locale
  ]);
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

  const Child = Children.only(children) as ReactElement<InputHTMLAttributes<HTMLInputElement>>;

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

  const isMenuAnimated = !!isAnimated && (state.isOpen || isVisible);

  const Node = (
    <StyledMenuWrapper
      ref={floatingRef}
      className={isMenuAnimated ? 'is-animated' : undefined}
      style={{ transform }}
      $isAnimated={isMenuAnimated}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!state.isOpen || undefined}
      data-test-id="datepicker-menu"
      data-test-open={state.isOpen}
      data-test-rtl={theme.rtl}
      data-garden-id={COMPONENT_IDS['datepickers.menu_wrapper']}
      data-garden-version={PACKAGE_VERSION}
    >
      {!!(state.isOpen || isVisible) && (
        <StyledMenu
          {...menuProps}
          data-garden-id={COMPONENT_IDS['datepickers.menu']}
          data-garden-version={PACKAGE_VERSION}
        >
          <Calendar
            ref={calendarRef}
            isCompact={isCompact}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            locale={locale}
            weekStartsOn={weekStartsOn}
            onChange={onChange}
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
        value={value}
        onChange={onChange}
        customParseDate={customParseDate}
        ref={mergeRefs([triggerRef, getElementRef(Child)])}
      />
      <DatePickerProvider value={contextValue}>
        {appendToNode ? createPortal(Node, appendToNode) : Node}
      </DatePickerProvider>
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
  placement: PropTypes.oneOf(DATEPICKER_PLACEMENT),
  isAnimated: PropTypes.bool,
  zIndex: PropTypes.number
};
