/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledHeaderLabel } from './StyledHeaderLabel';

/**
 * `DatePicker`'s month/year heading, placed against `StyledCalendarGrid`'s
 * day columns (3 through 5, between the toolbar's inner paddles) via the
 * month box's (`StyledCalendarMonth`) inherited `subgrid` tracks.
 */
export const StyledCalendarHeading = styled(StyledHeaderLabel)`
  grid-row: 1;
  grid-column: 3 / 6;
  text-align: center;
`;
