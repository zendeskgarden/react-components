/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledDayCell } from './StyledDayCell';

const COMPONENT_ID = 'datepickers.calendar_item';

/** Fills its cell, and contains a range cell's `StyledHighlight` behind the day number. */
export const StyledCalendarItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 100%;

  /* The focus ring extends past the day number, so it paints above the neighboring days' hover and range tints. */
  ${StyledDayCell}:focus-visible & {
    z-index: 1;
  }

  ${componentStyles};
`;
