/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledDatePicker } from './StyledDatePicker';

interface IStyledCalendarMonthProps {
  $gridColumn?: string;
}

/**
 * Month box (heading + day grid), nested inside `StyledCalendarGrid` (used
 * by `DatePicker`) or `StyledRangeCalendar` (used by `DatePickerRange`,
 * which renders two of these side by side). Spans the given column range -
 * the whole parent by default, or just one month's 7 columns for
 * `DatePickerRange` - and inherits those tracks via `subgrid`, so the
 * heading and table can each be placed against them (see
 * `StyledCalendarHeading`/`StyledCalendarTable`).
 */
export const StyledCalendarMonth = styled(StyledDatePicker)<IStyledCalendarMonthProps>`
  grid-column: ${props => props.$gridColumn || '1 / -1'};
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  align-items: center;
  margin: 0;
`;
