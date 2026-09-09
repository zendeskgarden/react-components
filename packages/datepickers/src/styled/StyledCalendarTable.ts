/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledCalendar } from './StyledCalendar';

/**
 * `DatePicker`'s day grid table, spanning every column of
 * `StyledCalendarGrid` on the second row, via the month box's
 * (`StyledCalendarMonth`) inherited `subgrid` tracks.
 */
export const StyledCalendarTable = styled(StyledCalendar)`
  grid-row: 2;
  grid-column: 1 / -1;
  align-self: start;
`;
