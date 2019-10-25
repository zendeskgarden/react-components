/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { retrieveSpacing } from './utils';

const COMPONENT_ID = 'datepickers.calendar_item';

const StyledCalendarItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{
  isSmall?: boolean;
}>`
  display: inline-block;
  position: relative;
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};
  vertical-align: top;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCalendarItem.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledCalendarItem;
