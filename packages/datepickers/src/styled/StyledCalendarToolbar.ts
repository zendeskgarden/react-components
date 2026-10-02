/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledHeader } from './StyledHeader';

/**
 * `isolation: isolate` is required: without it, `StyledCalendarMonth` (its
 * sibling, overlapping the same grid rows/columns) paints on top and
 * silently swallows clicks on the paddles, even with no `z-index` set.
 */
export const StyledCalendarToolbar = styled(StyledHeader)`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: subgrid;
  isolation: isolate;
`;
