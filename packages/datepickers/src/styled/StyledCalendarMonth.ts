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

/** Shared by `DatePicker` (one month) and `DatePickerRange` (two, side by side). */
export const StyledCalendarMonth = styled(StyledDatePicker)<IStyledCalendarMonthProps>`
  grid-column: ${props => props.$gridColumn || '1 / -1'};
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  align-items: center;
  margin: 0;
`;
