/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { IDatePickerProps, PLACEMENT, WEEK_STARTS_ON } from '../../types';
import { Calendar } from './components/Calendar';
import { DatePickerContext } from './utils/useDatePickerContext';
import { useDatePicker } from './utils/useDatePicker';
import { InputGroup } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Input } from './components/Input';
import { Trigger } from './components/Trigger';
import { Dialog } from './components/Dialog';

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
    isCompact = false,
    onChange,
    formatDate,
    minValue,
    maxValue,
    locale = 'en-US',
    weekStartsOn,
    customParseDate,
    toggleCalendarLabel,
    previousMonthLabel,
    nextMonthLabel,
    previousYearLabel,
    nextYearLabel,
    toolbarLabel,
    selectableCellRoleDescription,
    onValueSettled,
    ...menuProps
  } = props;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const inputRef = useRef<HTMLInputElement>(null);

  const Child = React.Children.only<React.ReactElement & React.RefAttributes<HTMLInputElement>>(
    children
  );

  const datePicker = useDatePicker({
    value,
    minValue,
    maxValue,
    locale,
    weekStartsOn,
    rtl: theme.rtl,
    formatDate,
    customParseDate,
    required: Child.props.required,
    onChange,
    onValueSettled,
    inputRef
  });

  const { getGroupProps } = datePicker;

  return (
    <DatePickerContext.Provider value={datePicker}>
      <InputGroup {...getGroupProps()} isUnified isCompact={isCompact}>
        <Input
          element={Child}
          refKey={refKey!}
          ref={mergeRefs([inputRef, Child.ref ? Child.ref : null])}
        />
        <Trigger isCompact={isCompact} toggleCalendarLabel={toggleCalendarLabel} />
      </InputGroup>
      <Dialog
        appendToNode={appendToNode}
        placement={_placement}
        isAnimated={isAnimated}
        zIndex={zIndex}
        isCompact={isCompact}
        {...menuProps}
      >
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
          selectableCellRoleDescription={selectableCellRoleDescription}
        />
      </Dialog>
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
  toggleCalendarLabel: PropTypes.string,
  previousMonthLabel: PropTypes.string,
  nextMonthLabel: PropTypes.string,
  previousYearLabel: PropTypes.string,
  nextYearLabel: PropTypes.string,
  toolbarLabel: PropTypes.string,
  selectableCellRoleDescription: PropTypes.string
};
