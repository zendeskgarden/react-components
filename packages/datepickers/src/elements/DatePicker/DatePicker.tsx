/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useEffect, useRef, useState, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { autoPlacement, autoUpdate, flip, platform, useFloating } from '@floating-ui/react-dom';
import { IDatePickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import { DatePickerContext } from './utils/useDatePickerContext';
import { useDatePicker } from './utils/useDatePicker';
import { InputGroup } from '@zendeskgarden/react-forms';
import { StyledMenu, StyledMenuWrapper } from '../../styled';
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
    previousMonthLabel,
    nextMonthLabel,
    previousYearLabel,
    nextYearLabel,
    toolbarLabel,
    onValueSettled,
    ...menuProps
  } = props;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const Child = React.Children.only<React.ReactElement & React.RefAttributes<HTMLInputElement>>(
    children
  );

  const datePicker = useDatePicker({
    value,
    minValue,
    maxValue,
    locale,
    weekStartsOn,
    formatDate,
    customParseDate,
    required: Child.props.required,
    onChange,
    onValueSettled,
    inputRef
  });

  const { isOpen, buttonId, dialogRef, getGroupProps, getTriggerProps, getDialogProps } =
    datePicker;

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
    elements: { reference: inputRef?.current, floating: dialogRef?.current as HTMLElement | null },
    placement: floatingPlacement,
    middleware: [_placement === 'auto' ? autoPlacement() : flip()]
  });

  useEffect(() => {
    // Only allow positioning updates on visible tooltip.
    let cleanup: () => void;

    if (isOpen && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }

    return () => cleanup && cleanup();
  }, [isOpen, refs.reference, refs.floating, update]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeout);
  }, [isOpen, isAnimated]);

  const Node = (
    <StyledMenuWrapper
      {...getDialogProps({ style: { transform } })}
      $isAnimated={!!isAnimated && (isOpen || isVisible)}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!isOpen || undefined}
      data-test-id="datepicker-menu"
      data-test-open={isOpen}
      data-test-rtl={theme.rtl}
    >
      {!!(isOpen || isVisible) && (
        <StyledMenu {...menuProps}>
          <Calendar
            ref={calendarRef}
            isCompact={isCompact}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            locale={locale}
            weekStartsOn={weekStartsOn}
            previousMonthLabel={previousMonthLabel}
            nextMonthLabel={nextMonthLabel}
            previousYearLabel={previousYearLabel}
            nextYearLabel={nextYearLabel}
            toolbarLabel={toolbarLabel}
          />
        </StyledMenu>
      )}
    </StyledMenuWrapper>
  );

  return (
    <DatePickerContext.Provider value={datePicker}>
      <InputGroup {...getGroupProps()} isUnified isCompact={isCompact}>
        <Input
          element={Child}
          refKey={refKey!}
          ref={mergeRefs([inputRef, Child.ref ? Child.ref : null])}
        />
        <CalendarButton
          id={buttonId}
          isCompact={isCompact}
          openCalendarLabel={openCalendarLabel}
          {...getTriggerProps()}
        />
      </InputGroup>
      {appendToNode ? createPortal(Node, appendToNode) : Node}
    </DatePickerContext.Provider>
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
