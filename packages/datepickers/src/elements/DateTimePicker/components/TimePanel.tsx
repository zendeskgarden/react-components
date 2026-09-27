/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledTimePanel } from '../../../styled';
import {
  formatTimeOption,
  generateHourOptions,
  generateMinuteOptions,
  getDayPeriodLabels,
  getDisabledHours,
  getDisabledMinutes,
  to12Hour
} from '../utils/time-utils';
import useDateTimePickerContext from '../utils/useDateTimePickerContext';
import { TimeColumn } from './TimeColumn';

export const TimePanel: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const { state, dispatch, isAmPm, timeStep, minValue, maxValue, value, isCompact, locale } =
    useDateTimePickerContext();

  const hourOptions = useMemo(() => generateHourOptions(isAmPm), [isAmPm]);
  const minuteOptions = useMemo(() => generateMinuteOptions(timeStep), [timeStep]);

  const disabledHours = useMemo(
    () => getDisabledHours(value, minValue, maxValue),
    [value, minValue, maxValue]
  );

  const disabledMinutes = useMemo(
    () => getDisabledMinutes(value, state.selectedHour, minValue, maxValue),
    [value, state.selectedHour, minValue, maxValue]
  );

  const dayPeriodLabels = useMemo(() => getDayPeriodLabels(locale), [locale]);

  const selectedHourDisplay = isAmPm
    ? to12Hour(state.selectedHour).hour.toString()
    : state.selectedHour.toString();

  const selectedPeriod = state.selectedHour >= 12 ? 'PM' : 'AM';

  const hourItems = hourOptions.map(h => ({
    value: h.toString(),
    label: isAmPm ? h.toString() : formatTimeOption(h)
  }));

  const disabledHourValues = isAmPm
    ? disabledHours
        .map(h => {
          const { hour, period } = to12Hour(h);

          return period === selectedPeriod ? hour.toString() : null;
        })
        .filter((v): v is string => v !== null)
    : disabledHours.map(h => h.toString());

  const minuteItems = minuteOptions.map(m => ({
    value: m.toString(),
    label: formatTimeOption(m)
  }));

  const disabledMinuteValues = disabledMinutes.map(m => m.toString());

  const periodItems = [
    { value: 'AM', label: dayPeriodLabels.am },
    { value: 'PM', label: dayPeriodLabels.pm }
  ];

  const periodColumn = isAmPm ? (
    <TimeColumn
      options={periodItems}
      selectedValue={selectedPeriod}
      isCompact={isCompact}
      isScrollable={false}
      onSelect={val => {
        dispatch({ type: 'SELECT_PERIOD', value: val as 'AM' | 'PM' });
      }}
    />
  ) : null;

  return (
    <StyledTimePanel
      $isCompact={isCompact}
      data-test-id="time-panel"
      onMouseDown={e => {
        e.preventDefault();
      }}
    >
      {theme.rtl ? periodColumn : null}
      <TimeColumn
        options={hourItems}
        selectedValue={selectedHourDisplay}
        disabledValues={disabledHourValues}
        isCompact={isCompact}
        onSelect={val => {
          let hour = parseInt(val, 10);

          if (isAmPm) {
            if (selectedPeriod === 'PM' && hour !== 12) {
              hour += 12;
            } else if (selectedPeriod === 'AM' && hour === 12) {
              hour = 0;
            }
          }

          dispatch({ type: 'SELECT_HOUR', value: hour });
        }}
      />
      <TimeColumn
        options={minuteItems}
        selectedValue={state.selectedMinute.toString()}
        disabledValues={disabledMinuteValues}
        isCompact={isCompact}
        onSelect={val => {
          dispatch({ type: 'SELECT_MINUTE', value: parseInt(val, 10) });
        }}
      />
      {theme.rtl ? null : periodColumn}
    </StyledTimePanel>
  );
};

TimePanel.displayName = 'TimePanel';
