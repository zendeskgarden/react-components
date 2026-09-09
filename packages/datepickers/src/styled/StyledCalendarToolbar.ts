/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledHeader } from './StyledHeader';

/**
 * `DatePicker`'s toolbar root. Spans every column of `StyledCalendarGrid`
 * and inherits those exact tracks via `subgrid`, so its paddles
 * (`StyledHeaderPaddle`) can align to specific day columns.
 *
 * `isolation: isolate` puts this element into its own stacking context, so
 * it paints after (i.e. on top of) `StyledCalendarMonth` - its sibling,
 * which spans the same rows/columns to lay out the heading and day grid -
 * even though neither element has a `z-index` and `StyledCalendarMonth`
 * comes later in the DOM. Without it, `StyledCalendarMonth` paints over the
 * toolbar wherever they overlap, silently swallowing clicks on the paddles.
 */
export const StyledCalendarToolbar = styled(StyledHeader)`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: subgrid;
  isolation: isolate;
`;
