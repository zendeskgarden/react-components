/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledHeaderLabel } from './StyledHeaderLabel';

/**
 * Month/year heading, spanning all 7 of its month's day columns via the
 * month box's (`StyledCalendarMonth`) inherited `subgrid` tracks, so it has
 * room to grow without wrapping or squishing when compact.
 */
export const StyledCalendarHeading = styled(StyledHeaderLabel)`
  grid-row: 1;
  grid-column: 1 / 8;
  text-align: center;
`;
