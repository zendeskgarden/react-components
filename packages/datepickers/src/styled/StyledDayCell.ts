/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCalendarTable } from './StyledCalendarTable';

const COMPONENT_ID = 'datepickers.day_cell';

export const StyledDayCell = styled.td.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0;
  cursor: pointer;
  padding: 0;

  /* The visible focus ring is drawn on StyledDayNumber instead, scoped to this cell's :focus-visible state. */
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'],
  ${StyledCalendarTable}[aria-readonly='true'] & {
    cursor: default;
  }

  ${componentStyles};
`;
