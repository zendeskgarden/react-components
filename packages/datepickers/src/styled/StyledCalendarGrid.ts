/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.calendar_grid';

/**
 * `DatePicker`'s outer calendar wrapper. Establishes the explicit column
 * tracks that both the toolbar (`StyledHeader`) and the month box
 * (`StyledCalendarMonth`) inherit via `subgrid`, so the toolbar's paddles
 * can align to specific day columns while remaining one contiguous
 * `role="toolbar"` element in DOM/reading order.
 */
export const StyledCalendarGrid = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-template-rows: auto auto;
  align-items: center;
  padding: ${props => props.theme.space.base * 5}px;

  ${componentStyles};
`;
