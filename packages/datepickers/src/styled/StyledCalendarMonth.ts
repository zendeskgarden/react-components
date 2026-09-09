/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledDatePicker } from './StyledDatePicker';

/**
 * `DatePicker`'s month box (heading + day grid), nested inside
 * `StyledCalendarGrid`. Spans its parent's full column/row tracks and
 * inherits them via `subgrid`, so the heading and table can each be placed
 * against those same tracks (see `StyledHeaderLabel`/`StyledCalendar`).
 */
export const StyledCalendarMonth = styled(StyledDatePicker)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  align-items: center;
  margin: 0;
`;
